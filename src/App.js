import React, { Component } from 'react';

import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div className="AppDiv">
        <Header/>

        
        
        {
          //属性有一个特殊的children
          this.props.children
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
