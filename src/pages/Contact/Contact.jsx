import { LiaHeadsetSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-10">
      <div className="md:flex">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-center md:text-left">Contact Information</h2>
          <div className="flex gap-4 items-center">
            <LiaHeadsetSolid className="text-3xl"></LiaHeadsetSolid>
            <div>
              <h4 className="text-xl font-medium">Exploration Call</h4>
              <p className="text-lg">855-100-3333</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <TfiEmail className="text-3xl"></TfiEmail>
            <div>
              <h4 className="text-xl font-medium">Email Info</h4>
              <p className="text-lg">eventa@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <GoLocation className="text-3xl"></GoLocation>
            <div>
              <h4 className="text-xl font-medium">Address</h4>
              <p className="text-lg">
                1616 Broadway NY, New York 10001 <br /> United States of America
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <h2 className="text-3xl font-bold mb-2 text-center md:text-left">Get In Touch</h2>
          <p className="text-lg font-medium mb-4 text-center md:text-left">
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
          <button className="btn btn-neutral btn-outline mt-4 capitalize">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
