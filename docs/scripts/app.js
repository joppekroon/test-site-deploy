function foo() {
  return 'bar';
}

document.querySelector('#version').innerText = "1.0.1";

console.log(`Hello ${foo()}`);
