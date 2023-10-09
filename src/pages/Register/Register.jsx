import toast from "react-hot-toast";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // get form value
    const name = form.get("name");
    const img = form.get("img");
    const email = form.get("email");
    const password = form.get("password");

    // password validation
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)
    ) {
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
        logOut();
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <section
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/wed/assets/img/gallery/section_bg1.png.webp)",
      }}
    >
      <div className="max-w-lg mx-8 md:mx-16 lg:mx-auto h-[calc(100vh-84px)] pt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0B0B0B]">
          Register Here
        </h1>
        <form onSubmit={handleRegister} className="p-8 border rounded-lg mt-4">
          <div className="grid grid-cols-2 gap-4">
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
            <button className="btn border-none bg-gradient-to-br from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize">
              Register
            </button>
          </div>
          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link
              className="text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12] font-semibold text-lg"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
