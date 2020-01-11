module.exports = {
  port: 1234,
  rootDir: "./build/web",
  watch: true,
  nodeResolve: {
    jsnext: true,
    browser: true,
    // set default to false because es-dev-server always
    // runs in the browser
    preferBuiltins: true,
    // will overwrite es-dev-server's fileExtensions option
    extensions: ['.mjs', '.js'],
    // will overwrite es-dev-server's dedupe option
    dedupe: ['lit-html'],
    customResolveOptions: {
      // will overwrite es-dev-server's moduleDirs option
      moduleDirectory: ['lib', 'node_modules'],
      preserveSymlinks: true,
    },
  },
};
