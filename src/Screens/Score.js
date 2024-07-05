import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Score.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { Spin } from "antd";

function Scoreboard() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { feedback } = location.state;
  const { correctAnswers, totalMarks, obtainedMarks, incorrectAnswers } =
    location?.state || {};

  const scalabilityLevel = getScalabilityLevel(obtainedMarks / totalMarks * 100);

  function getScalabilityLevel(percentage) {
    if (percentage < 20) {
      return "low";
    } else if (percentage < 30) {
      return "medium";
    } else {
      return "high";
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const collectionRef = collection(db, "Quiz");
      const querySnapshot = await getDocs(collectionRef);
      const fetchedQuizData = [];
      querySnapshot.forEach((doc) => {
        fetchedQuizData.push(doc.data());
      });
      setQuizData(fetchedQuizData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Spin spinning={loading}>
        <div className="scoreboard-container">
          <h1 className="scoreboard-heading">Scoreboard</h1>
          <p style={{ textAlign: "center" }}>Every Question have 5 marks</p>
          <p className="score-info">Total Marks: {totalMarks}</p>
          <p className="score-info">Obtained Marks: {obtainedMarks}</p>
          <h2 className="answer-heading">Correct Answers:</h2>
          {quizData.map((elm, index) => (
            <li className="correct-answer" key={index}>
              {elm?.correct}
            </li>
          ))}

          <h2>Personalized Feedback</h2>
          <p>{feedback}</p>

          {/* Display scalability level message with different styles */}
          <div>
            {scalabilityLevel === "low" && (
              <p className="scalability-low"> Scalability: Below 20 - Fail (Low Scalability)</p>
            )}
            {scalabilityLevel === "medium" && (
              <p className="scalability-medium">Scalability: 20-30 - Medium Scalability</p>
            )}
            {scalabilityLevel === "high" && (
              <p className="scalability-high">Scalability: Above 30 - High Scalability</p>
            )}
          </div>
        </div>
      </Spin>
    </>
  );
}

export default Scoreboard;
