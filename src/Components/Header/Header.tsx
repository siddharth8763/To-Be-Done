import React from "react"
import Inputfield from "../Inputfield/Inputfield"
import classes from "./Header.module.scss"

const Header:React.FC=()=> {
  return (
    <>
        <div className={`${classes.headerContainer}`}>
            <span className={`${classes.header}`}>To Be Done 📃📃</span>
            <Inputfield/>
        </div>
    </>
  )
}

export default Header