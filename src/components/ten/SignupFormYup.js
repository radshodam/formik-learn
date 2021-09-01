import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// ? Reducing Boilerplate
// ? The code above is very explici
// ?  t about exactly what Formik is doing. onChange ->
// ?  handleChange, onBlur -> handleBlur, and so o
// ? n. However, to save you time
// ? , useFormik() returns a helper method called formik.getFieldProps() to make it faster to wire up inputs.
// ? Given some field-level info,
// ?  it returns to you the exact group of onChange, onBlur, value, checked for a given field.
// ? You can then spread that on an input, select, or textarea.
// ? getFieldProp()
//** {...formik.getFieldProps('firstName')} */

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>ten</h1>
      <label htmlFor="firstName">First Name</label>
      {/* {...formik.getFieldProps('firstName')} */}
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
