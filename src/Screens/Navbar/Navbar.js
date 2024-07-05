import React from "react";
import "./navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <div id="logo">
        <h2>EXCESSIVE TRUST IN TECHNOLOGY</h2>
      </div>
      <ul className="">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/course">Train your stuff</a>
        </li>
        <li>
          <a href="/quiz">Quiz</a>
        </li>
        <li>
          <a href="/signin">Sign In</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
