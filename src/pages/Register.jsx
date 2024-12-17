import { Link } from "react-router-dom";
import lottieData from "../assets/Animation - 1733983035357.json"
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const { createUser, setUser, loginWithGoogle } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value

        const user = {name, email}

        // Firebase authentication
        createUser(email, password)
        .then(result => {
          setUser(result.user)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    // Google login
    const handleLoginWithGoogle = () => {
      loginWithGoogle()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    return (
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <Lottie animationData={lottieData}></Lottie>
        </div>
        <div className="card w-full mx-auto max-w-md shrink-0 shadow-2xl mt-12 border bg-white">
          <h2 className="text-3xl font-bold text-center mt-6 text-teal-500">
            Create a New Account
          </h2>
          <form onSubmit={handleRegister} className="card-body px-8 py-0 mt-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <label className="label"></label>
            <div className="form-control mt-6">
              <button className="py-2 px-6 text-lg rounded-lg bg-purple-700  text-white cursor-pointer font-semibold hover:bg-purple-600 ">
                Register
              </button>
            </div>
          </form>
          <div className="px-8">
            <div className="divider font-medium">OR</div>
            <button
              onClick={handleLoginWithGoogle}
              className="py-2 px-6 w-full text-lg rounded-lg border border-purple-700  text-purple-700 cursor-pointer font-medium hover:bg-base-200"
            >
              <div className="flex items-center justify-center gap-3">
                <span>Log In with Google</span>
              </div>
            </button>
          </div>
          <p className="text-center mt-3 mb-6">
            Already have an account?{" "}
            <Link to="/login" className="underline font-medium text-teal-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;