import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter:0,sms:""};
    this.add=this.add.bind(this);
    this.rest=this.rest.bind(this);
  }

  add(){
    var newCounter=this.state.counter+1;
    this.setState({
      counter:newCounter,
      sms:""
    })
  }
  rest(){
    if(this.state.counter>0){
      var newCounter=this.state.counter-1;
      this.setState({
        counter:newCounter
      })
    }
    else{
      this.setState({
        sms:"The counter can't go below zero"
      })
    }

  }
  render() {
    return (
      <div className="App" data-test='component-app'>
        <h1  data-test='counter-display'>COUNTER: {this.state.counter}</h1>
        <div className='text-center'>
        <button onClick={this.add}  data-test='increment-button' >Increment</button>
        <button onClick={this.rest} data-test='decrement-button' >Decrement</button>
        <h1 data-test='sms-display'>{this.state.sms}</h1>
        </div>
      </div>
    );
  }
}

export default App;
