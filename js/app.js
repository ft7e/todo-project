"use strict";

let userName = prompt("Enter your name please");
let gender = prompt("Enter your gender please");

while (!(gender.toLowerCase() == "male" || gender.toLowerCase() == "female")) {
  // To check if the gender is  male or female only
  alert("Wrong input, the gender must be either a male or a female");
  gender = prompt("Enter your gender please");
}
let age = prompt("Enter your age please");

while (age < 0) {
  // to check if the age is >= 0
  alert("Age must be more or equal to zero");
  age = prompt("Enter your age please");
}

let welcomeMessage = confirm("Do you want to skip the welcoming message?");

!welcomeMessage
  ? alert(`${gender.toLowerCase() == "male" ? "Mr." : "Ms."} ${userName}`)
  : "";
const questions = [
  "Are you over 18 years old?",
  "Are you single?",
  "Do you even lift?",
];
const answersArr = [];
for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i]);
  userAnswer
    ? answersArr.push(userAnswer.toLowerCase())
    : answersArr.push("invalid");
}
console.log(answersArr);
