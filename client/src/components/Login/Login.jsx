import React from "react";
import { reduxForm, Field } from "redux-form";
import classes from "./Login.module.css";
import { requiredField, maxLength20 } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../.././redux/auth-reducer";
import { Redirect } from "react-router-dom";
import Img from "../../assets/images/user.png";
import cls from "../common/FormsControls/FormsControls.module.css";
import map_svg from "../../assets/images/map.svg"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.field1}>
        <Field
          name={"email"}
          placeholder={"Email"}
          component={Input}
          validate={[requiredField, maxLength20]}
          autoComplete="off"
        />
      </div>
      <div className={classes.field2}>
        <Field
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div className={classes.field3}>
        <Field name={"rememberMe"} type={"checkbox"} component={Input} />
        <p>Remember me</p>
      </div>
      {props.error && (
        <div>
          <div className={cls.formSummaryError}>
            <div>
              <svg>
                <use href={map_svg + "#report_login"}/>
              </svg>
              <span>Warning!!!</span>
            </div>
            <div>
              <h3>{props.error}</h3>
            </div>
          </div>
        </div>
      )}

      {props.captchaUrl && (
        <div>
          <div className={classes.captchaImg}>
            <img src={props.captchaUrl} alt="description" />
          </div>
          <div className={classes.captchaInput}>
            <Field
              name={"captcha"}
              placeholder={"Symbols from image"}
              component={Input}
              validate={[requiredField]}
              autoComplete="off"
            />
          </div>
        </div>
      )}
      <div className={classes.formButton}>
        <button>login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={classes.login}>
      <div className={classes.signIn}>
        <h2>Sign in</h2>
      </div>
      <div className={classes.img}>
        <img src={Img} alt="description" />
      </div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    captchaUrl: state.authReducer.captchaUrl,
  };
};

export default connect(mapStateToProps, { login })(Login);
