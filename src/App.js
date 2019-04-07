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
    board: [].concat(arr),
    solved: sudoku.solve(arr.join(''))
  }
}

solve(){
  return sudoku.solve(this.state.initialBoard.join(''));
}

handleSubmit(){
  const currentBoard = this.state.board.join('');
  const { solved } = this.state;

  if(currentBoard === solved){
    alert('Congratulations');
  }
  else{
    alert("Try again");
  }
}

solveBoard(){
  this.setState({
    board: [...this.state.solved]
  })
}

onValueChange(tile, newValue){
  const { board } = this.state;

  board[tile.index] = newValue;

  this.setState( { board});
}
 
  render(){
    return(
      <div className="App">
      <h1>Sudoku</h1>
      <Board value={this.state.board} onValueChange = {this.onValueChange.bind(this)}/>
      <div className="buttons">
          <button onClick={() => this.handleSubmit()}>Check</button>
          <button>New Game</button>
          <button onClick= {() => this.solveBoard()}>Solve</button>
          <button>Restart</button>
      </div>
   </div>
    )
     
    }
 
  }
 
export default App