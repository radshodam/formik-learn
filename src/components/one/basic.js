import React from "react";
import { Formik } from "formik";

const Basic = () => (
  <div>
    <h1>one basic!</h1>
    <Formik
      //**Initial value
      initialValues={{ email: "", password: "" }}
      //**validate
      validate={(values) => {
        //?error
        const errors = {};
        //?if error
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
          // console.log(values); //{email: "mohamadzareai@gmail.com", password: "cece"}
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        // props on FORMIK
        /* and other goodies */
        // Touched fields. Each key corresponds to a field that has been touched/visited.
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
/* Reducing boilerplate way component two
The code above is very explicit about exactly what Formik is doing.
onChange -> handleChange, onBlur -> handleBlur, and so on.
However, to save you time, Formik comes with a few extra components to make life easier and less verbose:
<Form />, <Field />, and <ErrorMessage />.
They use React context to hook into the parent <Formik /> state/methods. */
