import React, { Component } from 'react';
import Dropdown from './components/Dropdown';
import target from './img/frame_3.png';
import sunder from './img/sunder.png';
import './App.css';
class App extends Component {
    constructor(){
    super()
    this.state = {

      fruit: [
        {
          id: 0,
          title: "Sunder",
          img: {src: {sunder}},
          selected: false,
          key: 'fruit'
        },
        {
          id: 1,
          title: 'Orange',
          selected: false,
          key: 'fruit'
        },
        {
          id: 2,
          title: 'Grape',
          selected: false,
          key: 'fruit'
        },
        {
          id: 3,
          title: 'Pomegranate',
          selected: false,
          key: 'fruit'
        },
        {
          id: 4,
          title: 'Strawberry',
          selected: false,
          key: 'fruit'
        }
      ]
    }
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render() {
    return (
      <div className="App">
        <div className= "App-header">
        <img src={target} className="App-logo" alt="logo" />
        </div>
        <div className="wrapper">
          <Dropdown
            title="Debuff"
            list={this.state.fruit}
            resetThenSet={this.resetThenSet}
          />
        </div>
        
      </div>
    );
  }
}

export default App;