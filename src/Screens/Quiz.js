import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import "./Question.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { Spin } from "antd";
import axios from "axios";

function Quiz() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, "Quiz");
      const querySnapshot = await getDocs(collectionRef);

      const fetchedQuizData = [];
      querySnapshot.forEach((doc) => {
        fetchedQuizData.push(doc.data());
      });
      setQuizData(fetchedQuizData);
    };
    setLoading(false);
    fetchData();
  }, []);

  const handleAnswer = (isCorrect, questionIndex) => {
    if (
      isCorrect &&
      !correctAnswers.some(
        (answer) => answer.text === quizData[questionIndex].text
      )
    ) {
      setScore(score + 5);
      const correctAnswer = {
        text: quizData[questionIndex].text,
        correct: quizData[questionIndex].correct,
      };
      setCorrectAnswers((prevCorrectAnswers) => [
        ...prevCorrectAnswers,
        correctAnswer,
      ]);
    }

    const updatedQuestions = [...answeredQuestions, questionIndex];
    setAnsweredQuestions(updatedQuestions);
  };

  const handleSubmitQuiz = async() => {
    const incorrectAnswers = quizData.filter((question, index) => {
      return !correctAnswers.some(
        (correctAnswer) => correctAnswer.text === question.text
      );
    });

    // Submit quiz data to the server
    const response = await axios.post("http://localhost:9090/quiz-feedback", {
    userId: "user123",
    score: score,
    totalQuestions: quizData.length,
  });

    navigate(`/scoreboard/${score}/${quizData.length}`, {
      state: {
        totalMarks: quizData.length * 5,
        obtainedMarks: score,
        correctAnswers: correctAnswers,
        incorrectAnswers: incorrectAnswers,
        feedback: response.data, 
      },
    });
    

  };
  return (
    <div className="quiz-container">
      <div className="quiz-content">
        {loading ? (
          <Spin size="large" />
        ) : (
          <>
            {quizData.length > 0 &&
              quizData.map((question, index, option) => (
                <Question
                  key={index}
                  question={question}
                  handleAnswer={(isCorrect) => handleAnswer(isCorrect, index)}
                  answeredQuestions={answeredQuestions}
                  questionIndex={index}
                  option={option}
                />
              ))}
            <button
              className="submit-button"
              onClick={handleSubmitQuiz}
              disabled={answeredQuestions.length !== quizData.length}
            >
              Submit Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
