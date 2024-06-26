BUILD_DATE = $(shell date +%Y_%m_%d_%H_%M_%S)
# BUILD_DATE = latest

REGISTRY := registry.igoryusha.love/promo

up:
	docker-compose up

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

copy:
	export SYNC_DOCKER_ID=`docker run -d ${REGISTRY}/nextjs:build_2024_03_22_18_12_20 true`; \
	docker cp $${SYNC_DOCKER_ID}:/app/package-lock.json ~/Desktop/ilove/active/promo/package-lock.json; \
	docker rm $${SYNC_DOCKER_ID}