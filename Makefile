usage = "\
Usage: make [target] \n\n\
Available targets:\n\
rel   发布"

default:
	@echo $(usage)

rel:
	yarn release
