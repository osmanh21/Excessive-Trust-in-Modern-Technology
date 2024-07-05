// Defences.js
import React from "react";
import "./Defences.scss";

const Defences = () => {
  return (
    <div className="df">
      <div className="main">
        <h1>Defences</h1>
        <h3>Education and awareness</h3>

        <p>
          As much as this site focuses on how social engineering attack surface
          works, it hugely focuses on training deliveries for employees to
          sharpen up their knowledge of social engineering attacks and
          mitigation steps. For the past decade, information security has
          consistently been a top priority for businesses and organisations.
          Building barriers around the systems in an attempt to prevent an
          unauthorised person from accessing the resources was the main focus of
          the majority of the measures that were created for security breaches.
          However, the staff of every organisation, are its weakest link in
          terms of security. <br />
          <br />
          A researcher investigated different social engineering mitigation
          techniques where he concluded three different writers’ viewpoints on
          the three most effective social engineering mitigation and prevention
          steps. He has proposed implementing policies, procedures, education,
          awareness, and incident response plans. He also recommended employing
          information security architecture, rules, standards, and vulnerability
          assessments to protect against social engineering attacks. <br />
          <br />
          According to a study on human security breaches, information security
          is based on three fundamental foundations: people, processes, and
          technology. Researchers discovered that even when different
          organisations implement refined procedures and sophisticated
          technological devices and strong security measurements, the weakest
          link remains the human personnel involved in a security breach. Many
          have contributed to the social engineering attack vectors but very
          rare on security training and awareness. A key aspect of an
          organization's information security is information security awareness.
          Employees are the most significant assets of an organisation since
          they can take crucial information security decisions when security is
          at risk.
        </p>
      </div>
      <h3>The quiz</h3>
      <div class="quiz-para">
        <p>
          After a user finish educating themselves on social engineering attacks
          and mitigation techniques, A user can go and test themselves using the
          personality trait quiz that is provided in the website. The
          personality trait quiz will test a user’s knowledge on how susceptible
          they are towards social engineering attacks. Their results will be
          analysed by an AI called LLM (Large Language Model) Assistant GPT.
          This AI will give a personalised feedback based on the result a user
          gets. i.e. if a user gets below 20/50 their result will be a low
          scalability- which also means a Fail. If user gets below 30/50 their
          result will be a medium scalability- which is also a pass, but some
          improvements may be advised. If user gets below 40/50 their result
          will be a high scalability- which is also uncompromisable.
        </p>
      </div>
    </div>
  );
};

export default Defences;
