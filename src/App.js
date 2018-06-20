import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Game from './components/game'
import SpaceDetail from './components/space-detail'
import { withRouter } from 'react-router'

class App extends Component {
  constructor () {
    super()
    this.state = {
      month: null
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      if (this.state.month) {
        this.props.history.push(`/bingo/${this.state.month}`)
      } else {
        this.props.history.push('/bingo')
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="select-month">
          <select name="month" onChange={this.handleChange}>
            <option value="">Select a Month</option>
            {/* <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="june">June</option>*/}
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
        <Switch>
          <Route exact path="/bingo" />
          <Route exact path="/bingo/:month" component={Game} />
          <Route path="/bingo/:month/:id" component={SpaceDetail} />
          <Redirect to="/bingo" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
