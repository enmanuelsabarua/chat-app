import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-700"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label htmlFor="full-name" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" id="full-name" name="full-name" className="input input-bordered w-full h-10" />
          </div>

          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="johndoe" id="username" name="username" className="input input-bordered w-full h-10" />
          </div>

          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter password" id="password" name="password" className="input input-bordered w-full h-10" />
          </div>

          <div>
            <label htmlFor="confirm-password" className="label p-2">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input type="password" placeholder="Confirm password" id="confirm-password" name="confirm-password" className="input input-bordered w-full h-10" />
          </div>

          <GenderCheckbox />

          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account? Login</a>

          <div>
            <button className="btn btn-block btn-sm mt-4">Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;