import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Logo from "../../assets/images/siteLogo.png";
import Pill from "../../assets/images/pill.png";
import Eye from "../../assets/icons/eye-off.svg";
import EyeOn from "../../assets/icons/eye-on.svg";
import s from "./LoginForm.module.scss";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(7, "Must contain 7 characters or more")
    .required("Required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const nodeRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      // loginAPI(values);
      console.log(values);
      actions.resetForm({ values: { email: "", password: "" } });
      navigate("/");
    },
    validationSchema: LoginSchema,
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <section>
      <div className="sectionContainer">
        <div className={s.logoWrapper}>
          <img src={Logo} alt="logo" />
          <p>E-Pharmacy</p>
        </div>
        <div className={s.desktopWrapper}>
          <h1 className={s.title}>
            Your medication,
            <br />
            <img src={Pill} alt="pill" />
            delivered Say goodbye to all{" "}
            <span className={s.highlighter}>your healthcare</span> worries with
            us
          </h1>
          <form
            className={s.formWrapper}
            ref={nodeRef}
            onSubmit={formik.handleSubmit}
          >
            <label className={s.emailInputWrapper}>
              <input
                className={s.emailInput}
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <span className={s.error}>{formik.errors.email}</span>
              )}
            </label>
            <label className={s.passwordInputWrapper}>
              <input
                className={s.passwordInput}
                id="password"
                name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <button
                className={s.passwordShownButton}
                type="button"
                onClick={togglePassword}
              >
                <img
                  src={passwordShown ? Eye : EyeOn}
                  alt="toggle show password"
                />
              </button>
              {formik.errors.password && formik.touched.password && (
                <span className={s.error}>{formik.errors.password}</span>
              )}
            </label>
            <button className={s.submitButton} type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
      <div className={s.decoration} />
    </section>
  );
};

export default LoginForm;
