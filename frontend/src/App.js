import './App.css';
import React, { Component } from 'react';
import Portfolio from './containers/Porfolio/Portfolio';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Portfolio />
        </div>
      </BrowserRouter>
    );

  }
}

export default App;