import React, { useState } from "react";
import "./Question.scss";

function Question({
  question,
  // option,
  handleAnswer,
  answeredQuestions,
  questionIndex,
}) {
  const { text, option, correct } = question;
  const [answered, setAnswered] = useState(false);
  const [clickedOption, setClickedOption] = useState(null);
  if (!question || !question.option) {
    console.error("Question or options are undefined:", question);
    return null;
  }
  // console.log(option.option, " ===============option");

  const handleOptionClick = (option, isCorrect) => {
    if (!answered) {
      const isCorrect = option === correct;
      handleAnswer(isCorrect, questionIndex);
      setAnswered(true);
      setClickedOption(option);
    }
  };

  return (
    <div className="question-container">
      <h2 className="question">
        {questionIndex + 1}. {text}
      </h2>
      <ul className="options">
        {option.map((option, index) => (
          <li
            key={index}
            className={`option ${clickedOption === index ? "clicked" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.text}
            <button
              className={`option-button ${
                answeredQuestions.includes(questionIndex) ? "disabled" : ""
              }`}
              onClick={() => handleOptionClick(option)}
              disabled={answeredQuestions.includes(questionIndex)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
