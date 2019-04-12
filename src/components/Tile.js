import React from 'react';
import Board from './Board';
import styles from './Tile.scss';


class Tile extends React.Component{

     breakline(count){
        if(count == 9){
            return <br/>
        }
    }


  
    render(){

        const { value } = this.props;
        //const readOnly = (value !== '.');
    
       
        let count = 0;

        return(

            <div className='container'>
          
             <input type="number" min="1" max="9" className='item'
             value={value === "." ? "" : value}
   
             onChange = {(e) => {
                 this.props.onChange(this.props, e.target.value);
             }}
            
             />
         
             </div>
  
             )
        }
    }


export default Tile;