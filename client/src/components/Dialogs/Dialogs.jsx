import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { requiredField, maxLengthCreator } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let DialogsElements = props.DialogsData.map((ell) => (
    <DialogItem
      key={ell.id}
      name={ell.name}
      id={ell.id}
      imgpath={ell.avatarpath}
    />
  ));

  let MessagesElements = props.MessagesData.map((ell) => (
    <Message key={ell.id} message={ell.message} id={ell.id} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{DialogsElements}</div>
      <div className={s.messages}>
        <div>{MessagesElements}</div>

        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
          validate={[requiredField, maxLength50]}
        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
