import { hot } from 'react-hot-loader';
import React from 'react';
import Cell from './Cell';
import UserInfo from './UserInfo';

class Row extends React.Component {
  constructor(props) {
    super(props);
    [this.user, this.img, ...this.rest] = Object.keys(props.cells);
    this.userData = [props.cells[this.user], props.cells[this.img]];
    this.activityData = this.rest.map(elm => props.cells[elm]);
  }

  render() {
    return (
      <div className="table__row">
        {[
          <UserInfo value={this.userData} />,
          this.activityData.map(elm => <Cell value={elm} />)
        ]
        // Object.keys(props.cells).map(elm => {
        //   if (elm !== 'img' && elm !== 'username')
        //   else if (elm === 'img' || elm === 'username') {
        //     userData.push(props.cells[elm]);
        //     log.debug(userData);
        //     if (userData.length === 2) return <UserInfo value={userData} />;
        //   }
        // })
        }
      </div>
    );
  }
}

export default hot(module)(Row);
