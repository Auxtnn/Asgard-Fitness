import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="py-4 md:min-h-96 w-screen bg-black  px-10">
      <div className="relative bg-black text-blue-50 px-4 sm:overflow-hidden">
        <div className="flex flex-col items-center text-center ">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Gym Hub Today!
          </p>

          <AnimatedTitle
            title="let&#39;s g<b>e</b>t  <br /> started&nbspt<b>o</b>day."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
