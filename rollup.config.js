import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import { folderInput } from 'rollup-plugin-folder-input';
import rimraf from 'rimraf';

rimraf.sync('docs');

const pkg = require('./package.json');

export default [
  {
    input: 'site/src/scripts/app.js',
    output: {
      file: 'docs/scripts/app.js',
      format: 'es',
      sourcemap: true,
      plugins: [terser()],
    },
    plugins: [
      replace({
        delimiters: ['{{', '}}'],
        version: pkg.version,
        preventAssignment: true,
      })
    ],
  },
  {
    input: 'site/src/components/*.js',
    output: {
      dir: 'docs/components/',
      format: 'es',
      sourcemap: true,
      plugins: [terser()],
    },
    plugins: [
      folderInput(),
      nodeResolve(),
    ],
  }
]