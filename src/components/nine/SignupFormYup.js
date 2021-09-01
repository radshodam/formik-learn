import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// ? Again, Yup is 100% optional. However, we suggest giving it a try. As you can see above,
// ?  we expressed the exact same validation function with just 10 lines of code instead of 30.
// ?  One of Formik’s core design principles is to help you stay organized.
// ?  Yup definitely helps a lot with this--schemas are extremely expressive,
// ?  intuitive (since they mirror your values), and reusable.
// ?  Whether or not you use Yup,
// ?  we highly recommended you share commonly used validation methods across your application.
// ?  This will ensure that common fields (e.g. email, street addresses, usernames, phone numbers, etc.)
// ?  are validated consistently and result in a better user experience.
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    //?YUP
    
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
      <h1>ninie yup</h1>
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
