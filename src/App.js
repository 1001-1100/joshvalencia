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
          colors: [],
      };
  }

  componentDidMount(){
    axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(res => {
      this.setState({fact: res.data.text})
    })
  }

  main = () => {
    return (
      <Fragment>
        <Main fact={this.state.fact}/>
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
