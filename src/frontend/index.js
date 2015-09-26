import React from 'react';
import 'whatwg-fetch';

var Form = React.createClass({
  render: function() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input 
          type="text"
          onChange={this.props.onChange}
          value={this.props.text} />
      </div>
    );
  } 
});

var App = React.createClass({

  getInitialState: function() {
    return {
      inputText: '',
      happyOrSad: 'unknown',
      needToSendRequest: false
    };
  },

  sendRequest: function() {
    fetch(`/happysad?text=${this.state.inputText}`)
      .then(resp => resp.json())
      .then(json => this.setState({
        happyOrSad: json.output,
        needToSendRequest: false
      }));
  },
  
  componentDidUpdate: function() {
    if (this.state.needToSendRequest)
      this.sendRequest();
  },

  onInputChange: function(e,v) {
    this.setState({
      inputText: e.target.value,
      needToSendRequest: true
    });
  },

  render: function() {
    return (
      <div>
        <h1>Is your Text Happy or Sad?</h1>
        <Form 
          label="Enter Text here: "
          text={this.state.inputText}
          onChange={this.onInputChange}/>
        <h3>It is {this.state.happyOrSad}</h3>
      </div>
    );
  }

});

React.render(
  <App />,
  document.getElementById('container')
);
