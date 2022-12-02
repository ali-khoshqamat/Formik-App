import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../common/Input";
import RadioInput from "../common/RadioInput";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectInput from "../common/SelectInput";
import CheckBoxInput from "../common/CheckBoxInput";
import BooleanCheckBoxInput from "../common/BooleanCheckBoxInput";

const SingUpForm = () => {
  const [savedFormValues, setSavedFormValues] = useState(null);
  const formik = useFormik({
    initialValues: savedFormValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/1")
      .then(({ data }) => {
        setSavedFormValues(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="w-[40rem] bg-[#24292f] text-white p-5 flex flex-col gap-y-5 rounded-lg">
      <h2 className="font-bold text-center">SingUp Form</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2.5">
        {inputOptions.map((input) => (
          <Input
            key={input.name}
            label={input.label}
            name={input.name}
            type={input.type}
            formik={formik}
          />
        ))}
        <div className="flex justify-between items-center">
          <RadioInput
            name="gender"
            radioOptions={GenderRadioOptions}
            formik={formik}
          />
          <CheckBoxInput
            name="intrests"
            formik={formik}
            checkBoxOption={IntrestsCheckOptions}
          />
        </div>
        <SelectInput
          name="nationality"
          formik={formik}
          selectOptions={NationalitySelectOptions}
        />
        <BooleanCheckBoxInput formik={formik} name="terms" />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="font-bold text-sm py-1.5 px-5 mt-3.5 w-min self-center border border-white rounded-md disabled:opacity-30"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default SingUpForm;

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  gender: "",
  nationality: "",
  intrests: [],
  terms: false,
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string()
    .required("Password Confirmation is Required!")
    .oneOf([Yup.ref("password"), null], "Passwords must Match!"),
  gender: Yup.string().required("Gender is Required!"),
  nationality: Yup.string().required("Nationnality ir Required!"),
  intrests: Yup.array().required("Intrest is Required!").min(1),
  terms: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
const inputOptions = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone Number", name: "phoneNumber", type: "text" },
  { label: "Password", name: "password", type: "password" },
  {
    label: "Password Confirmation",
    name: "passwordConfirmation",
    type: "password",
  },
];
const GenderRadioOptions = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" },
];
const NationalitySelectOptions = [
  { value: "", label: "Select Nationality.." },
  { value: "IR", label: "Iran" },
  { value: "GER", label: "Germany" },
  { value: "US", label: "USA", isDisabled: true },
];
const IntrestsCheckOptions = [
  { label: "React.js", value: "react.js" },
  { label: "Vue.js", value: "vue.js" },
  { label: "Angular.js", value: "angular.js" },
];
