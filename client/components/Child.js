import React, { Component } from 'react';
import {connect} from 'react-redux';
import { hot } from 'react-hot-loader';

class Child extends Component {
  constructor(...args) {
    super(...args);
    this.state = {local: "state"};
  }
  render() {
    const { local } = this.state;
    const num = this.props.count.num;
    return (
      <p>
        Hello Iliya
        {" "}
        <input
          type="text"
          value={local + " " + num}
          onChange={e => this.setState({local: e.target.value})}
        />
      </p>
    );
  }
}


export default hot(module)( connect(state => ({count: state}))(Child) );
