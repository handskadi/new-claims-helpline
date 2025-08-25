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
        className="flex flex-col items-center justify-center text-center w-full px-4 py-12 gap-6 bg-[#E3FDFF] bg-no-repeat bg-center"
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
          className="flex items-center justify-center gap-6 pl-12 pr-14 py-4 rounded-2xl shadow-md bg-[#33E5F5] text-black border border-white hover:bg-white hover:border-[#33E5F5] hover:text-[#000] transition-colors duration-300 border-4"
        >
          <div className="animate-swing text-black hover:text-[#33E5F5] transition-colors duration-300">
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

      {/* Section 1 */}
      <section className="w-full px-4 lg:px-80 py-8 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 py-8 border-b border-[#33E5F5] ">
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
            <h2 className="text-2xl font-bold mb-4">Who are we?</h2>
            <p className="mb-4 text-gray-700">
              We are a UK-based company specialising in helping drivers who have been involved in non fault accidents get back on the road faster and safer.
            </p>
            <p className="my-6 text-gray-700">At Car Accident Line, we take the stress out of what comes after a not at fault accident. Our UK-based team focuses on getting you back on the road quickly with a simple, no-hassle process. From same-day like-for-like replacement vehicles to manufacturer-approved repairs, we handle everything so you can focus on getting back to normal.
            </p>
            <p className="my-6 text-gray-700">Disclaimer: As an independent service, we have no ties to insurers or third parties. Our only priority is protecting your rights and ensuring you get the support you deserve after a non fault accident.</p>
            <CallButton />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full px-4 lg:px-80 py-8 bg-white">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 py-8 border-b border-[#33E5F5] ">
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
            <h2 className="text-2xl font-bold mb-4">Why Trust Us?</h2>
            <p className="mb-4 text-gray-700">
              When you’ve been in a non fault accident, you need more than promises—you need results. Car Accident Line has built its reputation on delivering fast, independent accident support that puts drivers first every time.
            </p>
            <ul className="mb-6 text-gray-700 list-disc pl-5 space-y-2">
              <li><strong>Same-Day Vehicle Replacement:</strong> Like-for-like cars, vans, or motorcycles, delivered quickly so you’re never left without transport.</li>
              <li><strong>Manufacturer-Approved Repairs:</strong> Quality you can trust, protecting your vehicle’s value.</li>
              <li><strong>Independent &amp; Unbiased Advice:</strong> No insurer affiliations, our only loyalty is to you.</li>
              <li><strong>Proven Track Record:</strong> Thousands of successful claims managed for UK drivers.</li>
              <li><strong>Transparent Process:</strong> No hidden fees, no surprises, just straightforward support from start to finish.</li>
            </ul>
            <p className="mb-6 text-gray-700">
              Your recovery starts the moment you call. Speak to our UK-based team today and get the help you need.
            </p>
            <CallButton />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full px-4 lg:px-80 py-8 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 py-8 border-b border-[#33E5F5]">
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
            <h2 className="text-2xl font-bold mb-4">What’s Covered?</h2>
            <p className="mb-4 text-gray-700">
              We handle every aspect of your non fault accident claim, from start to finish.
            </p>
            <ul className="mb-6 text-gray-700 list-disc pl-5 space-y-2">
              <li>
                <strong>Roadside Recovery:</strong> If your vehicle can’t be driven, we’ll arrange fast roadside recovery, getting you and your vehicle to safety without delay.
              </li>
              <li>
                <strong>Vehicle Replacement:</strong> Stay mobile with a like-for-like replacement vehicle arranged quickly, so you’re never left without transport.
              </li>
              <li>
                <strong>Accident Repairs:</strong> Your vehicle will be restored using only manufacturer-approved parts by trusted professionals, ensuring quality and protecting its value.
              </li>
              <li>
                <strong>Injury Compensation:</strong> If you’ve been injured in a non fault accident, we can connect you with our panel of reputable solicitors who will work hard to secure a fair offer of compensation.
              </li>
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
            q: "What happens when you have a car accident and it’s not your fault?",
            a: "If you’ve been in a non fault accident, you can choose to go through an independent service like Car Accident Line. We’ll provide a replacement vehicle, manage your repairs, and handle communication with the at-fault party’s insurer, keeping you stress-free throughout."
          },
          {
            q: "What are my rights in an accident that is not my fault?",
            a: "If an accident is not your fault, you have the right to claim directly from the at-fault driver’s insurer for all reasonable losses. This can include the cost of repairs, a replacement vehicle, and compensation for any injuries or inconvenience caused."
          },
          {
            q: "How quickly can I get a replacement vehicle?",
            a: "In most cases, we can arrange a like-for-like replacement vehicle the very same day you report your accident."
          },
          {
            q: "Are repairs guaranteed?",
            a: "Yes. All repairs are carried out using manufacturer-approved parts and come with a guarantee for as long as you own the vehicle."
          },
          {
            q: "Do I have to pay extra if the accident wasn’t my fault?",
            a: "If the other driver’s insurer accepts liability, you shouldn’t have to pay your excess. If you claim through Car Accident Line, we deal directly with the at-fault insurer so you avoid paying any excess up front."
          },
          {
            q: "What documentation do I need?",
            a: "Typically, we’ll need your driving licence, insurance details, and basic accident information. Our team will guide you through the exact requirements when you call."
          },
          {
            q: "Do you lose your No Claims Bonus if an accident wasn’t your fault?",
            a: "Generally, if the at-fault party accepts responsibility and covers all costs, your No Claims Bonus should remain intact. However, some insurers may temporarily reduce your discount until the claim is fully settled."
          },
          {
            q: "Will my insurance increase after a claim that wasn’t my fault?",
            a: "It’s possible your premium may increase slightly, even for a non fault accident, as insurers may view you as a higher risk. Using an independent accident management company can help minimise the impact on your policy."
          }
        ].map((item, index) => (
          <details
            key={index}
            className="border-b border-cyan-300 py-4 group"
          >
            <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-black">
              {item.q}
              <span className="relative text-cyan-400 text-2xl w-6 h-6 flex items-center justify-center">
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
