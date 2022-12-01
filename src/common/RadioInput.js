const RadioInput = ({ name, radioOptions, formik }) => {
  return (
    <div className="flex gap-x-2.5">
      {radioOptions.map(({ label, value }) => (
        <div key={value} className="flex gap-x-1 ">
          <input
            id={value}
            type="radio"
            name={name}
            value={value}
            onChange={formik.handleChange}
            checked={formik.values.gender === value}
          />
          <div className="flex justify-between items-center mb-0.5 gap-x-4">
            <label htmlFor={value} className="text-sm">
              {label}
            </label>
            {formik.errors[name] && formik.touched[name] && (
              <label htmlFor={value} className="text-sm text-red-600">
                {formik.errors[name]}
              </label>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
