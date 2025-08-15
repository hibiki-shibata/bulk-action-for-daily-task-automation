SHELL=/bin/bash



.PHONY: clean
clean:
	rm -rf ./node_modules
	rm -rf ./dist/


.PHONY: run
run:
	tsc
	node ./dist/main.js