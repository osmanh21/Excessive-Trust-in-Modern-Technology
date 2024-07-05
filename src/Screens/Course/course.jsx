import React from "react";
import "./Course.scss";
import image from "../../Images/Social1.png";
import image5 from "../../Images/Social2.jpg";

const Couerse = () => {
  return (
    <div className="body" style={{ padding: "0% 5%" }}>
      <div className="class1">
        <h1 id="toph">Courses and Contents</h1>

        <div className="">
          <h2 className="sect4-h">Social Engineering</h2>

          <p className="">
            In this section, a user will learn two things, the offensive side
            and defensive side of social engineering. This will be split into
            two pages for both sections. In this page, it is designed to teach
            users the fundamental overview of social engineering, types of
            social engineering and its impacts. The next page will be about
            defensive. The largest threat to cybersecurity at the moment is
            social engineering. Many research has emphasised that while they can
            be identified, they cannot be stopped. Social engineering attacks
            take use of the victims' relationships to manipulate their emotions
            and psychology. Because they entail human interactions, these
            attacks are the most successful and dangerous ones. There are
            multiple standard attack tactics to accomplish the desired
            consequences of the attack, even if every social engineering attack
            is distinct and different from the others, but there are some common
            methodologies to all of them during a social engineering engagement.
            <br />
            <br />
            This includes Information gathering, establish relationship,
            exploitation, and execution which are the four phases of the attack
            chain. A lot was discussed about the social engineering taxonomy and
            the attack vector. Many studies have proposed a brief taxonomy which
            illustrates and details a structure of the taxonomy and attack
            scenarios. Her study includes type of social engineering taxonomy,
            (physical, social, technical and socio-technical) the operator,
            (human or software), and the channel that is used for the social
            engineering engagement such as email, telephone, website or
            physical.
          </p>

          <img className="image_social" src={image} alt="Social Engineering" />
        </div>

        <div className="sect2">
          <h2 className="title">Different types of Social Engineering</h2>
          <h3>Insider threats in social engineering attacks</h3>
          <p id="attacks">
            Insider threat is a person that has direct access to the
            organisation and can pose a threat to them. There are two types of
            insider threat, intentional insider threat and unintentional insider
            threat. The difference is the unintentional one pose a threat
            without the intention to cause harm. They don't intentionally try to
            cause harm to the organisation, instead, their acts are the
            consequence of carelessness, lack of education, or errors. Whilst
            the intentional insider threat are those who pose intentional
            insider threats with a malicious intent. They could be motivated by
            ideological beliefs, revenge, money, or personal grievances. An
            insider threat is any types of threats that are carried out by a
            threat actor that has direct access to the organisation and as long
            as there are people in an organisation, the risk of an insider
            threat will always be there. According to studies a significant
            percentage (34% of breaches) of unauthorised users and intruders
            within a system are organisational insiders, and many dangers are
            the consequence of accidents (5,830 attacks, for example, that have
            been set on by malware/spyware that employees downloaded).
          </p>
        </div>

        <div className="sect3">
          <h3>BYOD in social engineering attacks</h3>
          <p id="BYOD">
            Bring your Own Device (BYOD) refers to a set of regulations in an
            organisation that allows staff members to access corporate
            applications and information using the device they own, including
            phones, laptops, tablets, and other devices, instead of requiring
            them to use company-issued devices. Implementing BYOD policies
            including access control is a very vital aspect for organizations if
            they are to introduce and implement bring your own device. The
            impacts of bring your own device regulations in organizations has
            gained huge concerns for security researchers and challenges
            organisations security. The most significant threat that a firm
            could encounter while using BYOD is the loss or theft of mobile
            devices, since it exposes data to an unauthorised and an
            unknown user. The risks associated with security around bring your
            own device (BYOD) are essentially a remake of those that surfaced
            when laptops became popular. Concerns regarding general security are
            reasonable when an employee connects a personal phone or laptop to a
            wired or wireless network because malware can spread from a personal
            device onto the organisation workstations and across company
            enterprise networks as soon as the device is joined to the company.
          </p>

          <img id="helpline" src={image5} alt="Helpline" />

          <p id="byod_para">
            Bring your Own Device (BYOD) refers to a set of regulations in an
            organisation that allows staff members to access corporate
            applications and information using the device they own, including
            phones, laptops, tablets, and other devices, instead of requiring
            them to use company-issued devices. Implementing BYOD policies
            including access control is a very vital aspect for organizations if
            they are to introduce and implement bring your own device. The
            impacts of bring your own device regulations in organizations has
            gained huge concerns for security researchers and challenges
            organisations security. The most significant threat that a firm
            could encounter while using BYOD is the loss or theft of mobile
            devices, since it exposes data to an unauthorised and an
            unknown user. The risks associated with security around bring your
            own device (BYOD) are essentially a remake of those that surfaced
            when laptops became popular. Concerns regarding general security are
            reasonable when an employee connects a personal phone or laptop to a
            wired or wireless network because malware can spread from a personal
            device onto the organisation workstations and across company
            enterprise networks as soon as the device is joined to the company.
          </p>
        </div>
        <p id="byod_para">
          <span className="sect4-h" style={{ color: "white" }}>
            Phishing attacks
          </span>{" "}
          - One of the most popular and well-known forms of social engineering
          attacks is phishing. Attackers persuade victims into disclosing
          personal and sensitive data. Phishing attacks can be carried out
          through a variety of techniques, including emails, marketing
          materials, scareware, antivirus software, PayPal websites, and
          rewards. The intention is to use malware to compromise the victim's
          computer or to take sensitive information, like login credentials and
          credit card details.
          <br /> <br />
          <br />
          <span className="sect4-h" style={{ color: "white" }}>
            SMSishing
          </span>{" "}
          - The goal of SMSishing attacks is to persuade victims by sending them
          fake texts and messages on their phones. Although they are carried out
          differently, they are comparable to phishing attempts. Because victims
          can always have their telephones with them at all times, SMSishing
          attacks are effective. The SMSishing scams mainly consist of two
          steps. Firstly, the victim receives a text message that appears to
          have come from a reputable source, such as their bank or system
          administrator. In the second, you get a crucial SMS alert about your
          identity being stolen or your account number being frozen. It then
          directs you to a phone number or website where you may confirm the
          account details.
          <br /> <br />
          <br />
          <span className="sect4-h" style={{ color: "white" }}>
            Spear phishing
          </span>
          - Spear-phishing is a kind of phishing attack that uses malicious
          emails to target certain people or organisations. Spear phishing
          attacks target directly at users that the adversary believes to have
          privileged access to or capabilities from. Regular phishing assaults
          are distinguished from spear phishing by their specific targeting and
          motivation. They require gathering victim information via easily
          accessible internet data. These attacks are more successful than other
          social engineering attacks since they target an entity from within,
          making it challenging to identify and differentiate them from
          authentic users.
          <br />
          <br />
          <br />
          <span className="sect4-h" style={{ color: "white" }}>
            Reverse social engineering
          </span>{" "}
          - In a reverse social engineering engagement, An attacker who uses
          reverse social engineering does not approach the victim first.
          Instead, the attacker tricks the victim into reaching out to them
          directly. Since the victim was the one who initially sought to build a
          relationship, a high degree of trust is consequently built between the
          victim and the attacker. Reverse engineering is mainly engaged in a
          person-to-person attack. the attacker persuades the victim that he or
          she is experiencing problems or may experience them in the future and
          offers to assist in finding solutions.
          <br />
          <br />
          <br />
          <span className="sect4-h" style={{ color: "white" }}>
            Baiting
          </span>{" "}
          - a kind of social engineering attack in which an impostor utilises a
          false promise to persuade a victim into falling for a trap where they
          could be stolen of their financial and personal information or have
          malware installed on their computer. A malicious file with a desirable
          name could be the trap. Hackers sometimes deliver infected pen drives
          to staff members; the virus on the drive is used to breach the
          company's network. Emails and advertisements are often used for
          baiting. Baiting advertisements are frequently found on dark web and
          insecure websites. 
          <br />
          <br />
          <br />
          <span className="sect4-h" style={{ color: "white" }}>
            Pre-texting
          </span>{" "}
          - Pretexting is the use of a made-up story, or pretext, to win over a
          victim's trust and persuade or deceive them into installing malware,
          disclosing private information, or doing other actions that could
          endanger themselves or their employer. In a pretexting attack, the
          attacker creates a fictional situation that increases the likelihood
          that the target might reveal critical information. Typically, this
          technique is used to deceive IT staff members into disclosing their
          clients' private information, such as usernames, passwords, security
          questions.
          <br />
          <br />
          <br />
          <span className="sect4-h" style={{ color: "white" }}>
            Shoulder surfing
          </span>{" "}
          - In social engineering, the term "shoulder surfing" is the act of
          spying on someone else's computer screen, smartphone, or other piece
          of technology by standing near to them or looking over their shoulder
          to obtain sensitive information without authorization. Passwords,
          login credentials, personal identification numbers (PINs), and any
          other secret data that is visible on the screen could be included in
          this information. In a 2015 study, Wiese and Roth specifically
          examined the difficulties and issues associated with empirical
          shoulder surfing investigations. They identify several experimental
          design flaws through an analysis of empirical publications, and they
          then talk about how these might affect the study's findings and
          conclusions.
          <br />
          <br />
          <br />
          <span className="sect4-h" style={{ color: "white" }}>
            Tailgating
          </span>{" "}
          - In social engineering attacks, tailgating is the act of an
          unauthorised individual physically following an authorised one into a
          restricted or secure area. This approach takes advantage of people's
          the common good and inclination to hold doors open for other people,
          particularly at locations where staff members are likely used to doing
          so. In a coordinated attack, an employee or former employee would be
          willing fully grants an unauthorised user access to a secured
          environment. Because of open databases like LinkedIn, which list
          organisation roles along with the names of the individuals holding
          them, this assault is also becoming increasingly simple to carry out.
        </p>
      </div>

      <div className="sect4">
        <h3 class="sect4-h">Personality trait</h3>

        <p>
          Personal traits play a major role in an individual's vulnerability to
          social engineering techniques including deception, manipulation, and
          influence. Social engineers employ communication as a weapon to trick,
          convince, and ultimately control their victims by treating human
          behavioural traits as weaknesses. The American Psychological
          Association (APA) defines personality as "individual variations in
          characteristic patterns of thinking, feeling, and behaving. Several
          theories and models have been used to analyse and quantify
          personality.{" "}
        </p>

        <div className="sect4">
          <h3 className="sect4-h">Personality trait</h3>

          <p>
            Personal traits play a major role in an individual's vulnerability
            to social engineering techniques including deception, manipulation,
            and influence. Social engineers employ communication as a weapon to
            trick, convince, and ultimately control their victims by treating
            human behavioural traits as weaknesses. The American Psychological
            Association (APA) defines personality as "individual variations in
            characteristic patterns of thinking, feeling, and behaving. Several
            theories and models have been used to analyse and quantify
            personality.
          </p>

          <h3 className="sect4-h">Psychological behaviour and persuasion </h3>

          <p>
            Personality in psychology refers to an individual's generally
            consistent ideas, feelings, and behavioural habits. These are
            specific to each person and are mostly influenced by experience,
            social and environmental factors. The most widely used
            classifications aim to extract the fewest number of statistically
            independent dimensions. Human behaviour in cyber security has led to
            major vulnerabilities that attackers take advantage of using social
            engineering techniques. Research has shown that human behaviours
            account for 95% of security incidents. (IBM, 2015).
          </p>
        </div>

        <div className="defence " style={{ padding: "0% 5%" }}>
          <p>Click here to visit the defensive page</p>
          <button className="df-btn">
            <a href="/defense">Defensive Page</a>
          </button>
        </div>

        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Couerse;
