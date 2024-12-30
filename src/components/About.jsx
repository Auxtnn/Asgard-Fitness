import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-black">
      <div className="relative mb-8 pt-20 flex flex-col items-center gap-5">
        <p className="font-general text-lg text-white uppercase md:text-[10px]">
          Welcome to ASGARD FITNESS
        </p>

        <AnimatedTitle
          title="Trans<b>fo</b>rm int<b>o</b> the best <br /> best versi<b>o</b>n <b>o</b>f y<b>o</b>urself"
          containerClass="mt-5 tex-white text-center"
        />
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/contact-2.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
