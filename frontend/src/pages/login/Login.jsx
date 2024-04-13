import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const { loading, login } = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();
        await login(inputs);
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-700"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input value={inputs.username} onChange={e => setInputs({ ...inputs, username: e.target.value })} type="text" placeholder="Enter username" id="username" name="username" className="input input-bordered w-full h-10" />
                    </div>

                    <div>
                        <label htmlFor="password" className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input value={inputs.password} onChange={e => setInputs({ ...inputs, password: e.target.value })} type="password" placeholder="Enter password" id="password" name="password" className="input input-bordered w-full h-10" />
                    </div>

                    <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">{"Don't"} have an account? Signup</Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-4" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;