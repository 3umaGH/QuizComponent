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
  const [isStarted, setStarted] = useState(false);
  const [quizQuestions] = useState(quizData);
  const [currentQuestionID, setCurrentQuestionID] = useState(0);
  const [answeredVariant, setAnsweredVariant] = useState<number[]>([]);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionID];

  const [totalQuestions, totalCorrectQuestions] = getQuestionsCount();

  function getQuestionsCount() {
    let totalQuestions = 0,
      correctQuestions = 0;

    quizQuestions.forEach((question) =>
      question.answers.forEach((answer) => {
        totalQuestions++;
        if (answer.correct) correctQuestions++;
      })
    );

    return [totalQuestions, correctQuestions];
  }

  const calculateGrade = () => {
    return (totalCorrectAnswers / totalCorrectQuestions) * 100;
  };

  const startQuiz = () => {
    setStarted(true);
  };

  const handleAnswerClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
    isCorrect: boolean
  ) => {
    if (!currentQuestion.multipleCorrectAnswers) setAnsweredVariant([index]);
    else setAnsweredVariant([...answeredVariant, index]);

    setTotalCorrectAnswers((prevVal) => prevVal + (isCorrect ? 1 : 0));
  };

  const handleNext = () => {
    if (!(currentQuestionID + 1 === quizQuestions.length)) {
      setAnsweredVariant([]); // Clear answers
      setCurrentQuestionID((prevID) => prevID + 1);
    } else {
      // No more questions
      setShowSummary(true);
    }
  };

  return (
    <>
      <div className="quizWrapper">
        {showSummary ? (
          <>
            <h1>Congratulations!</h1>
            <p>You have finished "{title}" quiz.</p>
            <h3>Total Grade: {calculateGrade().toFixed(1)}%</h3>
          </>
        ) : (
          <>
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
                <h6 className="quizTitle">{currentQuestion.title}</h6>
                <div className="quizQuestionDescription">
                  {currentQuestion.description}
                </div>

                <div className="quizAnswers">
                  {currentQuestion.answers.map((answer, index) => (
                    <button
                      onClick={(e) =>
                        handleAnswerClick(e, index, answer.correct)
                      }
                      key={index}
                      disabled={
                        answeredVariant.includes(index) ||
                        (!currentQuestion.multipleCorrectAnswers && answeredVariant.length > 0)
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
          </>
        )}
      </div>
    </>
  );
};
