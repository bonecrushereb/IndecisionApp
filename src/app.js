class InDecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>InDecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
    <div>
      <button>What should I do?</button>
    </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options Component Here</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>AddOption Component Here</p>
      </div>
    );
  }
}

ReactDOM.render(<InDecisionApp />, document.getElementById('app'));
