import React, { Component } from 'react';
import {DropdownMultiple, Dropdown} from 'reactjs-dropdown-component';


class Debuff extends Component {
  state = {
    location: [
      {
        id: 0,
        title: 'New York',
        selected: false,
        key: 'location'
      },
      {
        id: 1,
        title: 'Dublin',
        selected: false,
        key: 'location'
      },
      {
        id: 2,
        title: 'Istanbul',
        selected: false,
        key: 'location'
      }
    ],
    fruit: [
      {
        id: 0,
        title: 'Apple',
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
        title: 'Strawberry',
        selected: false,
        key: 'fruit'
      }
    ]
  }
  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    });
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
  resetThenSet = (id, key) => {
  let temp = JSON.parse(JSON.stringify(this.state[key]));
  temp.forEach(item => item.selected = false);
  temp[id].selected = true;
  this.setState({
    [key]: temp
  });
}
}

export default Debuff;