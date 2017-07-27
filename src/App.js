import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 500,
      width: '100px',
      visibility: {}
    }
    this.getImage = this.getImage.bind(this);
    this.changeOpacity = this.changeOpacity.bind(this);
    this.buildTiles = this.buildTiles.bind(this);
  }
  
  getImage() {
    return("http://img.memey.com/1/3/funny-farm-fire.jpg")
  }

  changeOpacity(event) {
    event.target.style.opacity = 0;
  }

  buildTiles() {
    const tiles = [];

    for (let i=0; i<this.state.amount; i++) {
      tiles.push(<img src="grass.jpg" style={{ width: this.state.width }} onClick={e => this.changeOpacity(e)} />)
    }

    return tiles;
  }
  
  render() {
    return (
      <div className="App">
        {this.buildTiles()}
      </div>
    );
  }
}

export default App;
