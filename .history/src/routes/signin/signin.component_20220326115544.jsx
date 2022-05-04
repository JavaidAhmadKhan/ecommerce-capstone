import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
  }
  return (
    <div>
      <h1>Sign In</h1>
    </div>
  );
};

export default SignIn;
