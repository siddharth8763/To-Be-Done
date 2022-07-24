import React from "react";

export interface Inputfieldprops{
    toDo:string,
    setToDo:React.Dispatch<React.SetStateAction<string>>,
    handletoDoList:(e:React.FormEvent)=> void
}