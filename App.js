import React from 'react';
import './components/style.css'
import { useState } from 'react';
import ToDoLists from './components/ToDoLists';
const App = () => {
  const [inputList,setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) =>{
  setInputList(event.target.value);
  };
  const listOfItems =() =>{
    setItems((oldItems) => {
      return [...oldItems,inputList];
    }
    );
    setInputList("");
  };
  const deleteItem = (id)=>{
    console.log('deleted');
    setItems((oldItems)=>{
     return oldItems.filter((arrElem,index)=>{
     return index !==id;
     })
    })
}
  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
      <br/>
      <h1>ToDo Lists</h1>
      <input type='text' placeholder='Add a Items'
      value={inputList}
       onChange={itemEvent}/>
      <button onClick={listOfItems}> + </button>
      <ol>
        {/* <li>{inputLists}</li> */}
       { Items.map((itemval,index)  => { 
       return <ToDoLists key={index}
       id={index} text={itemval}
       onSelect ={deleteItem}
       />
       
        })}
      </ol>
    </div>
    </div>
    </>
  );
}

export default App;
