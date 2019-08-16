usage = "\
Usage: make [target] \n\n\
Available targets:\n\
pre      打包\n\
release  发布"

default:
	@echo $(usage)

pre:
	yarn build

release:
	yarn release
