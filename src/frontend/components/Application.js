import React from 'react';
import 'whatwg-fetch'; //polyfill

export default class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouts: []
    };

    fetch('/api')
      .then(resp => resp.json())
      .then(json => this.setState(json));

    console.log(this.state.shouts);
  }

  render() {
    return (
      <div>
        <h1>Shouts</h1>
        <ul>
          { this.state.shouts.map(s => <li>{s}</li>) }
        </ul>
      </div>
    );
  }
}
