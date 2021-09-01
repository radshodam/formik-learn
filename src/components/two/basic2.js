// Render Prop => short code
import React from "react";
//? use props formik
import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic2 = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      //**Initial value

      initialValues={{ email: "", password: "" }}
      //**validate

      validate={(values) => {
        //?error

        const errors = {};
        if (!values.email) {
          //if null

          errors.email = "Required";
        } else if (
          //?regular expression email

          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          //!messages error

          errors.email = "Invalid email address";
        }
        //?return error

        return errors;
      }}
      //?handle sumbit(values and{setSubmit})

      onSubmit={(values, { setSubmitting }) => {
        //?setTimeoutfor show result

        setTimeout(() => {
          //?alert for test
          console.log(values); //{email: "mohamadzareai@gmail.com", password: "cece"}

          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        //isSubmitting and Field and Error.... on formik for reducer
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic2;
