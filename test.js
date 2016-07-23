// An attempt to rewrite this app.js in modular JS, to be continued....

var s,
Button = {

  settings: {
    clicks: 0,
    buttons: document.querySelectorAll(".js-button"),
    displays: document.querySelectorAll(".js-display"),
    reset: document.querySelector(".js-reset")

  },

  init: function() {
    s = this.settings;
    buttons.forEach(function (button, index) {

      button.buttonIndex = index;
      button.defaultText = button.innerText; 
      button.clickCounter = 0;
      button.clickLimit = parseInt(button.getAttribute("data-limit"));
      button.addEventListener('click', clickCounter, false);
    })
  },

  // bindEvent: function() {
  //   console.log('bindEvent');
  // },

  clickCounter: function() {
    // s.clicks < s.clicksLimit ? s.clicks++ : s.clicks = 5
    console.log(s.clicks);
    console.log('Number of clicks ' + s.clicks);
  }
  
  // reset: function() {
  //   s.clicks = 0;
  //   console.log('Clicks now' + s.clicks);
  // }
};


