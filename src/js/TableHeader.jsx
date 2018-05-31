import { hot } from 'react-hot-loader';
import React from 'react';
import Cell from './Cell';

const TableHeader = props => {
  return (
    <div className="table__header">
      {props.value.map(elm => <Cell value={elm} />)};
    </div>
  );
};

export default hot(module)(TableHeader);
