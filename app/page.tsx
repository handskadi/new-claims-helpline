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
          Start Your Claim
        </h1>
        <p className="max-w-[490px] text-base">
          Your Non Fault Accident Claim, Fully Covered
        </p>

        {/* CTA */}
        <h2 className="text-sm font-bold uppercase mt-2">
          Call Us Now for Immediate Assistance
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
          With no ties to insurers, our UK specialists work fast to manage your claim, keeping the process simple and stress-free.
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
              We are a UK specialist service dedicated to assisting drivers involved in non-fault accidents, helping you return to normal faster and safer.
            </p>
            <p className="my-6 text-gray-700">
              At Car Accident Line, we remove the hassle from what follows an accident that wasn’t your fault. Our team in the UK focuses on giving you quick support—from arranging like-for-like replacement vehicles on the same day to organizing manufacturer-standard repairs. We take care of it all so you can focus on recovery.
            </p>
            <p className="my-6 text-gray-700">
              As an independent service provider, we’re not aligned with any insurers or third parties. Our sole mission is to protect your rights and make sure you receive the assistance you’re entitled to after a non-fault accident.
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
              After a non-fault crash, promises don’t count — results do. Car Accident Line has built trust on delivering fast, independent accident support that always places drivers first.
            </p>
            <ul className="mb-6 text-gray-700 list-disc pl-5 space-y-2">
              <li><strong>Same-Day Replacement Vehicles:</strong> Cars, vans, or motorcycles delivered swiftly, so you’re never stranded.</li>
              <li><strong>Manufacturer-Approved Repairs:</strong> High-quality repairs that protect your vehicle’s value.</li>
              <li><strong>Unbiased Guidance:</strong> No insurer ties — our only loyalty is to you.</li>
              <li><strong>Proven Results:</strong> Thousands of successfully handled UK claims.</li>
              <li><strong>Transparent Approach:</strong> No hidden fees, no surprises — just clear help from start to finish.</li>
            </ul>
            <p className="mb-6 text-gray-700">
              Your recovery starts the moment you reach out. Talk to our UK-based specialists today and get the help you need.
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
              We oversee every aspect of your non-fault accident claim, from beginning to end:
            </p>
            <ul className="mb-6 text-gray-700 list-disc pl-5 space-y-2">
              <li><strong>Roadside Recovery:</strong> If your vehicle is undrivable, we’ll arrange urgent recovery to ensure you and your vehicle reach safety.</li>
              <li><strong>Vehicle Replacement:</strong> Stay mobile with a like-for-like replacement vehicle quickly arranged so you aren’t left without transport.</li>
              <li><strong>Accident Repairs:</strong> Restorations are done using manufacturer-approved parts by trusted professionals, preserving quality and value.</li>
              <li><strong>Injury Compensation:</strong> If you’ve been hurt in a non-fault accident, we connect you with a panel of respected solicitors to pursue fair compensation.</li>
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
            q: "What happens if I’m involved in a non-fault accident?",
            a: "You can use an independent service like Car Accident Line. We’ll arrange a replacement vehicle, manage repairs, and liaise with the insurer of the at-fault party — making the process smooth and worry-free."
          },
          {
            q: "What rights do I have after an accident that wasn’t my fault?",
            a: "You’re entitled to claim from the insurer of the at-fault party for all reasonable losses: repairs, a replacement vehicle, and compensation for injuries or inconvenience."
          },
          {
            q: "How quickly can I get a replacement vehicle?",
            a: "In many cases, we can supply a like-for-like replacement on the same day you report the accident."
          },
          {
            q: "Are repairs guaranteed?",
            a: "Yes. All repairs use manufacturer-approved parts and come with a guarantee for as long as you own the vehicle."
          },
          {
            q: "Do I have to pay anything if the accident wasn’t my fault?",
            a: "If liability is accepted by the other driver’s insurer, you shouldn’t have to pay your excess. When you claim through Car Accident Line, we deal directly with the at-fault insurer, so you’re not asked for the excess upfront."
          },
          {
            q: "What documents are needed?",
            a: "Usually: your driving licence, insurance details, and basic accident information. Our team will guide you step-by-step when you call."
          },
          {
            q: "Will I lose my No Claims Bonus if the accident wasn’t my fault?",
            a: "Generally not, if liability is accepted and the costs are fully covered, your No Claims Bonus should remain intact. Some insurers may, however, temporarily reduce it until the claim settles."
          },
          {
            q: "Could my insurance premium still go up?",
            a: "Yes, even for a non-fault accident, your insurer might view you as higher risk. Using an independent accident management service like ours can help limit that impact."
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
