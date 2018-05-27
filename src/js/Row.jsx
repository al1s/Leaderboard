import { hot } from 'react-hot-loader';
import React from 'react';
import Cell from './Cell';

const Row = props => {
  return (
    <div className="table__row">
      {props.cells.map(elm => <Cell value={elm} />).join()};
    </div>
  );
};

export default hot(module)(Row);
