import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );

    setErrorMessage(message);

    if (message) return;
    console.log("Form is valid");
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_small.jpg"
          alt="Login Banner"
          width="100%"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="text-xl absolute z-10 top-1/4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 p-8 rounded-lg flex flex-col w-1/4"
      >
        <h1 className="text-3xl font-bold py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 text-white"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 text-white"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 text-white"
        />

        {errorMessage && (
          <p className="text-red-500 font-semibold text-sm">
            {errorMessage}
          </p>
        )}

        <button className="p-4 my-4 bg-red-700 w-full rounded-lg text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 cursor-pointer text-gray-400 hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
