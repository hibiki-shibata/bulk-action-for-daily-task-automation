SHELL=/bin/bash

.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make run       - Compile TypeScript and run the application"
	@echo "  make clean     - Remove compiled files from the dist directory"
	@echo "  make cleanup   - Remove node_modules and dist directories"
	@echo "  make build     - Install dependencies, compile TypeScript, and run the application"



.PHONY: clean
clean:
	rm -rf ./dist/


.PHONY: cleanup
cleanup:
	rm -rf ./node_modules/
	rm -rf ./dist/		


.PHONY: run
run:
	tsc
	node ./dist/src/main.js


.PHONY: setup
setup:
	npm install
	tsc
	@echo "Build completed!🎉 You can now run the BulkTool using 'make run'"

	