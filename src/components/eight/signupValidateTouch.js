import React from "react";
import { useFormik } from "formik";
import { validate } from "./validate";
//? While our form works, and our users see each error,
// ? it’s not a great user experience for them. Since our validation
// ? function runs on each keystroke against the entire form’s values,
//  ? our errors object contains all validation errors at any given moment. In our component,
//  ?  we’re just checking if an error exists and then immediately showing it to the user.
//  ?   This is awkward since we’re going to show error messages for fields that the user hasn’t even visited yet.
//  ?    Most of the time, we only want to show a field’s error message after our user is done typing in that field.
//
//**touched => formik.touched.email =>Does not show an error until it is finished 
//(does not show an error at the same time, shows later) */

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>eight</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
