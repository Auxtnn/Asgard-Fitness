import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <section
      className="text-gray-600 body-font relative bg-black md:pt-8"
      id="contact"
    >
      <div className="container px-5 py-10 mx-auto flex md:flex-row gap-7 flex-col lg:w-11/12">
        {/* Left section */}
        <div className="rounded-lg w-full md:w-1/2 ">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            className=" w-full h-full border-none outline-none"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.148414397415!2d0.38164228052355487!3d52.258849910097766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d869e1efbe0727%3A0x5af24d2577af3481!2sAsgard%20Fitness%20Ltd!5e0!3m2!1sen!2suk!4v1736178847390!5m2!1sen!2suk"
            allowFullScreen={true}
          ></iframe>
        </div>
        {/* Right section */}
        <div className="py-6 px-4 border border-gray-800 rounded-lg flex flex-col md:ml-auto w-full md:w-1/2 md:py-8 mt-8 md:mt-0">
          <h2 className="text-[#FF0034] text-lg mb-1 font-medium">
            Send Us a Message
          </h2>

          {/* Form */}
          <form className="">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gold focus:border-gold focus:ring-2 focus:ring-gold text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gold focus:border-gold focus:ring-2 focus:ring-gold text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gold focus:border-gold focus:ring-2 focus:ring-gold text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* Similar input fields for Email and Message */}
            <button className="border border-gold text-gold bg-transparent py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
