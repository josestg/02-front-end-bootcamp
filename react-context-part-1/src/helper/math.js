export function sum(arr) {
  //   let s = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     s = s + arr[i];
  //   }
  return arr.reduce((acc, curr) => acc + curr, 0);
}
