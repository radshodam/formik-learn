import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    //handle submit on formik
    //? ( firstName-> formik.values.firstName) */
    //?Be careful when using id ID===htmlFor

    <form onSubmit={formik.handleSubmit}>
      <h1>four</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
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

//! const [values, setValues] = React.useState({});

// ! const handleChange = event => {
//!    setValues(prevValues => ({
//!      ...prevValues,
//!      // we use the name to tell Formik which key of `values` to update
// !     [event.target.name]: event.target.value
// !   });
//  !}
//? ------------------- usestate Up convert down on formik ------------------- */
// **const formik = useFormik({
// **  initialValues: {
// **    firstName: "",
// **    lastName: "",
// **    email: "",
// **  },
// **  onSubmit: (values) => {
// **    alert(JSON.stringify(values, null, 2));
// **  },
// **});
