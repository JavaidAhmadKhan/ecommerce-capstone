import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const [formFields, setFormFields] = useState(defaultFormFields);
const { displayName, email, password, confirmPassword } = formFields;

const SignupForm = () => {
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <label>Confirm Password</label>
        <input type="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
