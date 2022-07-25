import {ToDoProperties} from "../Header/type"

export interface ListItemsProps{
    toDoList:ToDoProperties[],
    setToDoList:React.Dispatch<React.SetStateAction<ToDoProperties[]>>
}