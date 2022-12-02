const CheckBoxInput = ({ name, formik, checkBoxOption }) => {
  return (
    <div className="flex flex-col">
      {formik.errors[name] && formik.touched[name] && (
        <label htmlFor={name} className="text-sm text-red-600 mb-0.5">
          {formik.errors[name]}
        </label>
      )}
      <div className="flex gap-x-2.5">
        {checkBoxOption.map(({ label, value }) => (
          <div
            key={value}
            className="flex justify-between items-center gap-x-1"
          >
            <input
              type="checkbox"
              id={value}
              name={name}
              value={value}
              onChange={formik.handleChange}
              checked={formik.values[name].includes(value)}
            />
            <label htmlFor={value} className="text-sm">
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxInput;
