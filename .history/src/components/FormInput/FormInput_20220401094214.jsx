const FormInput = ({ label, changeHandler }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        required
        onChange={handleChange}
        name="displayName"
        value={displayName}
      />
    </div>
  );
};

export default FormInput;
