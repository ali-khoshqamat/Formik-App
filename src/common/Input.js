const Input = ({ label, name, type, formik }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-0.5 gap-x-4">
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
        {formik.errors[name] && formik.touched[name] && (
          <label htmlFor={name} className="text-sm text-red-600">
            {formik.errors[name]}
          </label>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        {...formik.getFieldProps(name)}
        className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
      />
    </div>
  );
};

export default Input;
