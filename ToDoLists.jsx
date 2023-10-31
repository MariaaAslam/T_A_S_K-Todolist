import React from 'react';
import {FaHome, FaTimes} from 'react-icons/fa';
const ToDoLists = (props) => {
    
   
    return( 
        <> 
        <div className='todo_style'>
            <div className='FaTimes'>
            <FaTimes onClick={
                () =>{
                    props.onSelect(props.id);
                }
            }/>
            </div>
          
        <li> {props.text} </li>
        </div>
       </>
        
    )
};

export default ToDoLists;
