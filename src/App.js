import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Screens/Quiz";
import ScorePage from "./Screens/Score";
import NavBar from "./Screens/Navbar/Navbar";
import SignIn from "./Auth/Signin";
import Home from "./Screens/Home/Home";
import Defences from "./Screens/Defence/Defence";
import Couerse from "./Screens/Course/course";

function App() {
  return (
    <div style={{}}>
      <NavBar style={{ marginBottom: "150px", margintop: "100px" }} />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/quiz" element={<Quiz />} />
            <Route
              path="/scoreboard/:score/:totalQuestions"
              element={<ScorePage />}
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/defense" element={<Defences />} />
            <Route path="/course" element={<Couerse />} />
            <Route path="/defense" element={<Defences />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
