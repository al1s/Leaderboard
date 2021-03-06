import { hot } from 'react-hot-loader';
import React from 'react';
import Row from './Row';

const TableBody = props => {
  return (
    <div className="table__body">
      {props.value.map(elm => (
        <Row key={`${elm.username}${elm.lastUpdate}`} cells={elm} />
      ))}
    </div>
  );
};

export default hot(module)(TableBody);
