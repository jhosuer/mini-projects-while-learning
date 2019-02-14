// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   console.dir(num);
//   return num * 2;
// })


// function mapList(arr) {
//   const newArray = arr.map((num, i) => {
//     console.log(num, i);
//     console.dir(num);
//     console.log(num * 2);
//   });
// }
// mapList([1, 2, 4, 5, 8, 9]);



const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];


// const total = array.reduce((acc, user) => {
//   return acc + user.score
// },0);
// console.log(total);
let newArray = array;
//console.log(newArray);

