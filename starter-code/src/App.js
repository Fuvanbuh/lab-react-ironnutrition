import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox />
      </div>
    );
  }
}

export default App;
