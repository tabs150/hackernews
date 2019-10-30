import React from 'react';

const Search = ({ value, onChange, children }) => {
  return (
    <form>
      {children} <input value={value} onChange={onChange} type='text' />
      <button type='submit'>{children}</button>
    </form>
  );
};

export default Search;
