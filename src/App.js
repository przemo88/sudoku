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
    board: [].concat(arr)
  }
}

handleSubmit(board) {
  alert(board.value);
  //event.preventDefault();
}
 
  render(){
    return(
      <div className="App">
      <h1>Sudoku</h1>
      <Board value={this.state.board}/>
      <div className="buttons">
          <button onClick={this.handleSubmit}>Check</button>
          <button>New Game</button>
          <button>Solve</button>
          <button>Restart</button>
      </div>
   </div>
    )
     
    }
 
  }
 
export default App