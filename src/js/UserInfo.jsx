import { hot } from 'react-hot-loader';
import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    // log.debug(props);
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <div className="table__cell  user">
        <img className="user__img" src={this.props.value[1]} alt="" />
        <span className="user__name">
          <a href={`https://www.freecodecamp.com/${this.props.value[0]}`}>
            {this.props.value[0]}
          </a>
        </span>
      </div>
    );
  }
}

export default hot(module)(UserInfo);
