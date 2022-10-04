import React, { useRef } from "react";
import classes from "./Inputfield.module.scss";
import { Inputfieldprops } from "./types";

const Inputfield: React.FC<Inputfieldprops> = ({
  toDo,
  setToDo,
  handletoDoList,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        className={`${classes.formName}`}
        onSubmit={(e) => {
          handletoDoList(e);
          inputRef.current?.blur();
        }}
      >
        <input
          type="input"
          placeholder="Things To Be Done"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          className={`${classes.inputField}`}
        />
        <button className={`${classes.submitButton}`} type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Inputfield;
