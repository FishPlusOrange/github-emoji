usage = "\
Usage: make [target] \n\n\
Available targets:\n\
pre      本地打包"

default:
	@echo $(usage)

pre:
	yarn build
