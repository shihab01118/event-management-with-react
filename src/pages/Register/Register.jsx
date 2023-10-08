import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // get form value
    const name = form.get("name");
    const img = form.get("img");
    const email = form.get("email");
    const password = form.get("password");

    setRegisterError("");

    // password validation
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)
    ) {
      setRegisterError("Password is not valid.");
      toast.error(
        "Password must contain 6 characters, one capital letter and a special character."
      );
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration Successful!");

        // update user profile
        updateUserProfile(name, img);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogleSignIN = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-lg mx-auto min-h-screen mt-6">
      <h1 className="text-5xl font-bold text-center">Register Here</h1>
      <form
        onSubmit={handleRegister}
        className="bg-base-200 p-8 shadow-lg rounded-lg mt-8"
      >
        <p className="text-red-600">{registerError}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="img"
            placeholder="Your Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-4">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="mt-3">
          Already have an account?{" "}
          <Link className="text-rose-600 underline" to="/login">
            Login
          </Link>
        </p>
        <div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4">Continue With</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-3">
            <button onClick={handleGoogleSignIN} className="btn btn-outline">
              <FaGoogle></FaGoogle>
              Google
            </button>
            <button className="btn btn-outline">
              <FaFacebook className="text-blue-600"></FaFacebook>
              Facebook
              </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
