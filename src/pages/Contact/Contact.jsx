import { LiaHeadsetSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <section 
    className="md:h-[calc(100vh-84px)]"
      style={{
        backgroundImage:
          "url(https://preview.colorlib.com/theme/wed/assets/img/gallery/section_bg1.png.webp)",
      }}
    >
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto py-14">
        <div className="md:flex">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-center md:text-left text-[#0B0B0B]">
              Contact Information
            </h2>
            <div className="flex gap-4 items-center">
              <LiaHeadsetSolid className="text-3xl text-[#0B0B0B]"></LiaHeadsetSolid>
              <div>
                <h4 className="text-xl font-medium text-[#0B0B0B]">
                  Exploration Call
                </h4>
                <p className="text-lg text-gray-500">855-100-3333</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <TfiEmail className="text-3xl text-[#0B0B0B]"></TfiEmail>
              <div>
                <h4 className="text-xl font-medium text-[#0B0B0B]">
                  Email Info
                </h4>
                <p className="text-lg text-gray-500">eventa@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <GoLocation className="text-3xl text-[#0B0B0B]"></GoLocation>
              <div>
                <h4 className="text-xl font-medium text-[#0B0B0B]">Address</h4>
                <p className="text-lg text-gray-500">
                  1616 Broadway NY, New York 10001 <br /> United States of
                  America
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0">
            <h2 className="text-3xl font-bold mb-2 text-center md:text-left text-[#0B0B0B]">
              Get In Touch
            </h2>
            <p className="text-lg mb-4 text-center md:text-left text-gray-500">
              Ask any question, We{"'"}d love to hear more from you.
            </p>
            <div className=" grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full textarea textarea-bordered mt-5"
            ></textarea>
            <button className="btn bg-gradient-to-r from-[#DEBB50] to-[#B57F12] text-white font-semibold text-lg capitalize mt-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
