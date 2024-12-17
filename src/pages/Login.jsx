import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import singInLottie from "../assets/signin.json"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";


const Login = () => {
  const { loginUser, setUser, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state || "/"

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = { name, email };

    // Firebase authentication
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        // JWT token
        const user = {email: email}
        axios.post("http://localhost:3000/jwt", user, {
          withCredentials: true
        })
        .then(data => {
          console.log(data.data)
        })
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Google login
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(from)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="w-1/2">
        <Lottie animationData={singInLottie}></Lottie>
      </div>
      <div className="card w-full mx-auto max-w-md shrink-0 shadow-2xl mt-12 border bg-white">
        <h2 className="text-3xl font-bold text-center mt-6 text-teal-500">
          Log In Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body px-8 py-0 mt-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium">Email:</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-base font-medium">
                Password:
              </span>
            </label>
            <input
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link
                to="/forget_password"
                href="#"
                className="label-text-alt link link-hover text-sm"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="py-2 px-6 text-lg rounded-lg bg-purple-700  text-white cursor-pointer font-semibold hover:bg-purple-600 ">
              Log In
            </button>
          </div>
        </form>
        <div className="px-8">
          <div className="divider font-medium">OR</div>
          <button
            onClick={handleLoginWithGoogle}
            className="py-2 px-6 w-full text-lg rounded-lg border border-purple-600  text-purple-700 cursor-pointer font-medium hover:bg-base-200"
          >
            <div className="flex items-center justify-center gap-3">
              <span>Log In with Google</span>
            </div>
          </button>
        </div>
        <p className="text-center mt-3 mb-6">
          Haven't any account?{" "}
          <Link to="/register" className="underline font-medium text-teal-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;