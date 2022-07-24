import React from 'react'
import classes from "./Inputfield.module.scss"
import { Inputfieldprops } from './types'

const Inputfield:React.FC<Inputfieldprops> = ({toDo,setToDo,handletoDoList}) => {
  return (
    <>
      <form className={`${classes.formName}`} onSubmit={handletoDoList}>
        <input 
        type="input" 
        placeholder='Add the things to be done'
        value={toDo}
        onChange={(e)=>setToDo(e.target.value)} 
        className={`${classes.inputField}`}
        />
        <button className={`${classes.submitButton}`} type="submit">Add to list</button>
      </form>
    </>
  )
}

export default Inputfield