import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Membership = () => {
  const [isYearly, setIsYearly] = useState(false); // State to toggle between monthly and yearly

  const handleToggle = () => {
    setIsYearly((prev) => !prev); // Toggle between monthly and yearly
  };

  return (
    <div className="bg-black" id="plans">
      <div className="text-white py-8 px-5 mx-auto lg:w-11/12">
        <h2 className="md:text-4xl text-2xl text-center pb-8 font-bold text-white">
          ASGARD FITNESS Membership Plans
        </h2>

        {/* Toggle Button */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <span className="text-white">Monthly</span>
          <div
            onClick={handleToggle}
            className={`relative inline-block w-16 h-8 cursor-pointer rounded-full transition-colors duration-300 ${
              isYearly ? "bg-[#ff6654]" : "bg-gray-600"
            }`}
          >
            <div
              className={`absolute top-0 left-0 w-8 h-8 bg-white rounded-full transition-transform duration-300 ${
                isYearly ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </div>
          <span className="text-white">Yearly</span>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <PricingCard
            title="Basic Plan"
            description="Access to essential gym features with all the basics."
            price={isYearly ? 550 : 50}
            duration={isYearly ? "/year" : "/month"}
            benefits={[
              "Unlimited Gym Access",
              "3 Training Programs",
              "Free Fitness Consultation",
              "30% Off Drinks",
              "Free WiFi",
            ]}
          />

          <PricingCard
            title="Premier Plan"
            description="All-inclusive gym features for a premium experience."
            price={isYearly ? 1150 : 90}
            duration={isYearly ? "/year" : "/month"}
            benefits={[
              "Unlimited Gym Access",
              "All Training Programs",
              "Free Fitness Consultation",
              "Personal Trainers",
              "Free Clothes & Equipment",
              "50% Off Drinks",
              "Free WiFi",
            ]}
            featured={true}
          />

          <PricingCard
            title="Elite Plan"
            description="Exclusive plan with advanced features for serious athletes."
            price={isYearly ? 750 : 65}
            duration={isYearly ? "/year" : "/month"}
            benefits={[
              "Unlimited Gym Access",
              "5 Training Programs",
              "Free Fitness Consultation",
              "45% Off Drinks",
              "Free WiFi",
              "Free Clothes & Equipment",
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
};

const PricingCard = ({
  title,
  description,
  price,
  duration,
  benefits,
  featured = false,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      id="membership"
      ref={ref}
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        featured
          ? "border border-[#FF0034] transform hover:scale-10"
          : "border border-[#FF0034] hover:scale-10"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="p-6 w-full">
        <h2 className="text-2xl text-white font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="mb-6">
          <p className="text-5xl font-bold">
            ${price.toLocaleString()}
            <span className="text-gray-500 text-base">{duration}</span>
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <a
            href="/"
            className="w-full py-3 px-4 text-white text-center bg-[#FF0034] rounded-md transition-colors duration-300"
          >
            Start Training
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">What's Included</h3>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} text={benefit} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const BenefitItem = ({ text }) => (
  <li className="flex items-center space-x-2">
    <FaCheck className="text-[#FF0034] flex-shrink-0" />
    <span className="text-gray-300">{text}</span>
  </li>
);

export default Membership;
