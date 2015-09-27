import React from 'react';
import 'whatwg-fetch';
import './scss/index.scss';

var Form = React.createClass({
  render: function() {
    return (
      <div>
        <label>{this.props.label}</label>
        <textarea 
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
      .then(json => this.setState({ happyOrSad: json.output,
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
        <h3>Go on, tell me how you're feeling.</h3>
        <Form 
          label=""
          text={this.state.inputText}
          onChange={this.onInputChange}/>
        <p>Wow, sounds like you are <span className={this.state.happyOrSad}>{this.state.happyOrSad}</span>.</p>
      </div>
    );
  }

});

React.render(
  <App />,
  document.getElementById('container')
);
