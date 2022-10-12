// DOM elements
var questionsEl = document.querySelector("#questions");
var questiont = document.querySelector("#questiont");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var highscoreEl = document.querySelector("#highscore");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");


// Timer that counts down from 5
function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }
  countdown();
 
function displayMessage() {
    timeEl.textContent = " ";
    var endEl = querySelector("end");
    endEl.setAttribute("#end");
    mainEl.appendChild(endEl);
}


// Clicking on next button displays next image in carousel
  highscoreEl.addEventListener("click", function(event) {
    // Stops event from bubbling up and new window opening
    event.stopPropagation();
  
    navigate(1);
  });