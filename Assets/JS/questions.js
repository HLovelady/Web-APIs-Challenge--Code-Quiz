// list of all questions, choices, and answers

function answer() {
    if(choices === answer){
        displayMessage("Correct!");
    }
    else {
        displayMessage("Incorrect.")
    }

answer("All the above", "All the above")
answer("class", "class")
answer("Object data types", "Object data types")
answer("quotes", "quotes")


var questionARR = {

      question: "What are the boolean operators that can be used in JavaScript?",
      choices: [
        "'And' Operator &&",
        "'Or' Operator ||",
        "'Not' Operator !",
        "All the above",
      ],
      answer: 3
    },
    {
      question: "Commonly used data types DO NOT include:",
        choices: ["strings", "class", "booleans", "numbers"],
        answer: "class",
      },
    {
      question: "What is the data type of variables in JavaScript?",
      choices: [
        "Object data types",
        "Function data type",
        "None of the above",
        "All of the above"
      ],
      answer: 0,
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: 2,
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: 3,
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: 2,
    },
    {
      question: "What type of Pop-up box is available in JavaScript?:",
      choices: ["Alert", "Confirm", "Prompt", "All the above"],
      answer: 3,
    }
};


  