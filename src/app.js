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

var user = {
  name:'Ben',
  age: 28,
  userLocation: 'Seattle'
}

var template2 = (
  <div>
    <h1>{user.name + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.userLocation}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
