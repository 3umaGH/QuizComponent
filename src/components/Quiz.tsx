import React, { useState } from "react";

const correctAnswerButtonStyle = {
  backgroundColor: "green",
};

const incorrectAnswerButtonStyle = {
  backgroundColor: "red",
};

type QuizProps = {
  title: string;
  description?: string;
  difficulty?: string;
  quizData: QuizDataProps;
};

export type QuizDataProps = {
  title: string;
  description: string;
  multipleCorrectAnswers: boolean;
  answers: {
    variant: string;
    correct: boolean;
  }[];
}[];

export const Quiz = ({
  title,
  description,
  difficulty,
  quizData,
}: QuizProps) => {
  const [isStarted, setStarted] = useState(true);
  const [quizQuestions, setQuizQuestions] = useState(quizData);
  const [currentQuestionID, setCurrentQuestionID] = useState(0);
  const [answeredVariant, setAnsweredVariant] = useState<number[]>([]);

  const currentQuestion = quizQuestions[currentQuestionID];
  const multipleCorrectAnswers = currentQuestion.multipleCorrectAnswers;

  const startQuiz = () => {
    setStarted(true);
  };

  const handleAnswerClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
    isCorrect: boolean
  ) => {
    if (!multipleCorrectAnswers) setAnsweredVariant([index]);
    else setAnsweredVariant([...answeredVariant, index]);
  };

  const handleNext = () => {};

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
            </button>
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
                  onClick={(e) => handleAnswerClick(e, index, answer.correct)}
                  key={index}
                  disabled={
                    answeredVariant.includes(index) ||
                    (!multipleCorrectAnswers && answeredVariant.length > 0)
                  }
                  style={
                    answeredVariant.includes(index)
                      ? answer.correct
                        ? correctAnswerButtonStyle
                        : incorrectAnswerButtonStyle
                      : {}
                  }
                >
                  {answer.variant}
                </button>
              ))}
            </div>

            <button className="nextButton" onClick={() => handleNext()}>
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
};
