import React from 'react';
import Board from './Board';
import styles from './Tile.scss';


class Tile extends React.Component{

     breakline(index){
        if(index % 9 == 0){
            alert('</br>')
        }
    }


  
    render(){

        const { value, readOnly, index, breakline } = this.props;

    
       
        let count = 0;

        return(

            <div className='container'>
          
             <input type="number" min="1" max="9" className='item'
             value={value === "." ? "" : value}
             disabled={readOnly}
   
             onChange = {(e) => {
                 this.props.onChange(this.props, e.target.value);
             }}
            
             />
          
             </div>
    
             )
        }
    }


export default Tile;