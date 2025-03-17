BUILD=$(shell git log --pretty=format:'%h' -n 1)

build:
	docker build \
	--platform linux/amd64 \
	-t $(CI_REGISTRY_IMAGE)/$(image):$(BUILD) \
	-f $(dockerfile) \
	.

login:
	echo $(CI_REGISTRY_PASSWORD) | docker login $(CI_REGISTRY) -u $(CI_REGISTRY_USER) --password-stdin

registry:
	make login
	docker push $(CI_REGISTRY_IMAGE)/$(image):$(BUILD)

deploy:
	make login
	docker pull $(CI_REGISTRY_IMAGE)/$(image):$(BUILD)
	docker tag $(CI_REGISTRY_IMAGE)/$(image):$(BUILD) $(CI_REGISTRY_IMAGE)/$(image):${tag}
	docker push $(CI_REGISTRY_IMAGE)/$(image):${tag}
	kubectl config view --minify
	kubectl rollout restart deployments/${deployment}
