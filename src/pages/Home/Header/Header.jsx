import Navbar from "../../../components/Navbar/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero h-[70vh] lg:h-screen"
        style={{
          backgroundImage:
            "url(https://webredox.net/demo/wp/florya/wp-content/uploads/2022/11/1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Elevate Your Occasions with Us</h1>
            <p className="mb-5">
            Turning ordinary gatherings into extraordinary events. Our passion is to design and deliver memorable moments tailored just for you.
            </p>
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
