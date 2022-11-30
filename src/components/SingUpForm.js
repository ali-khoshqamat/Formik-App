import { useFormik } from "formik";

//! Formik:
// 1. managing state
// 2. handling form submission
// 3. validation - error message

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  let errors = {};
  !values.name && (errors.name = "Name is Required!");
  !values.email && (errors.email = "Eamil is Required!");
  !values.password && (errors.password = "Password is Required!");
  return errors;
};

const SingUpForm = () => {
  const formik = useFormik({ initialValues, onSubmit, validate });

  console.log("visited fields", formik.touched);

  return (
    <section className="w-[40rem] bg-[#24292f] text-white p-5 flex flex-col gap-y-5 rounded-lg">
      <h2 className="font-bold text-center">SingUp Form</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2.5">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-0.5">
            <label className="text-sm">Name</label>
            {formik.errors.name && formik.touched.name && (
              <label className="text-sm text-red-600">
                {formik.errors.name}
              </label>
            )}
          </div>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-0.5">
            <label className="text-sm">Eamil</label>
            {formik.errors.email && formik.touched.email && (
              <label className="text-sm text-red-600">
                {formik.errors.email}
              </label>
            )}
          </div>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-0.5">
            <label className="text-sm">Password</label>
            {formik.errors.password && formik.touched.password &&(
              <label className="text-sm text-red-600">
                {formik.errors.password}
              </label>
            )}
          </div>
          <input
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
          />
        </div>
        <button
          type="submit"
          className="font-bold text-sm py-1.5 px-5 mt-3.5 w-min self-center border border-white rounded-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default SingUpForm;
