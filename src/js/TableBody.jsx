import { hot } from 'react-hot-loader';
import React from 'react';
import Row from './Row';

const TableBody = props => {
  return (
    <div className="table__body">
      {Object.keys(props.value)
        .map(elm => <Row cells={props.value[elm]} />)
        .join()}
      ;
    </div>
  );
};

export default hot(module)(TableBody);
