import React, { Component } from 'react';

class ExplainBindings extends Component {
  constructor(props) {
    super(props);
    this.onClickMe = this.onClickMe.bind(this);
  }
  onClickMe() {
    console.log(this);
  }
  render() {
    return (
      <button onClick={this.onClickMe} type='button'>
        Click Me
      </button>
    );
  }
}

export default ExplainBindings;