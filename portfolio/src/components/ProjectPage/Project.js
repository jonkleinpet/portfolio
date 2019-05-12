import React from "react";
import './styles/project.css';
export default function Project() {
  return (
    <>
      <h1 className="project">Projects</h1>
      <div id="quiz-app-container">
        <a href="https://thinkful-ei-armadillo.github.io/alex-jon-quiz/" className="project">
          <img className="project" src={ require("../../imgs/quiz-app-screenshot.jpg") } alt="quiz-app project" />
        </a>
        <span className="project"><h2>Quiz App</h2> - A chance to test your Sci- Fi television knowledge, with bonus trivia</span>
        <span>Made With - JS / CSS / React</span>
        <a id="code" href="https://github.com/thinkful-ei-armadillo/alex-jon-quiz">Code</a>
      </div>
      <div id="blog-app-container">
        <a href="https://lauries-blog-app.now.sh/" className="project">
          <img src={ require("../../imgs/Landing-Page.png") } alt="blog-app project"/>
        </a>
      </div>
    </>
  )
}