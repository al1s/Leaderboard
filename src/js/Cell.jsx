import { hot } from 'react-hot-loader';
import React from 'react';

const Cell = props => {
  return (
    <div className="table__column">
      <span className="table__cell">{props.value}</span>;
    </div>
  );
};

export default hot(module)(Cell);
