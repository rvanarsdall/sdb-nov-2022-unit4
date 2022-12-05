console.log("Running from the Index.js file");
// ! getElementById
// Use getElementById to change the text of the id="header" to  "Hello World"

/* 
1. create a variable to store the header element
2. document.getElementById('[id name]')
*/

let header = document.getElementById("header");
console.log(header.innerText); // output: "DOCUMENT OBJECT MODEL (DOM)"
// innerText is the text inbetween the two tags
console.log("INNER HTML", document.getElementById("header").innerHTML);
// header.innerText = "Hello <em>World</em>";
header.innerHTML = "Hello <em>World</em>";

// Difference between innerText and innerHTML
// InnerHTML will convert HTML code while innerText will treat it as a string literal

// ? Change the color of the header to blue

header.style.color = "blue";
header.style.fontSize = "45px";

// ! getElementsByClassName

let errorList = document.getElementsByClassName("error-list");
console.log("ERROR LIST", errorList);

// ? Change the first bullet point inner text to  "The First Error has Changed"

errorList[0].innerText = "The First Error has Changed";

// ? Change the 2nd Error to be red
errorList[1].style.color = "red";

// ? Create a for loop that will loop the error list and change all the colors to purple
for (let i = 0; i < errorList.length; i++) {
  errorList[i].style.color = "purple";
}

// ? Loop through doing a For of....

for (error of errorList) {
  error.style.color = "blue";
}

// ! getElementsByTagName

let pTags = document.getElementsByTagName("p");
console.log("pTags", pTags);

// ? Make 1st LI Tags italic
//  use style font-style : "italic"

let liTags = document.getElementsByTagName("li");
console.log(liTags);
liTags[3].style.fontStyle = "italic";

errorList[0].style.fontStyle = "italic";

// ! querySelector
// - querySelector - it will only give you the first element that meets the requirements.

// ? Store the first H1 tag using querySelector
let querySelectorHeader = document.querySelector("h1");
console.log("querySelector header", querySelectorHeader.innerText);

// ? consol.log the innerText of para as the ID using querySelector

let querySelectorIdExample = document.querySelector("#para");
console.log(querySelectorIdExample.innerText);

let querySelectorClassExample = document.querySelector(".error-list");
console.log("querySelectorClassExample", querySelectorClassExample.innerText);

// ! querySelectorAll
// - querySelectorAll will give you all the elements that match the requirements

let querySelectorAllHeaders = document.querySelectorAll("h1");
console.log("querySelectorAllHeaders", querySelectorAllHeaders);

let querySelectorAllHeader3 = document.querySelectorAll("h3");
console.log("querySelectorAllHeader3", querySelectorAllHeader3);
