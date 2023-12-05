import { Formik, Field, Form,ErrorMessage  } from "formik";
import { object, string, number } from "yup";

const validSchema = object({
  email: string().email(),
  password: number().required(),
});
function Contact() {
  return (
    <>
      <Formik
        validationSchema={validSchema}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        <Form>
          <label>Email</label>
          <Field name="email" type="email" />
          <br />
          <p  style={{color: "red"}}> <ErrorMessage name="email" /></p>
          <br />
          <label>Password</label>
          <Field name="password" type="password" /> <br />
          <p  style={{color: "red"}}> <ErrorMessage  name="password" /></p>
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default Contact;
