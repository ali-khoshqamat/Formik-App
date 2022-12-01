import * as Yup from "yup";
import { useFormik } from "formik";

//! Formik:
// 1. managing state
// 2. handling form submission
// 3. validation - error message

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required!")
    .min(8, "Name length must be at least 8 characters!"),
  email: Yup.string()
    .email("Invalid Eamil Format!")
    .required("Email is Required!"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required!")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number!")
    .nullable(),
  password: Yup.string()
    .required("Password is Required!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string()
    .required("Password Confirmation is Required!")
    .oneOf([Yup.ref("password"), null], "Passwords must Match!"),
});

const SingUpForm = () => {
  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  //   console.log("visited fields", formik.touched);

  return (
    <section className="w-[40rem] bg-[#24292f] text-white p-5 flex flex-col gap-y-5 rounded-lg">
      <h2 className="font-bold text-center">SingUp Form</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2.5">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-0.5 gap-x-4">
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
            {...formik.getFieldProps("name")}
            className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-0.5 gap-x-4">
            <label className="text-sm">Eamil</label>
            {formik.errors.email && formik.touched.email && (
              <label className="text-sm text-red-600">
                {formik.errors.email}
              </label>
            )}
          </div>
          <input
            type="email"
            name="email"
            {...formik.getFieldProps("email")}
            className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-0.5 gap-x-4">
            <label className="text-sm">Phone Number</label>
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <label className="text-sm text-red-600">
                {formik.errors.phoneNumber}
              </label>
            )}
          </div>
          <input
            type="text"
            name="phoneNumber"
            {...formik.getFieldProps("phoneNumber")}
            className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-0.5 gap-x-4">
            <label className="text-sm">Password</label>
            {formik.errors.password && formik.touched.password && (
              <label className="text-sm text-red-600">
                {formik.errors.password}
              </label>
            )}
          </div>
          <input
            type="text"
            name="password"
            {...formik.getFieldProps("password")}
            className="py-1.5 px-2.5 text-[#24292f] border border-gray-300 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-0.5 gap-x-4">
            <label className="text-sm">Password Confirmation</label>
            {formik.errors.passwordConfirmation &&
              formik.touched.passwordConfirmation && (
                <label className="text-sm text-red-600">
                  {formik.errors.passwordConfirmation}
                </label>
              )}
          </div>
          <input
            type="password"
            name="passwordConfirmation"
            {...formik.getFieldProps("passwordConfirmation")}
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
