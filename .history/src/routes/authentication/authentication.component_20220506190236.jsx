import SignInForm from "../../components/SignInForm/SignInForm";
import SignupForm from "../../components/SignupForm/SignupForm";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authesntication-container">
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;
