import { hot } from 'react-hot-loader';
import React from 'react';

const Cell = props => {
  return (
    <div className="table__cell">
      {props.value}
    </div>
  );
};

export default hot(module)(Cell);
