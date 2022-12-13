console.log("it works chuck-norris");
asyncChuckFetch();
// TODO: Create a function that will conduct the fetch
let jokeList = [];
let currentJoke = document.getElementById("current-joke");
async function asyncChuckFetch() {
  try {
    const url = `https://api.chucknorris.io/jokes/random`;
    const response = await fetch(url);
    const joke = await response.json();
    console.log(joke.value);

    // clearHistory();
    displayHistory(joke.value);
    // jokeList.forEach((chuckJoke) => displayHistory(chuckJoke));
    // jokeList.push(joke.value);
  } catch (err) {
    console.error(err.message);
  }
}

// 1. grab the parent and store it in a variable (ul is the parent).
// 2. create a new element that will be placed on the parent (li).
// 3. replace the innerText of the new element
// 4. append the child to the parent
function displayHistory(joke) {
  let historyList = document.getElementById("history"); // Parent

  let currentJokeToBeAddedElement = document.createElement("li"); // Child
  currentJokeToBeAddedElement.innerText = currentJoke.innerText;
  if (currentJoke.innerText !== "") {
    historyList.appendChild(currentJokeToBeAddedElement);
  }
  currentJoke.innerText = joke;
}

function clearHistory() {
  let historyList = document.getElementById("history"); // Parent

  while (historyList.firstChild) {
    historyList.removeChild(historyList.firstChild);
  }
}
