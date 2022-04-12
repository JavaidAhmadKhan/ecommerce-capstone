import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="">
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
