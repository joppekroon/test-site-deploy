import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import { folderInput } from 'rollup-plugin-folder-input';
import rimraf from 'rimraf';

rimraf.sync('docs');
rimraf.sync('public');

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
        preventAssignment: true,
        version: pkg.version,
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
  },
  {
    input: 'non-site-file.js',
    output: {
      file: 'public/compiled.js',
      format: 'es',
    },
    plugins: [
      replace({
        delimiters: ['{{\\s?', '\\s?}}'],
        preventAssignment: true,
        version: pkg.version,
      }),
    ],
  }
]