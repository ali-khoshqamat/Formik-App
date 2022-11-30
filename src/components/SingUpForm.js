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

const SingUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
  });

  return (
    <section className="w-[40rem] bg-[#24292f] text-white p-5 flex flex-col gap-y-5 rounded-lg">
      <h2 className="font-bold text-center">SingUp Form</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2.5">
        <div className="flex flex-col">
          <label className="text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Email</label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Password</label>
          <input
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
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
