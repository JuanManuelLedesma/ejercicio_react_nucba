import React, { useState } from 'react'
import { ToDoListButtonStyled, ToDoListContainerStyled, ToDoListInputStyled, ToDoListUlStyled} from './ToDoListStyles'
import { AiFillPlusCircle, AiFillDelete} from "react-icons/ai"



export const ToDoList = () => {
const [list, setList] = useState([])
const [input, setInput] = useState("")
const addTodo = (todo) =>{
    const newTodo = {
        id: Math.random(),
        todo: todo,
    }

//agregar todo a la lista
setList([...list, newTodo])

//borrar input
setInput("")
}

const deleteTodoList = () =>{
const newList = [];

setList(newList)

}
    
  return (
    <>
        <ToDoListContainerStyled>
            <ToDoListInputStyled type="text" placeholder='Agregue Tarea' value={input} onChange={(e) => setInput(e.target.value)}></ToDoListInputStyled>
            <ToDoListButtonStyled onClick={() => addTodo(input)}>
                <AiFillPlusCircle size="25px" color="white" cursor="pointer"/>
            </ToDoListButtonStyled>
            <ToDoListButtonStyled onClick={() => deleteTodoList()}>
                <AiFillDelete size="25px" color="white" cursor="pointer"/>
            </ToDoListButtonStyled>
        </ToDoListContainerStyled>
        <ToDoListUlStyled>
            {list.map((todo) => (
                <li key={todo.id}>
                    {todo.todo}
                </li>
            ))}
        </ToDoListUlStyled>
    </>
  )
}
