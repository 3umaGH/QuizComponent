import { Quiz } from "./components/Quiz";

function App() {
  const quizData1 = {
    title: "JavaScript Fundamentals Quiz",
    description:
      "Test your knowledge of JavaScript fundamentals with this quiz! Good luck!",
    difficulty: "Intermediate",
    questions: [
      {
        title: "What are the primitive data types in JavaScript?",
        description: "Select all that apply.",
        answers: [
          { option: "String", correct: true },
          { option: "Number", correct: true },
          { option: "Boolean", correct: true },
          { option: "Object", correct: false },
          { option: "Array", correct: false },
        ],
      },
      {
        title: "Which keyword is used to declare a variable in JavaScript?",
        description: "Select all that apply.",
        answers: [
          { option: "var", correct: true },
          { option: "let", correct: true },
          { option: "const", correct: true },
          { option: "varlet", correct: false },
          { option: "variable", correct: false },
        ],
      },
      {
        title: "What is the result of 2 + '2' in JavaScript?",
        description: "Select all that apply.",
        answers: [
          { option: "'22'", correct: true },
          { option: "4", correct: false },
          { option: "22", correct: false },
          { option: "Error", correct: false },
          { option: "NaN", correct: false },
        ],
      },
      {
        title:
          "Which method is used to add elements to the end of an array in JavaScript?",
        description: "Select all that apply.",
        answers: [
          { option: "push()", correct: true },
          { option: "append()", correct: false },
          { option: "addToEnd()", correct: false },
          { option: "concat()", correct: false },
          { option: "insert()", correct: false },
        ],
      },
      {
        title: "What does the 'typeof' operator return for an array?",
        description: "Select all that apply.",
        answers: [
          { option: "'object'", correct: true },
          { option: "'array'", correct: false },
          { option: "'Array'", correct: false },
          { option: "'list'", correct: false },
          { option: "'undefined'", correct: false },
        ],
      },
      {
        title: "Which loop is used for iterating over an array in JavaScript?",
        description: "Select all that apply.",
        answers: [
          { option: "for", correct: true },
          { option: "while", correct: true },
          { option: "do...while", correct: true },
          { option: "if", correct: false },
          { option: "switch", correct: false },
        ],
      },
      {
        title:
          "Which event is triggered when a user clicks on an HTML element?",
        description: "Select all that apply.",
        answers: [
          { option: "click", correct: true },
          { option: "hover", correct: false },
          { option: "change", correct: false },
          { option: "submit", correct: false },
          { option: "keydown", correct: false },
        ],
      },
      {
        title: "What does the 'this' keyword refer to in JavaScript?",
        description: "Select all that apply.",
        answers: [
          { option: "The current object", correct: true },
          { option: "The global object", correct: true },
          { option: "The parent object", correct: false },
          { option: "The child object", correct: false },
          { option: "The previous object", correct: false },
        ],
      },
      {
        title:
          "Which method is used to remove the last element from an array in JavaScript?",
        description: "Select all that apply.",
        answers: [
          { option: "pop()", correct: true },
          { option: "remove()", correct: false },
          { option: "delete()", correct: false },
          { option: "splice()", correct: false },
          { option: "shift()", correct: false },
        ],
      },
      {
        title: "What does 'NaN' stand for in JavaScript?",
        description: "Select all that apply.",
        answers: [
          { option: "Not a Number", correct: true },
          { option: "No applicable Number", correct: false },
          { option: "Null and None", correct: false },
          { option: "Not a Null", correct: false },
          { option: "No actual Number", correct: false },
        ],
      },
    ],
  };

  const quizData2 = {
    title: "CSS Fundamentals Quiz",
    description:
      "Test your knowledge of CSS fundamentals with this quiz! Good luck!",
    difficulty: "Intermediate",
    questions: [
      {
        title: "What does CSS stand for?",
        description: "Select the correct option.",
        answers: [
          { option: "Cascading Style Sheets", correct: true },
          { option: "Cascading Script Styles", correct: false },
          { option: "Creative Style Sheets", correct: false },
          { option: "Cascading Stylish Sheets", correct: false },
        ],
      },
      {
        title:
          "Which property is used to change the background color of an element?",
        description: "Select the correct option.",
        answers: [
          { option: "background-color", correct: true },
          { option: "color", correct: false },
          { option: "font-size", correct: false },
          { option: "margin", correct: false },
        ],
      },
      {
        title: "What is the default value of the 'position' property in CSS?",
        description: "Select the correct option.",
        answers: [
          { option: "static", correct: true },
          { option: "relative", correct: false },
          { option: "fixed", correct: false },
          { option: "absolute", correct: false },
        ],
      },
      {
        title: "Which property is used to make text italic in CSS?",
        description: "Select the correct option.",
        answers: [
          { option: "font-style", correct: true },
          { option: "font-weight", correct: false },
          { option: "text-decoration", correct: false },
          { option: "font-variant", correct: false },
        ],
      },
      {
        title:
          "Which unit is relative to the font-size of the nearest parent element?",
        description: "Select the correct option.",
        answers: [
          { option: "em", correct: true },
          { option: "px", correct: false },
          { option: "rem", correct: false },
          { option: "vw", correct: false },
        ],
      },
    ],
  };

  const quizData3 = {
    title: "HTML Basics Quiz",
    description:
      "Test your knowledge of HTML basics with this quiz! Good luck!",
    difficulty: "Beginner",
    questions: [
      {
        title: "What does HTML stand for?",
        description: "Select the correct option.",
        answers: [
          { option: "HyperText Markup Language", correct: true },
          { option: "Hyper Transfer Text Language", correct: false },
          { option: "Highly Typed Meta Language", correct: false },
          { option: "Hyperlink and Text Markup Language", correct: false },
        ],
      },
      {
        title: "Which tag is used to create a hyperlink in HTML?",
        description: "Select the correct option.",
        answers: [
          { option: "<a>", correct: true },
          { option: "<link>", correct: false },
          { option: "<href>", correct: false },
          { option: "<hyperlink>", correct: false },
        ],
      },
      {
        title: "What is the correct way to comment out multiple lines in HTML?",
        description: "Select the correct option.",
        answers: [
          { option: "<!-- This is a comment -->", correct: true },
          { option: "// This is a comment", correct: false },
          { option: "/* This is a comment */", correct: false },
          { option: "' This is a comment", correct: false },
        ],
      },
      {
        title:
          "Which element is used to define the structure of an HTML document?",
        description: "Select the correct option.",
        answers: [
          { option: "<html>", correct: true },
          { option: "<body>", correct: false },
          { option: "<head>", correct: false },
          { option: "<section>", correct: false },
        ],
      },
      {
        title: "What does the 'alt' attribute in an <img> tag provide?",
        description: "Select the correct option.",
        answers: [
          { option: "An alternate text for the image", correct: true },
          { option: "The alignment of the image", correct: false },
          { option: "The source URL of the image", correct: false },
          { option: "The width of the image", correct: false },
        ],
      },
    ],
  };

  return (
    <div className="App">
      <Quiz
        shuffleQuestions={true}
        showCorrectAnswers={true}
        data={quizData1}
      />
      <br />
      <Quiz
        shuffleQuestions={true}
        showCorrectAnswers={true}
        data={quizData2}
      />
      <br />
      <Quiz
        shuffleQuestions={true}
        showCorrectAnswers={true}
        data={quizData3}
      />
      <br />
    </div>
  );
}

export default App;
