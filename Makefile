all: scss html

html:
	ts-node example.ts > index.html

scss:
	sass main.scss > main.css

claen:
	rm -rf main.css index.html