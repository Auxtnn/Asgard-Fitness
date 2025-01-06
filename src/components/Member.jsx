import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Membership = () => {
  return (
    <div className="bg-black" id="plans">
      <div className="text-white py-8 px-5 mx-auto lg:w-11/12">
        <h2 className="md:text-4xl text-2xl text-center pb-8 font-bold text-white">
          ASGARD FITNESS Membership Plans
        </h2>

        {/* Single Memberships */}
        <h3 className="text-2xl font-bold mb-6 text-center text-[#FF0034]">
          Individual Plans
        </h3>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <PricingCard
            title="On Peak - Single"
            description="Full access membership for individuals"
            price={40}
            duration="/month"
            benefits={[
              "All hours, 7 days a week access",
              "Wide Range of Facilities",
              "Personal Training",
              "Expert Help & Advice",
              "12 months minimum term",
              "No Joining Fee",
            ]}
          />

          <PricingCard
            title="Off Peak - Single"
            description="Perfect for flexible daytime training"
            price={37}
            duration="/month"
            benefits={[
              "Access 09:00-15:00 Mon-Fri",
              "Wide Range of Facilities",
              "Personal Training",
              "Expert Help & Advice",
              "12 months minimum term",
              "No Joining Fee",
            ]}
          />

          <PricingCard
            title="Month Pass"
            description="Try our facilities with no commitment"
            price={45}
            duration="/month"
            benefits={[
              "All hours, 7 days a week access",
              "Wide Range of Facilities",
              "Personal Training",
              "Expert Help & Advice",
              "No minimum term",
              "£10 refundable card deposit",
            ]}
            featured={true}
          />
        </motion.div>

        {/* Couple Memberships */}
        <h3 className="text-2xl font-bold mb-6 text-center text-[#FF0034]">
          Couple Plans
        </h3>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <PricingCard
            title="On Peak - Couple"
            description="Train together, save together"
            price={75}
            duration="/month"
            benefits={[
              "All hours, 7 days a week access",
              "Wide Range of Facilities",
              "Personal Training",
              "Expert Help & Advice",
              "12 months minimum term",
              "No Joining Fee",
              "Second member joins on first visit",
            ]}
          />

          <PricingCard
            title="Off Peak - Couple"
            description="Daytime training for two"
            price={65}
            duration="/month"
            benefits={[
              "Access 09:00-15:00 Mon-Fri",
              "Wide Range of Facilities",
              "Personal Training",
              "Expert Help & Advice",
              "12 months minimum term",
              "No Joining Fee",
              "Second member joins on first visit",
            ]}
          />
        </motion.div>

        {/* Special Rates */}
        <h3 className="text-2xl font-bold mb-6 text-center text-[#FF0034]">
          Special Rates
        </h3>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <PricingCard
            title="HERO On Peak"
            description="For NHS, Military, Veterans, Fire & Police"
            price={35}
            duration="/month"
            benefits={[
              "All hours, 7 days a week access",
              "Wide Range of Facilities",
              "Personal Training",
              "Expert Help & Advice",
              "12 months minimum term",
              "No Joining Fee",
              "Valid ID required",
            ]}
          />

          <PricingCard
            title="HERO Off Peak"
            description="For NHS, Military, Veterans, Fire & Police"
            price={32}
            duration="/month"
            benefits={[
              "Access 09:00-15:00 Mon-Fri",
              "Wide Range of Facilities",
              "Personal Training",
              "Expert Help & Advice",
              "12 months minimum term",
              "No Joining Fee",
              "Valid ID required",
            ]}
          />

          <PricingCard
            title="OAP On Peak"
            description="Senior citizen rate"
            price={30}
            duration="/month"
            benefits={[
              "All hours, 7 days a week access",
              "Wide Range of Facilities",
              "Personal Training",
              "Expert Help & Advice",
              "12 months minimum term",
              "No Joining Fee",
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
      ref={ref}
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        featured
          ? "border border-[#FF0034] transform hover:scale-105"
          : "border border-[#FF0034] hover:scale-105"
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
            £{price}
            <span className="text-gray-500 text-base">{duration}</span>
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <a
            href="#contact"
            className="w-full py-3 px-4 text-white text-center bg-[#FF0034] rounded-md transition-colors duration-300 hover:bg-[#cc0029]"
          >
            Join Now
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
