BUILD_DATE = $(shell date +%Y_%m_%d_%H_%M_%S)
# BUILD_DATE = latest

REGISTRY := registry.igoryusha.love/promo

grd:
	make build
	make push

build:
	make -j 3 build.nextjs build.nginx build.write

build.nextjs:
	DOCKER_BUILDKIT=1 docker build \
		--platform linux/amd64 \
		-f ./docker/nextjs/Dockerfile . \
		-t ${REGISTRY}/nextjs:build_${BUILD_DATE}

build.nginx:
	DOCKER_BUILDKIT=1 docker build \
		--platform linux/amd64 \
		-f ./docker/nginx/Dockerfile . \
		-t ${REGISTRY}/nginx:build_${BUILD_DATE}

build.write:
	echo ${BUILD_DATE} > last_build_date.txt

push:
	make -j 2 push.nextjs push.nginx

push.nextjs:
	docker push ${REGISTRY}/nextjs:build_$(shell cat last_build_date.txt)

push.nginx:
	docker push ${REGISTRY}/nginx:build_$(shell cat last_build_date.txt)
