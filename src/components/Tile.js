import React from 'react';
import Board from './Board';

class Tile extends React.Component{



    render(){

        const { value } = this.props;
        const readOnly = (value !== '.');

        return(
        <input type="number" min="1" max="9" readonly
             value={value === "." ? " " : value}
             onChange = {(e) => {
                 this.props.onChange(this.props, e.target.value);
             }}
             />
        )
    }

}

export default Tile;