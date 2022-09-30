import ToDoCard from "../ToDoCard/ToDoCard";
import { ListItemsProps } from "./types";
import classes from "./ListItems.module.scss";
import { Droppable } from "react-beautiful-dnd";

const ListItems: React.FC<ListItemsProps> = ({
  toDoList,
  setToDoList,
  completedTasks,
  setCompletedTasks,
}) => {
  return (
    <>
      <div className={`${classes.listItemContainer}`}>
        <Droppable droppableId="ToDosList">
          {(provided) => (
            <div
              className={`${classes.toDoCard}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className={`${classes.toDoHeading}`}>To Be Done</span>
              {toDoList.map((todos, index) => (
                <ToDoCard
                  index={index}
                  todos={todos}
                  key={todos.id}
                  toDoList={toDoList}
                  setToDoList={setToDoList}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="ToDosCompleted">
          {(provided) => (
            <div
              className={`${classes.toDoCard} ${classes.completed} `}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className={`${classes.toDoHeading}`}>Done</span>
              {completedTasks.map((todos, index) => (
                <ToDoCard
                  index={index}
                  todos={todos}
                  key={todos.id}
                  toDoList={completedTasks}
                  setToDoList={setToDoList}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default ListItems;
