import ToDoCard from "../ToDoCard/ToDoCard";
import { ListItemsProps } from "./types";
import classes from "./ListItems.module.scss";

const ListItems: React.FC<ListItemsProps> = ({ toDoList, setToDoList }) => {
  return (
    <>
      <div className={`${classes.listItemContainer}`}>
        {toDoList.map((todos) => (
          <ToDoCard
            todos={todos}
            key={todos.id}
            toDoList={toDoList}
            setToDoList={setToDoList}
          />
        ))}
      </div>
    </>
  );
};

export default ListItems;
