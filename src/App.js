import React from 'react';
import sudoku from 'sudoku-umd';
import Board from './components/Board';

let tab = sudoku.generate('easy');
let arr = tab.split("");


class App extends React.Component{

 constructor(){
   super();

   this.state = {
    initialBoard : arr,
    board: ''
  }
}

 
  render(){
    return(
      <div className="App">
      <h1>Sudoku</h1>
      <Board value={this.state.initialBoard}/>
      <div className="buttons">
          <button>Check</button>
          <button>New Game</button>
          <button>Solve</button>
          <button>Restart</button>
      </div>
   </div>
    )
     
    }
 
  }
 
export default App