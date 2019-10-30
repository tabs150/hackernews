import React from 'react';
import Button from './Button';

const Table = ({ list, pattern, onDismiss }) => {
  return (
    <div className='table'>
      {list.map(item => (
        <div key={item.objectID} className='table-row'>
          <span className='largeCol'>
            Link: <a href={item.url}>{item.title}</a>
          </span>
          <span className='mediumCol'> Author: {item.author}</span>
          <span className='smallCol'> Comments: {item.num_comments}</span>
          <span className='smallCol'> Points: {item.points}</span>
          <span className='smallCol'>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className='button-inline'
            >
              Dismiss
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Table;
