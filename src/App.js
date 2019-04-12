import React from 'react';
import sudoku from 'sudoku-umd';
import Board from './components/Board';
import styles from './components/Buttons.scss';


function generateTable(){
  let tab = sudoku.generate('easy');
  let arr = tab.split("");
  console.log(tab);
  return arr;
}

class App extends React.Component{



 constructor(){
  super();

  let arr = generateTable();

   this.state = {
    initialBoard : arr,
    board: [].concat(arr),
    solved: sudoku.solve(arr.join('')),
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

restartBoard(){
  this.setState({
    board: [...this.state.initialBoard]
  })
}

onValueChange(tile, newValue){
  const { board } = this.state;

  board[tile.index] = newValue;

  this.setState( { board});
}

newGame(){

  let arr = generateTable();

  this.setState({
    board: [].concat(arr)
  })
}
 
  render(){
    return(
      <div className="App">
      <h1>Sudoku</h1>
      <Board value={this.state.board} onValueChange = {this.onValueChange.bind(this)}/>
      <div className="buttons">
          <button onClick= {() => this.handleSubmit()} className="btn">Check</button>
          <button onClick= {() => this.newGame()} className="btn">New Game</button>
          <button onClick= {() => this.solveBoard()} className="btn">Solve</button>
          <button onClick= {()=> this.restartBoard()} className="btn">Restart</button>
      </div>
   </div>
    )
     
    }
 
  }
 
export default App