import React from 'react';
import Board from './Board';

class Tile extends React.Component{



    render(){

        const { value } = this.props;

        return(
            <input type="number" min="1" max="9" value={value}/>
        )
    }

}

export default Tile;