import SignInForm from "../../components/SignInForm/SignInForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <SignupForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
