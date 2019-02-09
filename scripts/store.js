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
      content: `<h1 class="landing">Jonathan Kleinpeter</h1>
            <p class="landing">
              I am a web developer proficent in JavaScript, CSS, and HTML who currently lives in Houston Texas. An unshameful coffee enthusiast, cat lover and gamer. My favorite conversations always inculde new technologies and discussing there implications for the future. I relish a challenge and having a new problem to solve excites me. Feel free to contact me via email and view some of my work.
            </p>
            <a class="landing" href="mailto:joklein341@gmail.com">Email Me</a>`,

      footer: ''
    },
    projectView: {
      content: 
        `<h1 class="project">Projects</h1>
        <div class="project">
          <a href="https://thinkful-ei-armadillo.github.io/alex-jon-quiz/" class="project">
            <img class="project" src="img/quiz-app-screenshot.jpg">
          </a>
        </div>
       
        <span class="project"><h2>Quiz App</h2> - A chance to test your Sci- Fi television knowledge, with bonus trivia</span>
         <span>Made With - JS / CSS / JQuery</span>
        <a id="code" href="https://github.com/thinkful-ei-armadillo/alex-jon-quiz">Code</a>
        </div >`,

      footer: ''
        
    },
    learnMoreView: {
      content:
        `<h1 class=learnMore>About Me</h1>
          <p class=learnMore>
            I've been brought up with computers around my whole life and enjoy working with them or on them. I always had an interest in learning a coding language but never took the plunge. One week into JavaScript later; I was hooked and never looked back. The best thing about being a developer is no matter how many problems you solve today, tommorrow brings even more.
          </p>
          <div class="icon-container class=learnMore">
            <a class="learnMore" href="https://www.linkedin.com/in/jonathan-kleinpeter-531a29179/"><img class="icon" src="img/linkedin-icon.png"></a>
            <a class="learnMore" href="https://github.com/jonkleinpet"><img id="gitHub" src="img/GitHub_Logo.png"></a>
          </div>
          `,

      footer: ''
    },
  };
  
}());
