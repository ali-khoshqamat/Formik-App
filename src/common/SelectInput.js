import Select from "react-select";

const SelectInput = ({ selectOptions, formik, name }) => {
  return (
    <div className="text-[#24292f] flex flex-col">
      {formik.errors[name] && formik.touched[name] && (
        <label className="text-sm text-red-600 mb-0.5 self-end">
          {formik.errors[name]}
        </label>
      )}
      <select
        name={name}
        {...formik.getFieldProps(name)}
        className="px-2.5 py-1.5 outline-none rounded mb-2.5"
      >
        {selectOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {/* <Select
        name={name}
        isMulti
        closeMenuOnSelect={false}
        // {...formik.getFieldProps(name)}
        value={formik.values.nationality}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        option={selectOptions}
        placeholder="Select Nationality..."
      />
      {formik.errors[name] && formik.touched[name] && (
        <label className="text-sm text-red-600">{formik.errors[name]}</label>
      )} */}
    </div>
  );
};

export default SelectInput;
