install:
	npm ci

gendiff:
	node bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test:
	npx jest
