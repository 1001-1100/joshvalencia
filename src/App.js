import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import axios from 'axios';

class App extends Component {

  constructor(props){
      super(props);
      var cards = JSON.parse(localStorage.getItem('cards'));
      if(cards === null || cards === undefined)
        cards = []
      this.state = {
          cards: cards,
          fact: '...',
          facts: [],
          greetings: [],
          leftGreetings: [],
          rightGreetings: [],
          colors: [],
          count: 0,
      };
  }

  componentDidMount(){
    axios.get('https://joshcezarvalencia-backend.herokuapp.com/quote')
    .then(res => {
      const facts = res.data
      const fact = '\"' + facts[this.state.count] + '\"'
      this.setState({fact, facts})
    })
    axios.get('https://joshcezarvalencia-backend.herokuapp.com/greetings')
    .then(res => {
      const greetings = res.data 
      const leftGreetings = greetings[this.state.count]
      const rightGreetings = greetings[this.state.count+1]
      this.setState({greetings, leftGreetings, rightGreetings})
    })
  }

  reRoll = () => {
    console.log("Re-roll!")
    const factCount = this.state.count % this.state.facts.length
    const leftCount = this.state.count % this.state.greetings.length
    const rightCount = (this.state.count + 1) % this.state.greetings.length
    const fact = '\"' + this.state.facts[factCount] + '\"'
    const leftGreetings = this.state.greetings[leftCount]
    const rightGreetings = this.state.greetings[rightCount]
    this.setState({count: this.state.count+1,fact, leftGreetings, rightGreetings})
  }

  main = () => {
    return (
      <Fragment>
        <Main fact={this.state.fact} count={this.state.count} reRoll={this.reRoll} rightGreetings={this.state.rightGreetings} leftGreetings={this.state.leftGreetings}/>
      </Fragment>
    )
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={this.main} /> 
        </Switch>
      </Router>
    );
  }

}

export default App;
