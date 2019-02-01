'use strict';
/* global $ STORE animations */
// eslint-disable-next-line no-unused-vars
const content = (function(){
// handle navigation clicks

  // landing nav
  function handleLanding() {
    $('#js-landing').click(() =>  {
      getView();
      render();
    });
      
  }
  // projects nav
  function handleProjects() {
    $('#js-projects').on('click', () => {  
      getView();
      render();
      
     
    });
  }

  // learn more nav
  function handleLearnMore() {
    $('#js-learnMore').click(() => {
      getView();
      render();
    });
  }

  // get current view
  function getView() {
    const navVal = getNavText();
    STORE.isView(navVal);
  }

  // get text from nav element
  function getNavText() {
    return $(event.target).attr('value');
  }

  function liAnimate() {
    $('li').click(() => {
      $('img').hide();
      $('img').promise().done(render());
    });
  }

  // bind event listeners
  const handlers = function() {
    handleLanding();
    handleProjects();
    handleLearnMore();
    liAnimate();
  };

  // render view
  function render () {
    console.log(STORE[STORE.currentPage].content);
    console.log(STORE.landingView);
    $('.main').html(STORE[STORE.currentPage].content);
    $('#footer').html(STORE[STORE.currentPage].footer);
  }

  return {
    handlers,
    render
  };

}());

