import React from 'react';
import Tile from './Tile';




 class Board extends React.Component {
  constructor(props) {
    super(props);
    
}
  render() {
    
    {
      return (
        <div>
          {this.props.value.map(a => {
            if(a === '.')
            {
              return <Tile value={this.setState.value}/>
            }
            else if(a != '.')
            {
              return <Tile value={a}/>
            }
          })}
       </div>
      );
    }
   
  }
}

export default Board;