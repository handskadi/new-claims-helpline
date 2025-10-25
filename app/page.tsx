import AnimatedArrow from "@/components/AnimatedArrow";
import CallButton from "@/components/CallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="w-full text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center w-full px-4 py-12 gap-6 bg-[#41CBFE3D] bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "80%",
        }}
      >
        {/* Headline */}
        <h1 className="text-4xl font-bold">
          Car Accident Line
        </h1>
        <p className="max-w-[490px] text-base">
          Reliable Help After a Non-Fault Accident
        </p>

        {/* CTA */}
        <h2 className="text-sm font-bold uppercase mt-2">
          Start your claim
        </h2>

        <Link
          href="tel:03333447600"
          className="flex items-center justify-center gap-6 pl-12 pr-14 py-4 rounded-2xl shadow-md bg-[#41CBFE] text-black border border-white hover:bg-white hover:border-[#41CBFE] hover:text-[#000] transition-colors duration-300 border-4"
        >
          <div className="animate-swing text-black hover:text-[#41CBFE] transition-colors duration-300">
            {/* New Heroicons Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
          <span className="font-extrabold text-lg">0333 344 7600</span>
        </Link>

        {/* Wait Time */}
        <div className="flex items-center gap-3">
          <div className="relative mr-[15px]">
            <AnimatedArrow />
          </div>

          <span className="text-sm mt-0.5">
            Estimated wait time: <span className="font-bold">under 3 minutes</span>
          </span>
        </div>

        <p className="max-w-[490px] text-base mt-4">
          When you’ve been in an accident that wasn’t your fault, you shouldn’t have to deal with the stress of chasing insurers or arranging repairs yourself. Car Accident Line provides a <strong>fast, independent alternative</strong> — connecting you with trusted UK partners who take care of everything, from recovery and repairs to replacement vehicles.
        </p>
      </section>

      {/* Section 1 - About Us */}
      <section className="w-full px-4 lg:px-80 py-8 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 py-8 border-b border-[#41CBFE] ">
          <div className="lg:w-1/2">
            <Image
              src="/images/img1.jpg"
              alt="Family image"
              width={768}
              height={432}
              className="rounded-md"
              priority
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="mb-4 text-gray-700">
              Car Accident Line is a UK-based service created to make life easier for drivers after a <strong>non-fault accident</strong>. We work with reputable accident-management providers who help you get back on the road quickly, safely, and without unnecessary hassle.
            </p>
            <p className="my-6 text-gray-700">
              Our team focuses on simple, transparent support — arranging <strong>like-for-like replacement vehicles</strong>, <strong>manufacturer-standard repairs</strong>, and <strong>clear communication</strong> every step of the way.
            </p>
            <p className="my-6 text-gray-700">
              <strong>We’re fully independent.</strong> Car Accident Line is not tied to any insurer or repair network. Our goal is to connect you with trusted specialists who prioritise your needs.
            </p>
            <CallButton />
          </div>
        </div>
      </section>

      {/* Section 2 - Why Choose Us */}
      <section className="w-full px-4 lg:px-80 py-8 bg-white">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 py-8 border-b border-[#41CBFE] ">
          <div className="lg:w-1/2">
            <Image
              src="/images/img2.jpg"
              alt="Family picnic"
              width={768}
              height={432}
              className="rounded-md"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="mb-4 text-gray-700">
              When it comes to non-fault accidents, results matter more than promises. Our partners deliver reliable, end-to-end support that keeps drivers moving.
            </p>
            <ul className="mb-6 text-gray-700 list-disc pl-5 space-y-2">
              <li><strong>Fast Vehicle Replacement:</strong> Cars, vans, or motorcycles delivered quickly so you’re never stranded.</li>
              <li><strong>Manufacturer-Approved Repairs:</strong> Work carried out by trusted professionals using genuine parts.</li>
              <li><strong>Independent Advice:</strong> No insurer influence; we help you explore your options freely.</li>
              <li><strong>Clear Communication:</strong> Straightforward information, no jargon, no hidden surprises.</li>
              <li><strong>Proven Experience:</strong> Thousands of UK drivers supported through our network of partners.</li>
            </ul>
            <p className="mb-6 text-gray-700">
              Your recovery starts the moment you reach out. <strong>Call our UK team today — 0333 344 7600</strong>.
            </p>
            <CallButton />
          </div>
        </div>
      </section>

      {/* Section 3 - What We Cover */}
      <section className="w-full px-4 lg:px-80 py-8 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 py-8 border-b border-[#41CBFE]">
          <div className="lg:w-1/2">
            <Image
              src="/images/img3.jpg"
              alt="Accident support image"
              width={768}
              height={432}
              className="rounded-md"
              priority
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">What We Cover</h2>
            <p className="mb-4 text-gray-700">
              Our partners can assist with every practical step after a non-fault accident:
            </p>
            <ul className="mb-6 text-gray-700 list-disc pl-5 space-y-2">
              <li><strong>Roadside Recovery:</strong> If your vehicle can’t be driven, they’ll arrange quick collection and safe transport.</li>
              <li><strong>Replacement Vehicles:</strong> Stay mobile with a like-for-like temporary car, van, or motorcycle.</li>
              <li><strong>Accident Repairs:</strong> Repairs are completed using manufacturer-approved methods and genuine parts to maintain your vehicle’s safety and value.</li>
            </ul>
            <CallButton />
          </div>
        </div>
      </section>

      {/* Know More about us  + FAQ*/}
      <section className="flex flex-col w-full px-4 pt-20 pb-8 gap-6 lg:px-80 bg-white">
        {/* Heading & Intro Text */}
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-2xl font-bold">Want to know more?</h2>
          <p className="max-w-[490px] text-base text-gray-700">
            Have questions about your accident claim? We&apos;ve got the answers. Explore our FAQs to learn how we make the process hassle-free and at no cost to you.
          </p>
        </div>

        {/* FAQ List */}
        {[
          {
            q: "What should I do after a non-fault accident?",
            a: "Make sure everyone is safe, exchange details, and contact us — we’ll connect you with accident-management specialists who can handle recovery and repairs."
          },
          {
            q: "Do I have to pay anything?",
            a: "If the other driver is at fault, costs are typically recovered from their insurer. Our partners will explain this clearly before any work begins."
          },
          {
            q: "How quickly can I get a replacement vehicle?",
            a: "Usually within hours, depending on vehicle type and availability."
          },
          {
            q: "Will repairs affect my warranty?",
            a: "No — repairs are carried out to manufacturer standards and maintain your warranty coverage."
          },
          {
            q: "Will I lose my No-Claims Bonus?",
            a: "If you’re not at fault and liability is accepted, your bonus should remain intact."
          }
        ].map((item, index) => (
          <details
            key={index}
            className="border-b border-[#41CBFE] py-4 group"
          >
            <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-black">
              {item.q}
              <span className="relative text-[#41CBFE] text-2xl w-6 h-6 flex items-center justify-center">
                <span className="block group-open:hidden">+</span>
                <span className="hidden group-open:block">−</span>
              </span>
            </summary>
            <div className="text-gray-700 mt-2 pr-6 text-base font-bold leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </section>

      <Footer />
    </main>
  );
}
