import React, {useState} from 'react'
import s from './News.module.css';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

let News = (props) => {
  return (
    <div>
      <SignupForm />
    </div>
  )
}


export default News;
/*
// const validate = values => {
//   const errors = {};
//   if(!values.firstName) errors.firstName = 'Required.'
//   else if(values.firstName.length > 15) errors.firstName = 'Must be 15 characters or less.'
//   if(!values.lastName) errors.lastName = 'Required'
//   else if(values.lastName.length > 15) errors.lastName = 'Must be 15 characters or less'
//   if(!values.email) errors.email = 'Required'
//   else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address'
//   return errors
// }


// //Created empty context
// const FormikContext = React.createContext({});
//
// //
// export const Formik = ({children, ...props}) => {
//   const formikStateAndHelpers = useFormik(props);
//   return (
//     <FormikContext.Provider value={formikStateAndHelpers}>
//     {typeof children === 'function'
//     ? children(formikStateAndHelpers)
//     : children}
//     </FormikContext.Provider>
//   )
// }
const SignupForm = () => {
  // var [values, setValues]= useState({})

  // const formik = useFormik({
  //   // validate,
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  //   handleChange: event => {
  //     setValues(prevValues => ({
  //       ...prevValues,
  //       [event.target.name]: event.target.value
  //     }))
  //   },
  //   validateSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, 'Must be 15 characters or less')
  //       .required('Required'),
  //     lastName: Yup.string()
  //       .max(15, 'Must be 15 characters or less')
  //       .requred('Required'),
  //     email: Yup.string().email('Invalid email address').required('Required')
  //   })
  // });
  return ( <Formik
              initialValues={{ firstName: '', lastName: '', email: ''}}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                lastName: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required')
              })}
              onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400)
              }}

            >
              <Form>
                <label htmlFor="firstName">First name</label>

                <Field name="firstName" type="text" />

                <ErrorMessage name="firstName" />
                <br/>
                <label htmlFor="lastName">Last name</label>

                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />
                <br/>
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
                <button type="submit">Submit</button>
                <br/>
                <br/>

                <Field name="firstName" className="form-input" placeholder="Jane" />

                <Field name="message" as="textarea" className="form-textarea" />

                <Field name="colors" as="select" className="my-select">
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
              </Form>
    </Formik>
  );
};
*/

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

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
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
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <br/>

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <br/>

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <br/>

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>
          <br/>
          
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
