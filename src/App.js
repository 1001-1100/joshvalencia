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
          leftGreetings: [],
          rightGreetings: [],
          colors: [],
      };
  }

  componentDidMount(){
    axios.get('https://joshcezarvalencia-backend.herokuapp.com/quote')
    .then(res => {
      const fact = '\"' + res.data.quote + '\"' + ' - Valencia 2020'
      this.setState({fact})
    })
    axios.get('https://joshcezarvalencia-backend.herokuapp.com/greetings')
    .then(res => {
      const leftGreetings = []
      const rightGreetings = []
      res.data[0].map(greeting => {
        leftGreetings.push(greeting)
      })
      res.data[1].map(greeting => {
        rightGreetings.push(greeting)
      })
      this.setState({leftGreetings, rightGreetings})
    })
  }

  reRoll = () => {
    this.setState({fact: '...', leftGreetings: [], rightGreetings: []})
    axios.get('https://joshcezarvalencia-backend.herokuapp.com/quote')
    .then(res => {
      const fact = '\"' + res.data.quote + '\"' + ' - Valencia 2020'
      this.setState({fact})
    })
    axios.get('https://joshcezarvalencia-backend.herokuapp.com/greetings')
    .then(res => {
      const leftGreetings = []
      const rightGreetings = []
      res.data[0].map(greeting => {
        leftGreetings.push(greeting)
      })
      res.data[1].map(greeting => {
        rightGreetings.push(greeting)
      })
      this.setState({leftGreetings, rightGreetings})
    })
  }

  main = () => {
    return (
      <Fragment>
        <Main fact={this.state.fact} reRoll={this.reRoll} rightGreetings={this.state.rightGreetings} leftGreetings={this.state.leftGreetings}/>
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
