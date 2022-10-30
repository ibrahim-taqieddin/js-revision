//
// Write a function that takes a number as input and returns true if the number is less than or equal to zero, otherwise return false.

// function LessThanZero(x) {
//   if (x >= 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(LessThanZero(-2));

// Ex2: Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)

// function NextInteger(x) {
//   return x + 1;
// }

// console.log(NextInteger(5));

// Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers.

// array = ["absi", "mal77ek", "ibrahim99", "88emad", "yazan"];

// let newArr = [];
// function check(x) {
//   for (let i = 0; i < x.length; i++) {
//     const regex = /\d/;
//     if (regex.test(x[i])) {
//       newArr.push(x[i]);
//     }
//   }
//   return newArr;
// }

// console.log(check(array));

// Ex4: Develop a JS Code to check if a number is even or odd using recursion //

// function recursion(num) {
//   if (num == 0) {
//     return "even";
//   } else {
//     if (num == 1) {
//       return "odd";
//     }
//   }
//   return recursion(num - 2);
// }

// console.log(recursion(9));

// Ex5: Write a function to swap all instances of string ch1 with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

function swap(array, sw1, sw2) {
  newArr = [];
  [...array].forEach((e) => {
    // spread
    if (e == sw1) {
      newArr.push(sw2);
    } else if (e == sw2) {
      newArr.push(sw1);
    } else {
      newArr.push(e);
    }
  });
  console.log(newArr.join(""));
}

swap("aaddeee", "a", "d");
// Ex6: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]
// function names(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// names(["manar", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]);

// Ex7: Use forEach to  Return all the names in the previous array
// function names(arr) {
//   arr.forEach((e) => {
//     console.log(e);
//   });
// }
// names(["manar", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]);

// Ex8: Project an array of series into an array of {id, title} pairs using forEach()
// A projection is a process of applying a function to an existing value to produce a new value.

let newSeries = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

function titleId(arr) {
  newArr = [];
  arr.forEach((e) => {
    newArr.push({ id: e.id, title: e.title });
  });
  return newArr;
}
console.log(titleId(newSeries));
