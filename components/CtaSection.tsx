"use client";
import PhoneButton from "./PhoneButton";

interface CtaSectionProps {
  phoneNumber?: string; // Number used for the actual phone link
  displayNumber?: string; // Number shown to the user
}

const CtaSection: React.FC<CtaSectionProps> = ({ 
  phoneNumber = "03303412329",
  displayNumber = "0330 341 2329"
}) => {
  return (
    <section className="relative bg-[#4682B4] w-full mt-4 overflow-hidden">
      {/* Curved white shape */}
      <div
        className="absolute w-full bg-white"
        style={{
          borderBottomLeftRadius: "100% 80%",
          borderBottomRightRadius: "100% 80%",
        }}
      >
        <h2 className="text-center text-2xl font-bold py-4">
          Car insurance claims
        </h2>
      </div>

      {/* Content area with padding to account for curved shape */}
      <div className="pt-24 pb-8 flex flex-col items-center justify-center gap-4">
        <PhoneButton
          phoneNumber={phoneNumber}
          backgroundColor="#FFFFFF"
          textColor="#000000"
          iconColor="#000000"
          showIcon={true}
        >
          {displayNumber}
        </PhoneButton>
        <p className="text-base text-white">Lines are open 24/7 all year.</p>
      </div>
    </section>
  );
};

export default CtaSection;