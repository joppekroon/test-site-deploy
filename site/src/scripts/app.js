import { foo } from './foo.js';

document.querySelector('#version').innerText = "{{version}}";

console.log(`Hello ${foo()}`);