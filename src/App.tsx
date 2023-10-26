import React from "react";
import { Quiz } from "./components/Quiz";
import { type QuizDataProps } from "./components/Quiz";

function App() {
  const quizInitData: QuizDataProps = [
    {
      title: "What are the primitive data types in JavaScript?",
      description: "Select all that apply.",
      answers: [
        { variant: "String", correct: true },
        { variant: "Number", correct: true },
        { variant: "Boolean", correct: true },
        { variant: "Object", correct: false },
        { variant: "Array", correct: false },
      ],
    },
    {
      title: "Which keyword is used to declare a variable in JavaScript?",
      description: "Select all that apply.",
      answers: [
        { variant: "var", correct: true },
        { variant: "let", correct: true },
        { variant: "const", correct: true },
        { variant: "varlet", correct: false },
        { variant: "variable", correct: false },
      ],
    },
    {
      title: "What is the result of 2 + '2' in JavaScript?",
      description: "Select all that apply.",
      answers: [
        { variant: "'22'", correct: true },
        { variant: "4", correct: false },
        { variant: "22", correct: false },
        { variant: "Error", correct: false },
        { variant: "NaN", correct: false },
      ],
    },
    {
      title:
        "Which method is used to add elements to the end of an array in JavaScript?",
      description: "Select all that apply.",
      answers: [
        { variant: "push()", correct: true },
        { variant: "append()", correct: false },
        { variant: "addToEnd()", correct: false },
        { variant: "concat()", correct: false },
        { variant: "insert()", correct: false },
      ],
    },
    {
      title: "What does the 'typeof' operator return for an array?",
      description: "Select all that apply.",
      answers: [
        { variant: "'object'", correct: true },
        { variant: "'array'", correct: false },
        { variant: "'Array'", correct: false },
        { variant: "'list'", correct: false },
        { variant: "'undefined'", correct: false },
      ],
    },
    {
      title: "Which loop is used for iterating over an array in JavaScript?",
      description: "Select all that apply.",
      answers: [
        { variant: "for", correct: true },
        { variant: "while", correct: true },
        { variant: "do...while", correct: true },
        { variant: "if", correct: false },
        { variant: "switch", correct: false },
      ],
    },
    {
      title: "Which event is triggered when a user clicks on an HTML element?",
      description: "Select all that apply.",
      answers: [
        { variant: "click", correct: true },
        { variant: "hover", correct: false },
        { variant: "change", correct: false },
        { variant: "submit", correct: false },
        { variant: "keydown", correct: false },
      ],
    },
    {
      title: "What does the 'this' keyword refer to in JavaScript?",
      description: "Select all that apply.",
      answers: [
        { variant: "The current object", correct: true },
        { variant: "The global object", correct: true },
        { variant: "The parent object", correct: false },
        { variant: "The child object", correct: false },
        { variant: "The previous object", correct: false },
      ],
    },
    {
      title:
        "Which method is used to remove the last element from an array in JavaScript?",
      description: "Select all that apply.",
      answers: [
        { variant: "pop()", correct: true },
        { variant: "remove()", correct: false },
        { variant: "delete()", correct: false },
        { variant: "splice()", correct: false },
        { variant: "shift()", correct: false },
      ],
    },
    {
      title: "What does 'NaN' stand for in JavaScript?",
      description: "Select all that apply.",
      answers: [
        { variant: "Not a Number", correct: true },
        { variant: "No applicable Number", correct: false },
        { variant: "Null and None", correct: false },
        { variant: "Not a Null", correct: false },
        { variant: "No actual Number", correct: false },
      ],
    },
  ];

  return (
    <div className="App">
      <Quiz
        title="JavaScript Fundamentals Quiz"
        description="Test your knowledge of JavaScript fundamentals with this quiz! Whether you're a beginner or looking to brush up on your skills, these questions cover essential concepts like data types, variables, arrays, loops, and more. Challenge yourself and see how well you know the building blocks of JavaScript programming. Good luck!"
        difficulty="hard"
        quizData={quizInitData}
      />
    </div>
  );
}

export default App;
