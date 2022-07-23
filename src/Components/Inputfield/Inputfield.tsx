import React from 'react'
import classes from "./Inputfield.module.scss"

const Inputfield:React.FC = () => {
  return (
    <>
      <form className={`${classes.formName}`}>
        <input type="input" placeholder='Add the things to be done' className={`${classes.inputField}`}/>
        <button className={`${classes.submitButton}`} type="submit">Add to list</button>
      </form>
    </>
  )
}

export default Inputfield