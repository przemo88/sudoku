import React from 'react';
import Board from './Board';

class Tile extends React.Component{



    render(){
        return(
            <input type="number" min="1" max="9"/>
        )
    }

}

export default Tile;