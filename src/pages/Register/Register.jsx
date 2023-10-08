import toast from 'react-hot-toast';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // get form value
    const name= form.get('name');
    const img= form.get('img');
    const email = form.get("email");
    const password = form.get("password");

    // create user
    createUser(email, password)
    .then(result => {
      console.log(result.user);
      toast.success('Registration Successful!')

      updateUserProfile(name, img)
    })
    .catch();
  };
  return (
    <div className="max-w-lg mx-auto h-screen mt-6">
      <h1 className="text-5xl font-bold text-center">Register Here</h1>
      <form
        onSubmit={handleRegister}
        className="bg-base-200 p-8 shadow-lg rounded-lg mt-8"
      >
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
      </form>
    </div>
  );
};

export default Register;
