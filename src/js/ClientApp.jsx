import { hot } from 'react-hot-loader';
import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ['Camper Name', 'Recent score', 'Alltime score', 'Last checked'],
      body: {}
    };
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({ value: value });
  }

  render() {
    return (
      <div className="app__container">
        <h1 className="app__header">FreeCodeCamp Camper Leaderboard</h1>
        <div className="table">
          <TableHeader
            onChange={e => this.handleChange(e)}
            value={this.state.header}
          />
          <TableBody value={this.state.body} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
