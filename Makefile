all: scss html

html:
	ts-node example.ts

scss:
	sass main.scss > main.css

claen:
	rm -rf main.css index.html