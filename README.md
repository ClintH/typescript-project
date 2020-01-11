# TypeScript project template

Builds using `tsc` into the `build` sub folder.

# Install

Use degit to download, and then run `npm install`.

```
npm install -g degit
degit https://github.com/ClintH/typescript-project PROJECTNAME
cd PROJECTNAME
npm install
```

# Scripts

build: builds project(s) into `build`

watch: builds project(s) into `build` and automatically rebuilds on source change

clean: deletes `build`

dev: continually rebuilds, runs a http server on port 1234
