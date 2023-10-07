import { LiaHeadsetSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="w-1/2">
        <h2>Contact Information</h2>
        <div className="flex gap-4">
          <LiaHeadsetSolid></LiaHeadsetSolid>
          <div>
            <h4>Exploration Call</h4>
            <p>855-100-3333</p>
          </div>
        </div>
        <div className="flex gap-4">
          <TfiEmail></TfiEmail>
          <div>
            <h4>Email Info</h4>
            <p>eventa@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-4">
          <GoLocation></GoLocation>
          <div>
            <h4>Address</h4>
            <p>1616 Broadway NY, New York 10001 United States of America</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h2>Get In Touch</h2>
        <p>Ask any question, We{"'"}d love to here more from you.</p>
        <div className=" grid grid-cols-2 gap-5">
            <input type="text" placeholder="Full Name" className="w-full border" />
            <input type="text" placeholder="Your Email" className="w-full border" />
        </div>
        <textarea placeholder="Your Message" rows="6" className="w-full border mt-5"></textarea>
        <button className="btn btn-neutral btn-outline">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
