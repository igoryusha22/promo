---
title: 'Как я поднимал свой kubernetes кластер'
date: '2024-03-13'
description: 'С какими проблемами я сталкивался?'
---

# Как я поднимал свой kubernetes кластер

Вступление... Сразу после того, как я уволился со старой работы, я решил...

## Договоренности

- у вас уже должны быть машинки где вы будете выполнять, у меня это обычные vds от VDSina.ru, если у вас еще нет, то можете воспользоваться [парнерской ссылкой](
https://vdsina.ru/?partner=xp4au1f4yf), вам будет 10% скидка, а мне 10% от вашей покупки, вот такой симбиоз. 😀
- в этом примере я показываю пример на 1 master и 1 worker нодах, о том как подключать дополнительные ноды можно посмотреть в этой статье – ~~статья еще не написана~~;
-


## Разворачивание кластера

Для удобства дальнейшего взаимодействия, master и worker нодах поменяем имя хоста:

На master ноде:

```bash
hostnamectl set-hostname master
```

На worker ноде:

```bash
hostnamectl set-hostname worker-1
```

На master и worker нодах изменим $PS1 (изменим вид строки ввода) и добавим пару alias’ов:

```bash
apt update
apt install docker.io
systemctl enable docker

apt-get install net-toolshel

apt-get install ipvsadm

cat <<EOF > .bash_aliases
PS1="\[$(tput setaf 47)\]\u\[$(tput setaf 220)\]@\[$(tput setaf 196)\]$(echo $HOSTNAME) \[$(tput setaf 225)\]\@ \[$(tput setaf 14)\]\w \[$(tput sgr0)\]$ "
alias k="kubectl"
EOF

. .bashrc

# Увеличим допустимое время бездействия, прежде чем host разорвет ssh соеденение:
cat <<EOF >> /etc/ssh/sshd_config
ClientAliveInterval 3600 # The ClientAliveInterval parameter specifies the time interval in seconds after which the server will send a keep-alive message to the client.
ClientAliveCountMax 24 # The ClientAliveCountMax parameter specifies the number of keep-alive messages that can be sent without a response from the client before the server terminates the connection.
EOF

service ssh restart

# Настроим containerd – https://stackoverflow.com/questions/70849989/kube-apiserver-docker-shutting-down-got-signal-terminated/74695838#74695838
mkdir /etc/containerd
cat <<EOF >> /etc/containerd/config.toml
version = 2
[plugins]
  [plugins."io.containerd.grpc.v1.cri"]
   [plugins."io.containerd.grpc.v1.cri".containerd]
      [plugins."io.containerd.grpc.v1.cri".containerd.runtimes]
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
          runtime_type = "io.containerd.runc.v2"
          [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
            SystemdCgroup = true
EOF
```

Отключим swap:

```bash
sudo swapoff -a
```

На master ноде установим kubeadm, kubelet, kubectl (актуальную версию для установки лучше взять из – https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#installing-kubeadm-kubelet-and-kubectl):

```bash
sudo apt-get update
# apt-transport-https may be a dummy package; if so, you can skip that package
sudo apt-get install -y apt-transport-https ca-certificates curl gpg

# If the folder `/etc/apt/keyrings` does not exist, it should be created before the curl command, read the note below.
# sudo mkdir -p -m 755 /etc/apt/keyrings
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.29/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

# This overwrites any existing configuration in /etc/apt/sources.list.d/kubernetes.list
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.29/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

На worker ноде установим все, кроме kubectl:

```bash
sudo apt-get update
# apt-transport-https may be a dummy package; if so, you can skip that package
sudo apt-get install -y apt-transport-https ca-certificates curl gpg

# If the folder `/etc/apt/keyrings` does not exist, it should be created before the curl command, read the note below.
# sudo mkdir -p -m 755 /etc/apt/keyrings
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.29/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

# This overwrites any existing configuration in /etc/apt/sources.list.d/kubernetes.list
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.29/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt-get update
sudo apt-get install -y kubelet kubeadm
sudo apt-mark hold kubelet kubeadm
```

На master ноде создадим конфиг для создания кластера:

```bash
cat <<EOF >> cluster-config.yaml
---
apiVersion: kubeadm.k8s.io/v1beta3
kind: ClusterConfiguration
clusterName: igoryusha.love
---
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: ipvs
EOF
```

Запустим создание кластера:

```bash
kubeadm init --config kube-config.yaml --dry-run | less
```

Выполним команды после:

```bash
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

На worker ноде:

```bash
kubeadm join {{ тут_будет_ваш_ip }}:6443 --token {{ тут будет ваш токен }} --discovery-token-ca-cert-hash {{ тут будет ваш токен }}
```

https://docs.tigera.io/calico/latest/getting-started/kubernetes/hardway/the-calico-datastore


Установим calico (https://docs.tigera.io/calico/latest/getting-started/kubernetes/hardway/the-calico-datastore):

```bash
# Download the calicoctl binary to a Linux host with access to Kubernetes.
curl https://raw.githubusercontent.com/projectcalico/calico/v3.25.2/manifests/calico.yaml -Okubectl apply -f calico.yaml
kubectl apply -f calico.yaml

# Configure calicoctl to access Kubernetes.
wget -O calicoctl https://github.com/projectcalico/calico/releases/download/v3.25.2/calicoctl-linux-amd64
chmod +x calicoctl
sudo mv calicoctl /usr/local/bin/
```
