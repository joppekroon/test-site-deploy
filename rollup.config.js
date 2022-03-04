import replace from 'rollup-plugin-replace';
import rimraf from 'rimraf';

rimraf.sync('docs');

const pkg = require('./package.json');

export default {
  input: 'site/src/scripts/app.js',
  output: {
    file: 'docs/scripts/app.js',
    format: 'es'
  },
  plugins: [
    replace({
      delimiters: ['{{', '}}'],
      version: pkg.version
    })
  ]
}