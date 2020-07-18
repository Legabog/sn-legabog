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
      <div className={classes.field}>
        <Field
          name={"addMyPostForm"}
          component={Textarea}
          validate={[requiredField, maxLength100]}
          placeholder={"Post new message"}
        />
      </div>
      <div className={classes.addButton}>
        <button>Post message</button>
      </div>
    </form>
  );
};

export const AddMyPostFormRedux = reduxForm({ form: "addMyPostForm" })(
  AddMyPostForm
);
