import React, { useState } from "react";

const correctAnswerButtonStyle = {
  opacity: "1",
  backgroundColor: "#50C878",
  color: "#fafafa",
  boxShadow:
    "rgba(78, 13, 218, 0.1) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #43a865 0 -3px 0 inset",
};

const incorrectAnswerButtonStyle = {
  opacity: "1",
  backgroundColor: "#C70039",
  color: "#fafafa",
  boxShadow:
    "rgba(78, 13, 218, 0.1) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #b50235 0 -3px 0 inset",
};

type QuizProps = {
  title: string;
  description?: string;
  difficulty?: string;
  quizData: QuizDataProps;
};

type QuizQuestionProps = {
  title: string;
  description: string;
  answers: {
    variant: string;
    correct: boolean;
  }[];
};

export type QuizDataProps = QuizQuestionProps[];

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
  const [isMultipleAnswers, correctAnswersAmount] = isCurrQuestionMultiAnswer() as [boolean, number];

  let answersToDo = correctAnswersAmount-(answeredVariant.length);
  //TODO: Shuffle answers, disable next button until all answered


  function getQuestionsCount() {
    let totalQuestions = 0,
      correctQuestions = 0;

    quizQuestions.forEach((question) => {
      question.answers.forEach((answer) => {
        if (answer.correct) correctQuestions++;
      });
      totalQuestions++;
    });

    return [totalQuestions, correctQuestions];
  }

  function isCurrQuestionMultiAnswer() {
    let correctAnswers = 0;

    currentQuestion.answers.forEach((answer) => {
      if (answer.correct) correctAnswers++;
    });

    return [correctAnswers > 1, correctAnswers];
  }

  const calculateGrade = () => {
    return (totalCorrectAnswers / totalCorrectQuestions) * 100;
  };

  const startQuiz = () => {
    setStarted(true);
  };

  const resetQuiz = () => {
    setStarted(false);
    setCurrentQuestionID(0);
    setAnsweredVariant([]);
    setShowSummary(false);

    console.log("start?");
  };

  const handleAnswerClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
    isCorrect: boolean
  ) => {
    if (!isMultipleAnswers) setAnsweredVariant([index]);
    setAnsweredVariant([...answeredVariant, index]);

    console.log(correctAnswersAmount);

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
          <div className="quizSummary">
            <h2>Congratulations!</h2>
            <p>You have finished "{title}" quiz.</p>
            <h3>Total Grade: {calculateGrade().toFixed(1)}%</h3>
            <button className="button nextButton" onClick={() => resetQuiz()}>
              Try again
            </button>
          </div>
        ) : (
          <>
            {!isStarted ? (
              <>
                <div className="quizTitle">
                  <h4>{title}</h4>
                  <div className="quizDesc">
                    {description && <h6>{description}</h6>}
                    <br />
                    <h6>[{totalQuestions} questions]</h6>
                  </div>
                </div>
                <button
                  onClick={() => startQuiz()}
                  className="button quizStartButton"
                >
                  Start Quiz
                </button>
                {difficulty && (
                  <h6 className="quizDifficulty">Difficulty: {difficulty}</h6>
                )}
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
                      className="button quizAnswerOption"
                      disabled={
                        answeredVariant.includes(index) ||
                        answeredVariant.length >= correctAnswersAmount
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

                  <p>
                    <b>{`* Select ${answersToDo}  ${
                      answersToDo ? `answers` : `answer`
                    }`}</b>
                  </p>
                </div>

                <button
                  className="button nextButton"
                  onClick={() => handleNext()}
                  disabled={answersToDo > 0}
                >
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
