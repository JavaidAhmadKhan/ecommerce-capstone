import "./spinner.styles.scss";

const Spinner = () => {
  return (
    <div className="spinnerOverlay">
      <div className="spinnerContainer">
        <h1>.</h1>
      </div>
    </div>
  );
};

export default Spinner;
