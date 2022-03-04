function foo() {
  return 'bar';
}

document.querySelector('#version').innerText = "1.0.0";

console.log(`Hello ${foo()}`);
