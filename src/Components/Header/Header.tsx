import React, { useState } from "react";
import Inputfield from "../Inputfield/Inputfield";
import ListItems from "../ListItems/ListItems";
import classes from "./Header.module.scss";
import { ToDoProperties } from "./type";

const Header: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  {
    /*ToDoProperties is the interface containing all the properties for toDoList*/
  }
  const [toDoList, setToDoList] = useState<ToDoProperties[]>([]);

  const handletoDoList = (e: React.FormEvent): void => {
    e.preventDefault();

    //if there is something on todo(state var)
    if (toDo) {
      setToDoList([
        ...toDoList,
        {
          id: Date.now(),
          toDo,
          isDone: false,
        },
      ]);
      {
        /*After adding the thing to todolist we make sure to mark the field as empty*/
      }
      setToDo("");
    }
  };

  return (
    <>
      <div className={`${classes.headerContainer}`}>
        <span className={`${classes.header}`}>To Be Done 📃📃</span>
        {/* Passing the state variable toDo, function to set state variable setToDo and the form handler 
            are passed as props to Inputfield component
            */}
        <Inputfield
          toDo={toDo}
          setToDo={setToDo}
          handletoDoList={handletoDoList}
        />
        <ListItems toDoList={toDoList} setToDoList={setToDoList} />
      </div>
    </>
  );
};

export default Header;
