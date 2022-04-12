const FormInput = ({ label, changeHandler }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        required
        onChange={changeHandler}
        name="displayName"
        value={displayName}
      />
    </div>
  );
};

export default FormInput;
