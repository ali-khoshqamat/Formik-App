const RadioBtn = ({ label, formik }) => {
  return (
    <div className="flex gap-x-1 ">
      <input
        type="radio"
        name="gender"
        id={label}
        value={label}
        onChange={formik.handleChange}
        checked={formik.values.gender === label}
      />
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
    </div>
  );
};

export default RadioBtn;
