import React from 'react';
import sudoku from 'sudoku-umd';
import Tile from './Tile';
import App from '../App';

 class Board extends React.Component {
  constructor(props) {
    super(props);
  }

 

  render() {
    
      return (
        <div>
          {this.props.value.map((a,i) => {
            const readOnly = (this.value !== '.');
            return <Tile key = {i} index = {i} value = {a} onChange = {this.props.onValueChange} />
          })}
       </div>
      );
    }
}

export default Board;