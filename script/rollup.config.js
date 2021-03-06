/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import * as fs from "fs";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";

const BANNER = fs.readFileSync("./src/banner.js").toString();

function getPlugins(babelConfig) {
  return [
    resolve({browser: true}),
    commonjs(),
    babel(babelConfig)
  ];
}

export default [
  {
    input: "src/index.js",
    output: {
      banner: BANNER,
      name: "index",
      file: "dist/index.js",
      format: "esm",
      sourcemap: true
    },
    plugins: getPlugins(
      {
        inputSourceMap: true,
        sourceMaps: true,
        exclude: ["node_modules/**", /\/core-js\//],

        presets: [
          [
            "@babel/preset-env",
            {
              useBuiltIns: "usage",
              corejs: 3,
              modules: false,
              targets: {
                browsers: [
                  "last 2 Chrome versions",
                  "last 2 Firefox versions",
                  "last 2 Safari versions"
                ]
              }
            }
          ]
        ],
        plugins: []
      }
    )
  }
];
