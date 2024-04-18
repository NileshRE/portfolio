import { useState } from "react";

function IntroSection() {
  const [fullText, setFullText] = useState(false);

  const toggleText = () => {
    setFullText(!fullText);
  };
  return (
    <>
      <header id="Intro">
        <h1 className="name">
          Nilesh<span className="bar">&#124;</span>is a Front-end developer who solve problems, build responsive UI, write test cases leveraging React.
        </h1>
        <p
          className={`${fullText ? "full-text" : "summary"}`}
          onClick={toggleText}
        >
          With 2+ years of experience, I’m a Front-End Developer adept in React,
          Redux, JavaScript, Tailwind, HTML, and CSS. I have written Unit and
          Integration tests. Skilled in integrating API's,  utilizes real data,
            translating ideas into intuitive UI, I bring strong collaboration,
          teamwork, and a curiosity-driven approach. Currently expanding expertise in 
          Cloud and Virtualization technologies.
        </p>
        <img src="/assets/Frame 69.png" alt="Illustration" />
      </header>
    </>
  );
}

export default IntroSection;
