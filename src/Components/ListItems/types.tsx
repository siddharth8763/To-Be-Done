import { ToDoProperties } from "../Header/type";

export interface ListItemsProps {
  toDoList: ToDoProperties[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDoProperties[]>>;
  completedTasks: ToDoProperties[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<ToDoProperties[]>>;
}
