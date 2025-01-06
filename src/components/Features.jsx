import { useState, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 gap-4 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit  cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />

            <p className="relative z-20">ASGARD FITNESS</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black md:pb-20" id="features">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-16">
        <AnimatedTitle
          title="Unleash your strength"
          containerClass="mt-5  text-white text-center"
        />
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="https://res.cloudinary.com/dvpcwnw9m/video/upload/v1735570013/feature-1_hdtpx7.mp4"
          title={
            <>
              Ch<b>e</b>st w<b>or</b>k<b>o</b>ut
            </>
          }
          description="Chest workouts target pecs, triceps, and shoulders using bench presses, push-ups, and flys. Proper form, progressive overload, and recovery ensure optimal results."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid md:h-[195vh] h-full w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="https://res.cloudinary.com/dvpcwnw9m/video/upload/v1735570064/feature-2_l2g9ux.mp4"
            title={
              <>
                l<b>e</b>g w<b>or</b>k<b>o</b>ut
              </>
            }
            description="Leg workouts target quads, hamstrings, glutes, and calves with exercises like squats, lunges, and leg presses. Focus on form."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 w-full row-span-1 md:col-span-1 md:ms-0">
          <BentoCard
            src="https://res.cloudinary.com/dvpcwnw9m/video/upload/v1735570042/feature-3_xgo7jy.mp4"
            title={
              <>
                back<b> work</b>
                <b>o</b>ut
              </>
            }
            description="Back workouts strengthen lats, traps, and lower back with exercises like deadlifts, rows, and pull-ups."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1  md:col-span-1 md:me-0">
          <BentoCard
            src="https://res.cloudinary.com/dvpcwnw9m/video/upload/v1735570005/feature-4_lq2zkk.mp4"
            title={
              <>
                card<b>io</b>
              </>
            }
            description="Cardio workouts improve heart health and endurance through activities like running, cycling, and swimming."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-2 md:col-span-2 md:row-span-2">
          <BentoCard
            src="https://res.cloudinary.com/dvpcwnw9m/video/upload/v1735570023/feature-6_v6nzgv.mp4"
            title={
              <>
                lat <b>wo</b>rkout
              </>
            }
            description="Lat workouts strengthen lats."
            isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
