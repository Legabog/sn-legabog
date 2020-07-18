import React from "react";
import classes from "./FormsControls.module.css";
import error from "../../../assets/images/icons/error.svg"

const FormControl = ({ input, child, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={classes.formControll + " " + (hasError ? classes.error : "")}
    >
      <div>{props.children}</div>
      {hasError && (
        <span>
          <img src={error} alt="error"></img> {meta.error}
        </span>
      )}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, child, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, child, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
