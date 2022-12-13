/*
FIZZBUZZ LOOP CHALLENGE (pair coding)
************
- write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - prints out the number if none of the above are true.
- create a loop that counts to 100.
- Pass each iteration through a conditional.
*/

let fizzBuzz = (start, stop, step) => {
  //  start    stop        step
  for (i = start; i <= stop; i = i + step) {
    // if (i % 15 == 0) {
    //     console.log("Fizz Buzz")
    // } else if (i % 3 == 0) {
    //     console.log("Fizz")
    // } else if (i % 5 == 0) {
    //     console.log("Buzz")
    // } else {
    //     console.log(i)
    // }

    i % 15 == 0
      ? console.log("Fizz Buzz")
      : i % 3 == 0
      ? console.log("Fizz")
      : i % 5 == 0
      ? console.log("Buzz")
      : console.log(i);
  }
};

fizzBuzz(0, 1000, 2);

// ? Lil' extra garbage (Array push and length without)
let arr = ["Jonas", "Isaac", "Leif"];

arr[0] = "Lauren";

function length(arr) {
  let count = 1;
  for (i in arr) {
    count++;
  }
  return count;
}

length(arr);
arr[arr[length(arr)]] = "Paul";
console.log(arr);

arr.push("Elena");
