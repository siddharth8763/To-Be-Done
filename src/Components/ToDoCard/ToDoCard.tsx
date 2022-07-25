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
  return (
    <>
      <form className={`${classes.tdcfromContainer}`}>
        <span className={`${classes.tdcSingleText}`}>{todos.toDo}</span>
        <div>
          <span className={`${classes.icons}`}>
            <AiFillEdit />
          </span>
          <span className={`${classes.icons}`}>
            <AiFillDelete />
          </span>
          <span className={`${classes.icons}`}>
            <MdDone />
          </span>
        </div>
      </form>
    </>
  );
};

export default ToDoCard;
