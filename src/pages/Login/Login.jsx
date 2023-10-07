import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-lg mx-auto h-screen mt-6">
      <h1 className="text-5xl font-bold text-center">Login Now!</h1>
      <form className="bg-base-200 p-8 shadow-lg rounded-lg mt-8">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-4">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="mt-3">
          Don{"'"}t have an account? <Link className="text-rose-600 underline" to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
