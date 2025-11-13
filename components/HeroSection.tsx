// app/components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-[#F5F5F5] w-full px-4 py-8 gap-4">
      <h1 className="text-4xl font-bold">Make a Claim</h1>
      <p className="max-w-[490px] text-base">
        Motor Claims Helpline provides an independent, alternative claims process
        for car insurance customers involved in a non fault accident.
      </p>
    </section>
  );
};

export default HeroSection;
