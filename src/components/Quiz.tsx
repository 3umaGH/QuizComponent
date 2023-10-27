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
  shuffleQuestions: boolean;
  showCorrectAnswers: boolean;
  data: QuizDataProps;
};

type QuizDataProps = {
  title: string;
  description: string;
  difficulty: string;
  questions: {
    title: string;
    description: string;
    answers: {
      option: string;
      correct: boolean;
    }[];
  }[];
};

export const Quiz = ({
  shuffleQuestions = false,
  showCorrectAnswers = false,
  data,
}: QuizProps) => {
  // Data
  const [quizData, setQuizData] = useState(data);
  const [answeredOptions, setAnsweredOptions] = useState<number[]>([]);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [currentQuestionID, setCurrentQuestionID] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  // States
  const [isStarted, setStarted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // Vars
  const currentQuestion = quizData.questions[currentQuestionID];
  const [totalQuestions, totalCorrectQuestions] = getQuestionsCount();
  const [isMultipleAnswers, currentCorrectAnswersAmount] =
    isCurrQuestionMultiAnswer() as [boolean, number];

  let currentQuestionAnswersToDo =
    currentCorrectAnswersAmount - answeredOptions.length;

  // Quiz functions start
  function getQuestionsCount() {
    let totalQuestions = 0,
      correctQuestions = 0;

    quizData.questions.forEach((question) => {
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

  function shuffleQuestionsArray(data: QuizDataProps) {
    const newData = { ...data };

    newData.questions.sort(() => Math.random() - 0.5);
    newData.questions.forEach((answer) =>
      answer.answers.sort(() => Math.random() - 0.5)
    );
    return newData;
  }

  const calculateGrade = () => {
    return (totalCorrectAnswers / totalCorrectQuestions) * 100;
  };
  // Quiz functions end

  // Handlers start
  const handleAnswerClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
    isCorrect: boolean
  ) => {
    if (!isMultipleAnswers) setAnsweredOptions([index]);
    setAnsweredOptions([...answeredOptions, index]);

    setTotalCorrectAnswers((prevVal) => prevVal + (isCorrect ? 1 : 0));

    if (currentQuestionAnswersToDo <= 1) setShowAnswers(true);
  };

  const handleNext = () => {
    setShowAnswers(false);

    if (!(currentQuestionID + 1 === quizData.questions.length)) {
      setAnsweredOptions([]); // Clear answers
      setCurrentQuestionID((prevID) => prevID + 1);
    } else {
      // No more questions
      setShowSummary(true);
    }
  };
  // Handlers end

  // Quiz state functions start
  const startQuiz = () => {
    if (shuffleQuestions)
      setQuizData((prevArray) => shuffleQuestionsArray(prevArray));

    setStarted(true);
  };

  const resetQuiz = () => {
    setStarted(false);
    setCurrentQuestionID(0);
    setAnsweredOptions([]);
    setShowSummary(false);
  };
  // Quiz state functions end

  const getButtonColor = ({
    answer,
    index,
  }: {
    answer: { option: string; correct: boolean };
    index: number;
  }) => {
    if (showAnswers && answer.correct) return correctAnswerButtonStyle;

    if (answeredOptions.includes(index)) {
      return answer.correct
        ? correctAnswerButtonStyle
        : incorrectAnswerButtonStyle;
    }
  };

  return (
    <>
      <div className="quizWrapper">
        {showSummary ? (
          <div className="quizSummary">
            <h2>Congratulations!</h2>
            <p>You have finished "{quizData.title}" quiz.</p>
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
                  <h4>{quizData.title}</h4>
                  <div className="quizDesc">
                    {quizData.description && <h6>{quizData.description}</h6>}
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
                {quizData.difficulty && (
                  <h6 className="quizDifficulty">
                    Difficulty: {quizData.difficulty}
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
                        answeredOptions.includes(index) ||
                        answeredOptions.length >= currentCorrectAnswersAmount
                      }
                      style={getButtonColor({ answer, index })}
                    >
                      {answer.option}
                    </button>
                  ))}

                  <p>
                    {currentQuestionAnswersToDo === 0 ? (
                      <b>{`Click next to continue.`}</b>
                    ) : (
                      <b>{`* Select ${currentQuestionAnswersToDo}  ${
                        currentQuestionAnswersToDo ? `answers` : `answer`
                      }`}</b>
                    )}
                  </p>
                </div>

                <button
                  className="button nextButton"
                  onClick={() => handleNext()}
                  disabled={currentQuestionAnswersToDo > 0}
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
