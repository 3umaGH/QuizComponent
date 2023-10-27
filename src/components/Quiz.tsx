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
  shuffleQuestions?: boolean;
  questions: QuizQuestionProps;
};

type QuizQuestionProps = {
  title: string;
  description: string;
  difficulty: string;
  questions: {
    title: string;
    description: string;
    answers: {
      variant: string;
      correct: boolean;
    }[];
  }[];
};

export const Quiz = ({ shuffleQuestions = false, questions }: QuizProps) => {
  const [isStarted, setStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(questions);
  const [currentQuestionID, setCurrentQuestionID] = useState(0);
  const [answeredVariant, setAnsweredVariant] = useState<number[]>([]);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const currentQuestion = quizQuestions.questions[currentQuestionID];

  const [totalQuestions, totalCorrectQuestions] = getQuestionsCount();
  const [isMultipleAnswers, correctAnswersAmount] =
    isCurrQuestionMultiAnswer() as [boolean, number];

  let answersToDo = correctAnswersAmount - answeredVariant.length;

  function getQuestionsCount() {
    let totalQuestions = 0,
      correctQuestions = 0;

    quizQuestions.questions.forEach((question) => {
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

  function shuffleQuestionsArray(array: QuizQuestionProps) {
    const newArray = { ...array };

    newArray.questions.sort(() => Math.random() - 0.5);
    newArray.questions.forEach((answer) =>
      answer.answers.sort(() => Math.random() - 0.5)
    );
    return newArray;
  }

  const startQuiz = () => {
    if (shuffleQuestions) {
      setQuizQuestions((prevArray) => shuffleQuestionsArray(prevArray));
    }
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

    setTotalCorrectAnswers((prevVal) => prevVal + (isCorrect ? 1 : 0));
  };

  const handleNext = () => {
    if (!(currentQuestionID + 1 === quizQuestions.questions.length)) {
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
            <p>You have finished "{quizQuestions.title}" quiz.</p>
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
                  <h4>{quizQuestions.title}</h4>
                  <div className="quizDesc">
                    {quizQuestions.description && (
                      <h6>{quizQuestions.description}</h6>
                    )}
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
                {quizQuestions.difficulty && (
                  <h6 className="quizDifficulty">
                    Difficulty: {quizQuestions.difficulty}
                  </h6>
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
                    {answersToDo === 0 ? (
                      <b>{`Click next to continue.`}</b>
                    ) : (
                      <b>{`* Select ${answersToDo}  ${
                        answersToDo ? `answers` : `answer`
                      }`}</b>
                    )}
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
