import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { ToDoCardTypes } from "./types";
import classes from "./ToDoCard.module.scss";

const ToDoCard: React.FC<ToDoCardTypes> = ({
  todos,
  toDoList,
  setToDoList,
}) => {
  const [editState, setEditState] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(todos.toDo);

  const handleDone = (id: number): void => {
    setToDoList(
      toDoList.map((todos) =>
        todos.id === id ? { ...todos, isDone: !todos.isDone } : todos
      )
    );
  };

  const handleDelete = (id: number): void => {
    setToDoList(toDoList.filter((todos) => todos.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number): void => {
    e.preventDefault();

    setToDoList(
      toDoList.map((todos) =>
        todos.id === id ? { ...todos, toDo: editToDo } : todos
      )
    );
    setEditState(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editState]);

  console.log(editToDo);

  return (
    <>
      <form
        className={`${classes.tdcfromContainer}`}
        onSubmit={(e) => handleEdit(e, todos.id)}
      >
        {editState ? (
          <input
            value={editToDo}
            onChange={(e) => setEditToDo(e.target.value)}
            className={`${classes.tdcSingleText}`}
          />
        ) : todos.isDone ? (
          <s className={`${classes.tdcSingleText}`}>{todos.toDo}</s>
        ) : (
          <span className={`${classes.tdcSingleText}`}>{todos.toDo}</span>
        )}

        <div>
          <span
            className={`${classes.icons}`}
            onClick={() => {
              if (!editState && !todos.isDone) {
                setEditState(!editState);
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span
            className={`${classes.icons}`}
            onClick={() => handleDelete(todos.id)}
          >
            <AiFillDelete />
          </span>
          <span
            className={`${classes.icons}`}
            onClick={() => handleDone(todos.id)}
          >
            <MdDone />
          </span>
        </div>
      </form>
    </>
  );
};

export default ToDoCard;
