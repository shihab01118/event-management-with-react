import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful!");
        // navigate after log in
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Invalid email or password");
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
    <section
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/wed/assets/img/gallery/section_bg1.png.webp)",
      }}
    >
      <Helmet>
        <title>EVENTA | Login</title>
      </Helmet>
      <div className="max-w-lg mx-8 md:mx-16 lg:mx-auto min:h-screen py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0B0B0B]">
          Login Now!
        </h1>
        <form onSubmit={handleLogIn} className="p-8 border rounded-lg mt-4">
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
            <button className="btn border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize">
              Login
            </button>
          </div>
          <p className="mt-3">
            Don{"'"}t have an account?{" "}
            <Link
              className="text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12] font-semibold text-lg"
              to="/register"
            >
              Register
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
    </section>
  );
};

export default Login;
