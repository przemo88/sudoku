import React from 'react';
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
          {this.props.board.map((value,i) => {
            return <Tile
             key = {i} 
             index = {i} 
             value = {value} 
             onChange = {this.props.onValueChange}
             readOnly = {this.props.initialBoard[i] !=='.'}
             breakline = { i % 9 == 0 ?  '<br/>' : value}
             />
          })}
       </div>
      );
    }
}

export default Board;