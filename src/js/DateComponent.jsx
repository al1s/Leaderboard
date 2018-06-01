import { hot } from 'react-hot-loader';
import React from 'react';

const DateComponent = props => {
  return (
    <div className="table__cell">
      <div>
        {`${new Date(props.value).toLocaleDateString()}
          ${new Date(props.value).toLocaleTimeString()}`}
      </div>
    </div>
  );
};

export default hot(module)(DateComponent);
