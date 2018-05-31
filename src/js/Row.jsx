import { hot } from 'react-hot-loader';
import React from 'react';
import Cell from './Cell';

const Row = props => {
  return (
    <div className="table__row">
      {Object.keys(props.cells).map(elm => {
        if (elm !== 'img') return <Cell value={props.cells[elm]} />;
      })};
    </div>
  );
};

export default hot(module)(Row);
