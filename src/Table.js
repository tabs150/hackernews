import React, { Component } from 'react';
import Button from './Button';

function isSearched(searchTerm) {
  return function(item) {
    // ES5 = return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
}

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item => (
          <div key={item.objectID}>
            <span>
              Link: <a href={item.url}>{item.title}</a>
            </span>
            <span> Author: {item.author}</span>
            <span> Comments: {item.num_comments}</span>
            <span> Points: {item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>Dismiss</Button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Table;
