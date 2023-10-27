import { Quiz } from "./components/Quiz";

function App() {
  const quizData = {
    title: "JavaScript Fundamentals Quiz",
    description: "Test your knowledge of JavaScript fundamentals with this quiz! Good luck!",
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

  return (
    <div className="App">
      <Quiz shuffleQuestions={true} data={quizData} />
    </div>
  );
}

export default App;
