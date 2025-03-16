BUILD=$(shell git log --pretty=format:'%h' -n 1)

build:
	docker build \
	--platform linux/amd64 \
	-t $(CI_REGISTRY_IMAGE)/${image}:$(BUILD) \
	-f ${dockerfile} \
	.

registry:
	docker login -u $(CI_REGISTRY_USER) -p $(CI_REGISTRY_PASSWORD) $(CI_REGISTRY)
	docker push $(CI_REGISTRY_IMAGE)/${image}:$(BUILD)

deploy:
	docker login -u $(CI_REGISTRY_USER) -p $(CI_REGISTRY_PASSWORD) $(CI_REGISTRY)
	docker pull $(CI_REGISTRY_IMAGE)/${image}:$(BUILD)
	docker tag $(CI_REGISTRY_IMAGE)/${image}:$(BUILD) $(CI_REGISTRY_IMAGE)/${image}:${tag}
	docker push $(CI_REGISTRY_IMAGE)/${image}:${tag}
	KUBECONFIG=${KUBECONFIG} kubectl rollout restart deployments/${deployment}
