import { ToDoProperties } from "../Header/type";
export interface ToDoCardTypes {
  todos: ToDoProperties;
  toDoList: ToDoProperties[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDoProperties[]>>;
  index: number;
}
