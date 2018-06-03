import { hot } from 'react-hot-loader';
import React from 'react';
import Cell from './Cell';
import UserInfo from './UserInfo';
import DateComponent from './DateComponent';

class Row extends React.Component {
  constructor(props) {
    super(props);
    [this.user, this.img, ...this.rest] = Object.keys(props.cells);
    this.userData = [props.cells[this.user], props.cells[this.img]];
    this.activityData = this.rest.map(elm => props.cells[elm]);
    this.lastUpdate = this.activityData.splice(this.activityData.length - 1, 1);
  }

  render() {
    return (
      <div className="table__row">
        {[
          <UserInfo key={this.userData[1]} value={this.userData} />,
          this.activityData.map(elm => <Cell key={elm} value={elm} />),
          <DateComponent key={this.lastUpdate} value={this.lastUpdate} />
        ]}
      </div>
    );
  }
}

export default hot(module)(Row);
