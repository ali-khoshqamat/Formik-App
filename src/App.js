import SingUpForm from "./components/SingUpForm";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center gap-y-16">
      <h2 className="bg-[#24292f] text-white p-5 font-bold text-lg text-center w-full">
        Formik React
      </h2>
      <SingUpForm />
    </div>
  );
}

export default App;
