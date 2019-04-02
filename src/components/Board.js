import React from 'react';
import Tile from './Tile';

 class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: this.props.value
    }
}

onValueChange(tile, newValue){
  const { board } = this.state;

  board[tile.index] = newValue;

  this.setState( { board});
}
  render() {
    
      return (
        <div>
          {this.state.board.map((a,i) => {
            return <Tile key = {i} index = {i} value = {a} onChange = {this.onValueChange} />
          })}
       </div>
      );
    }
}

export default Board;