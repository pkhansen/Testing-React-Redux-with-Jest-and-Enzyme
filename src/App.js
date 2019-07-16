import React, { Component } from 'react';

import './app.scss';

import Header from './component/header';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {

    return (
      <div className="App" data-test="appComponent">
        <Header />
      </div>
    );
  }
}

export default App;
