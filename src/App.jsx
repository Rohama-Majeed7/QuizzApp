import React from "react";
import { useState } from "react";

const App = () => {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [bg, setBg] = useState(false);
  const [bgRed, setBgRed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const questions = [
    {
      questionText: "What is the capital of Australia?",
      answerOptions: [
        { answerText: "Sydney", isCorrect: false },
        { answerText: "Melbourne", isCorrect: false },
        { answerText: "Canberra", isCorrect: true },
        { answerText: "Perth", isCorrect: false },
      ],
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      answerOptions: [
        { answerText: "Earth", isCorrect: false },
        { answerText: "Mars", isCorrect: true },
        { answerText: "Venus", isCorrect: false },
        { answerText: "Jupiter", isCorrect: false },
      ],
    },
    {
      questionText: 'Who wrote the novel "1984"?',
      answerOptions: [
        { answerText: "George Orwell", isCorrect: true },
        { answerText: "Ernest Hemingway", isCorrect: false },
        { answerText: "Mark Twain", isCorrect: false },
        { answerText: "J.K. Rowling", isCorrect: false },
      ],
    },
    {
      questionText: "Which country is known as the Land of the Rising Sun?",
      answerOptions: [
        { answerText: "China", isCorrect: false },
        { answerText: "India", isCorrect: false },
        { answerText: "Japan", isCorrect: true },
        { answerText: "South Korea", isCorrect: false },
      ],
    },
    {
      questionText: "What is the smallest planet in our solar system?",
      answerOptions: [
        { answerText: "Mercury", isCorrect: true },
        { answerText: "Mars", isCorrect: false },
        { answerText: "Venus", isCorrect: false },
        { answerText: "Earth", isCorrect: false },
      ],
    },
  ];

  const onOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setBg(true);
    }
    else{
      setBg(false)
    }
    setIsDisabled(true);
  };

  const nextQuestion = () => {
    if (question + 1 < questions.length) {
      setQuestion(question + 1);
    } else {
      setShowScore(true);
    }
    setBg(false);
    setIsDisabled(false);
  };
  const reset = () => {
    setQuestion(0);
    setShowScore(false);
    setScore(0);
    setBg(false);
    setIsDisabled(false);
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-4 overflow-hidden md:w-[500px] mx-auto">
      <h1 className="text-3xl font-bold mt-6">Quiz Application</h1>
      {showScore ? (
        <div className="p-4 border-2 border-slate-300 font-bold w-full h-full mx-auto">
          <h1>your score are : {score}</h1>
          <button
            onClick={reset}
            className="bg-blue-400 p-2 mt-3 text-white border-spacing-1 rounded-md"
          >
            reset
          </button>
        </div>
      ) : (
        <div className="flex flex-col  gap-4 border-2 border-spacing-1 p-2 rounded-md w-10/12  mx-auto">
          <div className="font-bold w-full">
            {
              <h2 className="font-bold">
                Question:{question + 1} {questions[question].questionText}
              </h2>
            }
          </div>
          <div>
            <div className="flex gap-3 flex-col">
              {questions[question].answerOptions.map((option, index) => {
                return (
                  <button
                    key={index}
                    disabled={isDisabled}
                    className={`w-full text-white text-left border-2 p-3 border-blue-400 hover:bg-blue-200  ${
                      option.isCorrect && bg ? "bg-green-500" : "bg-red-500"
                    } rounded-md`}
                    onClick={() => onOption(option.isCorrect)}
                  >
                    {option.answerText}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between mt-6 items-center">
              <p>{question + 1} /5</p>
              <button
                onClick={nextQuestion}
                className="bg-blue-400 text-white p-1 rounded-md border-2 border-spacing-1"
              >
                Next Que
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
