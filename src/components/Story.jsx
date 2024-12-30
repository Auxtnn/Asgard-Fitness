import gsap from "gsap";
import { useRef } from "react";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current) {
      gsap.to(frameRef.current, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <section className="bg-black" id="story">
      <div className="container mx-auto">
        <div className="mx-auto md:px-10">
          <div className="flex flex-col items-center lg:flex-row lg:gap-12">
            {/* Content Card */}
            <div className="w-full rounded-2xl md:bg-zinc-900/50 p-8 lg:w-3/5">
              <h1 className="font-zentry text-4xl font-normal tracking-wide text-white lg:text-4xl">
                Transform Your Fitness Journey with Asgard Fitness
              </h1>

              <div className="mt-6 text-gray-300">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "State-of-the-Art Facilities",
                      desc: "Modern equipment and clean spaces",
                    },
                    {
                      title: "Expert Trainers",
                      desc: "Personalized guidance and support",
                    },
                    {
                      title: "Variety of Classes",
                      desc: "From HIIT to calming yoga",
                    },
                    {
                      title: "Community Support",
                      desc: "Motivating fitness community",
                    },
                    {
                      title: "Holistic Approach",
                      desc: "Nutrition and wellness programs",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Card */}
            <div className="mt-8 w-full lg:mt-0 lg:w-2/5">
              <div
                ref={frameRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="aspect-square overflow-hidden rounded-2xl md:bg-zinc-900/50"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-radial from-red-500/30 to-transparent" />
                  <img
                    src="/img/hero-image.png"
                    alt="Fitness Training"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingImage;
