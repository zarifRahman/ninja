import React, { Component } from 'react';
import Ninja from './Ninja';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name:"Ryu", age:30, belt:"black",id:1},
      {name:"Yoshi", age:20, belt:"green",id:2},
      {name:"Naruto", age:24, belt:"pink",id:3},
    ]
  }

  addNinja = (ninja) => {
   ninja.id = Math.random();
   let ninjas = [...this.state.ninjas, ninja];
   this.setState({
     ninjas: ninjas
   })
  }

  render() {
    return (
      <div className="App">
        <Ninja ninjas={this.state.ninjas} />
        <AddNinja addingNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
