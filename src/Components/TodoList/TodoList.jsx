import React, { useState } from 'react';
import { addTodo,removeItem } from '../../fetchare/reduxSlider';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const state=useSelector((state)=>state);
  const dispatch=useDispatch();

  const [todo,setTodo]=useState("");

  const changeHandeler=(e)=>{
    setTodo(e.target.value)
  }

  console.log(state);

  return (
    <div>
      <input type="text" onChange={changeHandeler}/>
      <button onClick={()=>dispatch(addTodo({id:Math.round(Math.random()*100),item:todo,completed:false}))}>Add</button>
      <ul>
          {state.todo.map((item)=>(
            <div key={item.id}>
             <li key={item.id}>{item.item}</li>
             <button onClick={()=>dispatch(removeItem(item.id))}>Delet</button>
            </div>
            ))}
      </ul>
    </div>
  );
};

export default TodoList;