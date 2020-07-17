import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./MyPosts.module.css";
import {
  requiredField,
  maxLength100,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const AddMyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.field} style={{ fontSize: "1.5rem" }}>
        <Field
          style={{
            borderRadius: "10px",
            width: "320px",
          }}
          name={"addMyPostForm"}
          component={Textarea}
          validate={[requiredField, maxLength100]}
          placeholder={"Post new message"}
        />
      </div>
      {/* <i className="far fa-smile" style={{ fontSize: "2rem" }} onClick={() => props.onSubmit()}></i>
      <Emoji {...props} />
      <button>Emoji</button> */}
      <div className={classes.addButton}>
        <button
          className="btn btn-primary btn-sm"
          style={{
            width: "320px",
            height: "40px",
            fontSize: "160%",
            marginTop: "20px",
            background: "#4A76A8",
            border: "#4A76A8"
          }}
        >
          Post message
        </button>
      </div>
    </form>
  );
};

export const AddMyPostFormRedux = reduxForm({ form: "addMyPostForm" })(
  AddMyPostForm
);
