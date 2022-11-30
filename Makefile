install:
		npm ci

make brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .
