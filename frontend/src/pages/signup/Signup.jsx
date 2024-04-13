import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const { signup, loading } = useSignup();

  const handleRadioChange = gender => {
    setInputs({ ...inputs, gender })
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-700"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="full-name" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input value={inputs.fullName} onChange={e => setInputs({ ...inputs, fullName: e.target.value })} type="text" placeholder="John Doe" id="full-name" name="full-name" className="input input-bordered w-full h-10" />
          </div>

          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input value={inputs.username} onChange={e => setInputs({ ...inputs, username: e.target.value })} type="text" placeholder="johndoe" id="username" name="username" className="input input-bordered w-full h-10" />
          </div>

          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input value={inputs.password} onChange={e => setInputs({ ...inputs, password: e.target.value })} type="password" placeholder="Enter password" id="password" name="password" className="input input-bordered w-full h-10" />
          </div>

          <div>
            <label htmlFor="confirm-password" className="label p-2">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input value={inputs.confirmPassword} onChange={e => setInputs({ ...inputs, confirmPassword: e.target.value })} type="password" placeholder="Confirm password" id="confirm-password" name="confirm-password" className="input input-bordered w-full h-10" />
          </div>

          <GenderCheckbox onRadioChange={handleRadioChange} selectedGender={inputs.gender} />

          <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account? Login</Link>

          <div>
            <button className="btn btn-block btn-sm mt-4" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;