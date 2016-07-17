// An attempt to rewrite this app.js in modular JS, to be continued....

var s,
Button = {

  settings: {
    // text: 'Click Here',
    // state: 'non-active',
    clicks: 0,
    clicksLimit: 10,
    buttons: document.getElementsByClassName('button'),
    resetBtn: document.getElementById('reset-button')
  },

  init: function() {
    // some stuff
    s = this.settings;
  },

  bindUIActions: function() {
    s.buttons.on('click', function() {
      counter(s.buttons); // count clicks, change colors, text
    }),
      s.resetBtn.on('click', function() {
      reset(s.resetBtn);
    })
  },

  counter: function() {
    s.clicks < s.clicksLimit ? s.clicks++ : s.clicks = 10
    console.log('Number of clicks ' + s.clicks);
  },
  
  reset: function() {
    s.clicks = 0;
    console.log('Clicks now' + s.clicks);
  }
};