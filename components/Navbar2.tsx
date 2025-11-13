// app/components/Navbar.tsx
import React from "react";
import Image from "next/image";

const Navbar2: React.FC = () => {
  return (
    <nav className="w-full py-4 px-4 bg-white relative">
      <div className="flex flex-row gap-2 items-center justify-center">
        <Image
          src="/logo-nch1.svg"
          alt="Logo"
          width={124}
          height={60}
        />
        {/* <p className="text-sm whitespace-nowrap">
          | Powered By <span className="font-bold">Motor Accident Group</span>
        </p> */}
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-4 z-10 pointer-events-none"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          transform: "translateY(0px)",
        }}
      />
    </nav>
  );
};

export default Navbar2;
