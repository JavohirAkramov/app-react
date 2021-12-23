import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';


const Login = () => {
  return <div>
    <h1>Login</h1>
    <SignupForm />
  </div>
};

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SignupForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          login: '',
          password: '',
          rememberMe: ''
        }}
        validationSchema={Yup.object({
          login: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Login"
            name="login"
            type="text"
            placeholder="login"
          />
          <br/>

          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="password"
          />
          <br/>

          <MyCheckbox name="rememberMe">
            remember me
          </MyCheckbox>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
//alhamdulillah
