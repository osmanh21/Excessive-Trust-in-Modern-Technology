// App.js
import React, { useEffect } from "react";
import "./Home.scss";
import image1 from "../../Images/1.jpg";
import image2 from "../../Images/2.jpg";
import image3 from "../../Images/3.jpeg";
import image4 from "../../Images/4.jpg";
import NavBar from "../Navbar/Navbar";

const Home = () => {
  useEffect(() => {
    let counter = 1;
    const intervalId = setInterval(() => {
      document.getElementById(`radio${counter}`).checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <div className="top-sect" style={{ marginTop: "0px" }}>
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide first">
              <img src={image1} alt="" />
            </div>

            <div className="slide">
              <img src={image2} alt="" />
            </div>

            <div className="slide">
              <img src={image3} alt="" />
            </div>

            <div className="slide">
              <img src={image4} alt="" />
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>

          {/* <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div> */}
        </div>
      </div>

      <div className="sect1">
        <h2 className="h2" id="ransomware">
          Why train your stuff, Ransomware that’s why!
        </h2>

        <p id="para1">
          This website aims to teach your stuff about social engineering attacks
          and its defences and will then be assessed by a Personality trait quiz
          that analyses how susceptible they are towards social engineering
          attacks based on their score.
        </p>

        <h2 className="h2">An overview of Social Engineering</h2>

        <p className="para2 main_para">
          Before we dive deep into social engineering, let’s explore what is the
          main root cause of it, also known as “Trust”.
          <br />
          <br />
          Excessive trust in technology has become a pervasive issue in
          contemporary society, leading to a range of consequences such as
          privacy breaches, cybersecurity vulnerabilities, and the erosion of
          critical thinking skills. As technology increasingly integrates into
          every aspect of our lives, individuals, businesses, and governments
          are confronted with the challenge of striking a balance between
          embracing the benefits of technology and safeguarding against its
          risks.
          <br />
          <br />
          When it comes to trust, humans are more likely to trust other humans
          than computers or other technologies. They are thus the chain's
          weakest link in terms of security. Many solutions have been found in
          the prevention and mitigation of social engineering attacks. Statics
          show that 57% of the most effective way of preventing social
          engineering attacks is Education Training and Awareness (ETA). Many
          studies have underlined the crucial role of staff education in
          ensuring the successful implementation of the organization's specified
          policies, procedures, and standards.
          <br />
          <br />
          The last several years have seen a sharp increase in social
          engineering attacks, which have negatively impacted both individuals
          and companies, especially mini businesses. Social engineering is one
          of the biggest challenges facing network security because it exploits
          the natural human tendency to trust. Whether a network has strong
          firewalls, encryption
          <br />
          <br />
          techniques, intrusion detection systems, or anti-virus software,
          social engineering poses a threat to network security.
          <br />
          <br />
          Even though social engineering attacks have increased over time,
          information security training is becoming more and more necessary. A
          state of consciousness known as information security awareness (ISA)
          occurs when users of information systems are sincerely committed to
          the policies and regulations, perceive possibilities, understand the
          importance of authority and responsibility, and respond accordingly.
        </p>
      </div>
    </div>
  );
};

export default Home;
