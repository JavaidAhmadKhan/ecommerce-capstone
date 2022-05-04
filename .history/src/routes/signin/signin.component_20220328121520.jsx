import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGooglePopup();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>
        sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
