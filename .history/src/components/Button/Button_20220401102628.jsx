/*
default button
inverted button
google sign in button
*/

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children }) => {
  return <button className="button-container">{children}</button>;
};

export default Button;
