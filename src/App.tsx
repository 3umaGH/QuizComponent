import React from "react";
import { Quiz } from "./components/Quiz";
import { type QuizDataProps } from "./components/Quiz";

function App() {
  const quizInitData: QuizDataProps = [
    {
      title: "Who built this?",
      description: "Maybe some text here to explain the question",
      answers: [
        {
          variant: "Bob true",
          correct: true,
        },
        {
          variant: "Me true",
          correct: true,
        },
        {
          variant: "Vasiliy",
          correct: false,
        },
      ],
    },
    {
      title: "Another question",
      description: "And no description here",
      answers: [
        {
          variant: "1",
          correct: false,
        },
        {
          variant: "2 true",
          correct: true,
        },
        {
          variant: "3",
          correct: false,
        },
        {
          variant: "Extra button here",
          correct: false,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Quiz
        title="First Quiz"
        description="This quiz is used as a placeholder and used for testing purposes.
        maybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text too maybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text too"
        difficulty="hard"
        quizData={quizInitData}
      />
    </div>
  );
}

export default App;
