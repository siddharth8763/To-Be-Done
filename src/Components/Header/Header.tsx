import React,{useState} from "react"
import Inputfield from "../Inputfield/Inputfield"
import classes from "./Header.module.scss"
import { ToDoProperties } from "./type";

const Header:React.FC=()=> {
  const[toDo,setToDo]=useState<string>("");
  const[toDoList,setToDoList]=useState<ToDoProperties[]>([]);

  const handletoDoList=(e:React.FormEvent):void=>{
    e.preventDefault();

    //if there is something on todo(state var)
    if(toDo){
      setToDoList([...toDoList,{
        id:Date.now(),
        toDo,
        isDone:false
      }])
    }
  }

  return (
    <>
        <div className={`${classes.headerContainer}`}>
            <span className={`${classes.header}`}>To Be Done 📃📃</span>
            <Inputfield toDo={toDo} setToDo={setToDo} handletoDoList={handletoDoList}/>
        </div>
    </>
  )
}

export default Header