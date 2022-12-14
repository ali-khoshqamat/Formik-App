const RadioInput = ({ name, radioOptions, formik }) => {
  return (
    <div className="flex flex-col">
      {formik.errors[name] && formik.touched[name] && (
        <label htmlFor={name} className="text-sm text-red-600 mb-0.5">
          {formik.errors[name]}
        </label>
      )}
      <div className="flex gap-x-2.5">
        {radioOptions.map(({ label, value }) => (
          <div
            key={value}
            className="flex justify-between items-center gap-x-1"
          >
            <input
              type="radio"
              id={value}
              name={name}
              value={value}
              onChange={formik.handleChange}
              checked={formik.values[name] === value}
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

export default RadioInput;
