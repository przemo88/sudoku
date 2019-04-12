import React from 'react';
import sudoku from 'sudoku-umd';
import Tile from './Tile';
import App from '../App';
import styles from './Board.scss';

 class Board extends React.Component {
  constructor(props) {
    super(props);
  }

 

  render() {
    
      return (
        <div className="container">
          {this.props.value.map((a,i) => {
              
            return <Tile key = {i} index = {i} value = {a} onChange = {this.props.onValueChange} />
          })}
       </div>
      );
    }
}

export default Board;