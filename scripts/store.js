'use strict';
/* global */
// eslint-disable-next-line no-unused-vars
const STORE = (function(){

  // change view
  const isView = function(newView) {
    this.currentPage = newView;
  };


  return {
    currentPage: 'landingView',
    isView,
    landingView: { 
      content: `<h1>Jonathan Kleinpeter</h1>
            <p>
              I am a web developer proficent in JavaScript, CSS, and HTML who currently lives in Houston Texas. An unshameful coffee enthusiast, cat lover and gamer. My favorite conversations always inculde new technologies and discussing there implications for the future. I relish a challenge and having a new problem to solve excites me. Feel free to contact me via email and view some of my work.
            </p>
            <a href="mailto:joklein341@gmail.com">Email Me</a>`,

      footer: ''
    },
    projectView: {
      content: 
        `<h1>Projects</h1>
          <a href="https://thinkful-ei-armadillo.github.io/alex-jon-quiz/">
            <img src="img/quiz-app-screenshot.jpg">
          </a>
        <span><h2>Quiz App</h2> - A chance to test your Sci- Fi television knowledge, with bonus trivia</span>
        <a href="https://github.com/thinkful-ei-armadillo/alex-jon-quiz">Code</a>
        </div >`,

      footer: ''
        
    },
    learnMoreView: {
      content:
        `<h1>About Me</h1>
          <p>
            I've been brought up with computers around my whole life and enjoy working with them or on them. I always had an interest in learning a coding language but never took the plunge. One week into JavaScript later; I was hooked and never looked back. The best thing about being a developer is no matter how many problems you solve today, tommorrow brings even more.
          </p>`,

      footer: ''
    },
  };
  
}());
