'use strict';

console.log("App is Running");

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

var count = 0;

var addOne = function addOne() {
  console.log('addOne');
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  console.log('minusOne');
  count--;
  renderCounterApp();
};
var reset = function reset() {
  console.log('reset');
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      ' +1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      ' -1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset count'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
