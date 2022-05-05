import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props.input} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
