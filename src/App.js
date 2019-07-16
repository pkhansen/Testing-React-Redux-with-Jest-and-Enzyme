import React, { Component } from 'react';

import './app.scss';

import Header from './component/header';
import Headline from './component/headline';



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
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" />
        </section>
      </div>
    );
  }
}

export default App;
