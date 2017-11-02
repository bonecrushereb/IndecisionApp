console.log("App is Running");

var template = (
  <div>
    <h1>Ben</h1>
    <p>This is some info</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
