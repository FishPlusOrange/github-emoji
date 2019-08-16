usage = "\
Usage: make [target] \n\n\
Available targets:\n\
release  发布"

default:
	@echo $(usage)

rel:
	yarn release
