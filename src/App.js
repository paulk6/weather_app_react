import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Weather from './views/weather';
import Header from './components/header';
import Animal from './views/animal';
import Racer from './views/racer';
import Commerce from './views/commerce'

// don't have to put index.js in the weather import. automatically assumed by react

// {} in import is for non-default imports


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Weather />} />
            {/*}() => is function closure, calls function right away so it isn't trying to render the function itself, but the result of the function*/}
            <Route exact path='/racer' render={() => <Racer />} />
            <Route exact path='/animal' render={() => <Animal />} />
            <Route exact path='/commerce' render={() => <Commerce />} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
