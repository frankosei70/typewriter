const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
Process.stdout.write(char);
}
setTimeout(() => {
  console.log(char);
}, 1000) // <= 1s delay to make it noticeable. Can dial it down later.