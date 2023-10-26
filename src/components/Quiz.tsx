import React, { useState } from "react";

type QuizProps = {
  title: string;
  description?: string;
  difficulty?: string;
};

const quizInitData = [
  {
    title: "Who built this?",
    description: "Maybe some text here to explain the question",
    answers: [
      {
        variant: "Bob",
        correct: false,
      },
      {
        variant: "Me",
        correct: true,
      },
      {
        variant: "Putin",
        correct: false,
      },
    ],
  },
  {
    title: "Another question",
    description: "Maybe some text here to explain the question",
    answers: [
      {
        variant: "1",
        correct: false,
      },
      {
        variant: "2",
        correct: true,
      },
      {
        variant: "3",
        correct: false,
      },
    ],
  },
];

export const Quiz = ({ title, description, difficulty }: QuizProps) => {
  const [isStarted, setStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(quizInitData);
  const [currentQuestionID, setCurrentQuestionID] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionID];

  const startQuiz = () => {
    setStarted(true);
  };

  const handleAnswerClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    isCorrect: boolean
  ) => {
    alert(isCorrect ? "This answer is correct!" : "Try again :C");
  };

  return (
    <>
      <div className="quizWrapper">
        {!isStarted ? (
          <>
            <div className="quizTitle">
              <h4>{title}</h4>
              <div className="quizDesc">
                {description && <h6>{description}</h6>}
              </div>
            </div>
            <button onClick={() => startQuiz()} className="quizButton">
              Start Quiz
            </button>{" "}
          </>
        ) : (
          <>
            {/*Content here*/}

            <h6 className="quizTitle">{currentQuestion.title}</h6>
            <div className="quizQuestionDescription">
              {currentQuestion.description}
            </div>

            <div className="quizAnswers">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  onClick={(e) => handleAnswerClick(e, answer.correct)}
                  key={index}
                >
                  {answer.variant}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
