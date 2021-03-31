# Background
We are using `NPM` and `Rollup` to bundle everything into a single script.

# Bundling
To create the script bundle we should run:
```bash
$ npm run build
```

It's important to note that `Adobe Target NodeJS SDK` supports both NodeJS as well as browser environment. `Cloudflare Worker` environment is similar to a browser environment hence we had to instruct `Rollup` `Node Resolve` plugin to use the browser version of `Adobe Target NodeJS SDK` by passing `browser: true` option. More details about `Node Resolve` plugin can be found [here](https://www.npmjs.com/package/@rollup/plugin-node-resolve)