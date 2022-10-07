import React, { useEffect, useState } from "react";
import Inputfield from "../Inputfield/Inputfield";
import ListItems from "../ListItems/ListItems";
import classes from "./Header.module.scss";
import { ToDoProperties } from "./type";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const Header: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");

  //Getting Data From Local Storage
  const getACtiveDataFromLocalStorage = (): ToDoProperties[] => {
    const data = localStorage.getItem("toDoLists");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  //ToDoProperties is the interface containing all the properties for toDoList
  const [toDoList, setToDoList] = useState<ToDoProperties[]>(
    getACtiveDataFromLocalStorage()
  );

  //Setting Data to localstorage
  useEffect(() => {
    localStorage.setItem("toDoLists", JSON.stringify(toDoList));
  }, [toDoList]);

  const getCompletedDataFromLocalStorage = (): ToDoProperties[] => {
    const completedata = localStorage.getItem("completedToDoList");
    if (completedata) {
      return JSON.parse(completedata);
    } else {
      return [];
    }
  };

  // state variables to keep track of completed and not completed
  const [completedTasks, setCompletedTasks] = useState<ToDoProperties[]>(
    getCompletedDataFromLocalStorage()
  );

  useEffect(() => {
    localStorage.setItem("completedToDoList", JSON.stringify(completedTasks));
  }, [completedTasks]);

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

      //After adding the thing to todolist we make sure to mark the field as empty
      setToDo("");
    }
  };

  const dragEnd = (result: DropResult): void => {
    const { source, destination } = result;
    //if droppped location is empty space
    if (!destination) return;

    //if drag and drop position is same
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = toDoList,
      complete = completedTasks;

    if (source.droppableId === "ToDosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "ToDosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setToDoList(active);
    localStorage.setItem("toDoLists", JSON.stringify(active));
    let crossedResult = complete.map((val) => {
      if (val.isDone === false) {
        return { ...val, isDone: !val.isDone };
      }
      return val;
    });
    setCompletedTasks(crossedResult);
    localStorage.setItem("completedToDoList", JSON.stringify(completedTasks));
  };

  return (
    <DragDropContext onDragEnd={dragEnd}>
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
          <ListItems
            toDoList={toDoList}
            setToDoList={setToDoList}
            completedTasks={completedTasks}
            setCompletedTasks={setCompletedTasks}
          />
        </div>
      </>
    </DragDropContext>
  );
};

export default Header;
