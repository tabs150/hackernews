import React, { Component } from 'react';

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form>
        {children} <input value={value} onChange={onChange} type='text' />
      </form>
    );
  }
}

export default Search;
