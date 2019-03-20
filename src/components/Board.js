import React from 'react';
import sudoku from 'sudoku-umd';
import Tile from './Tile';
import App from '../App';


let tab = sudoku.generate('easy');
let arr = tab.split("");
console.log();

 class Board extends React.Component {
  constructor(props) {
    super(props);
    
}
  render() {
    return (
      <>
        {arr.map(a => {
          return <Tile/>
        })}
     </>
    );
  }
}

export default Board;