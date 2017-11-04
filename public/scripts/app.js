'use strict';

console.log("App is Running");

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Ben'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
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

var user = {
  name: 'Ben',
  age: 28,
  userLocation: 'Seattle'
};

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.userLocation
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
