console.log("it works - adding numbers");

// TODO: Be able to grab the input1 and input2 values
// TODO: Be able to grab element of the form so I can add event listner to it.
// TODO: function to be called when the user clicks on the submit (FORM EventListner)

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");
let sumDisplay = document.getElementById("sum-display");
let form = document.querySelector("form");
let paraDisplay = document.querySelector("p");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log("handle submit worked");

  // ? make an if statement to alert us if it detects a NaN (Not a number): isNan()
  if (isNaN(input1.value) || isNaN(input2.value)) {
    alert("You have typed in an invalid value: needs to be a number");
    return;
  }
  console.log("After the if statement");
  //  add a + or you can parseInt(input1.value) or Number(input1.value)
  let total = +input1.value + parseInt(input2.value);

  //   alert("The total is: " + total);
  sumDisplay.innerText = total;
  paraDisplay.style.display = "block";
}
