import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    //handle submit on formik

    <form onSubmit={formik.handleSubmit}>
      <h2>three</h2>
      <label htmlFor="emails">Email Address</label>
      <input
      //?Be careful when using id ID===htmlFor
        id="emails"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
