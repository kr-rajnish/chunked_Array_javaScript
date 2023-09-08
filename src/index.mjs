import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// Q.) write a function, 'chunk(arr, n)', that returns chunked array of size n at the least. Look at example?

/*Given: [1, 4, 12, 3, 2, 6, -9, 0], n=3

Return: [[1,4,12], [3,2,6], [-9, 0]]

Given: [1, 4, 12, 3, 2, 6, -9, 0], n=4

Return: [[1,4,12,3], [2,6,-9,0]]

Given: [1, 4, 12, 3, 2, 6, -9, 0], n=7

Return: [[1,4,12,3,2,6,-9], [0] ] */

const chunck = ((arr, n) => {
  const chuncked = [];

  for(let elem of arr){
    let last = chuncked[chuncked.length-1];

    if(!last || last.length === n){
      chuncked.push([elem]);
    }else
    last.push(elem);
  }
  return chuncked;
})([1, 4, 12, 3, 2, 6, -9, 0], 3)
console.log({
  chunck
})
