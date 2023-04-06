install:
	npm ci

gendiff:
	node bin/gendiff.js -f plain ./__fixtures__/file1.json ./__fixtures__/file2.json

publish:
	npm publish --dry-run

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test:
	npx jest
