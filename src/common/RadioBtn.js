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
      <div className="flex justify-between items-center mb-0.5 gap-x-4">
        <label htmlFor={label} className="text-sm">
          {label}
        </label>
        {formik.errors.gender && formik.touched.gender && (
          <label htmlFor={label} className="text-sm text-red-600">
            {formik.errors.gender}
          </label>
        )}
      </div>
    </div>
  );
};

export default RadioBtn;
