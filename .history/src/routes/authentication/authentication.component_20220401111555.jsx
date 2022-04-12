import SigninForm from "../../components/SigninForm/SigninForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>sign in with Google Popup</button>
      <SignupForm />
      <SigninForm />
    </div>
  );
};

export default Authentication;
