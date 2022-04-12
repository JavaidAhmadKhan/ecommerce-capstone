import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response)
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;