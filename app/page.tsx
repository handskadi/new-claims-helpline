
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import ProgressiveReveal from "@/components/ProgressiveReveal";
import PhoneButton from "@/components/PhoneButton";
import WaitTimeIndicator from "@/components/WaitTimeIndicator";
import FaqDropdown from "@/components/FaqDropdown";


export default function HomePage() {
  return (
    <main className="w-full text-gray-800">
      <Navbar2 />
      <section className="flex flex-col items-center justify-center text-center w-full gap-4 px-4 py-6">
        <h2 className="text-sm font-bold uppercase">
          Call us now to report a claim
        </h2>
        <PhoneButton phoneNumber="03333447600" showIcon={true}>
          0333 344 7600
        </PhoneButton>
        <WaitTimeIndicator />
        <p className="max-w-[490px] text-base mt-4">
          When you’ve been in an accident that wasn’t your fault, you shouldn’t have to deal with the stress of chasing insurers or arranging repairs yourself. Car Accident Line provides a fast, independent alternative — connecting you with trusted UK partners who take care of everything, from recovery and repairs to replacement vehicles.
        </p>
        {/*
        <a href="https://www.reviews.co.uk/company-reviews/store/car-accident-claims.uk" target="_blank">
          <picture className="drop-shadow-md">
            <source type="image/png" srcSet="https://s3-eu-west-1.amazonaws.com/reviews-global/images/trust-badges/reviews-trust-logo-2.png 1x, https://s3-eu-west-1.amazonaws.com/reviews-global/images/trust-badges/reviews-trust-logo-2@2x.png 2x" />
            <img src="https://s3-eu-west-1.amazonaws.com/reviews-global/images/trust-badges/reviews-trust-logo-2.png" alt="Trust Badge" />
          </picture>
        </a>
        */}
        <div className="w-full max-w-[1280px] h-[1px] mt-2 bg-[#E5E5E5]"></div>
      </section>

      <ProgressiveReveal>
        <section className="flex flex-col w-full py-4 px-4 gap-2 lg:px-80">
          <p className="text-base">We&apos;ll need:</p>
          <ul className="list-disc pl-5 text-base">
            <li>Your name and vehicle registration number.</li>
            <li>A description of the accident.</li>
            <li>The location of the accident.</li>
            <li>
              Contact details of any third parties, including passengers and
              witnesses.
            </li>
          </ul>
          <p className="text-base">
            Your claim advisor will explain your options and help you through
            the claims process. Once the incident report is completed,
            we&apos;ll arrange repairs to your car or pass you to your insurer
            to move forward with the claim.
          </p>
          <div className="w-full h-[1px] mt-4 bg-[#E5E5E5]"></div>
        </section>
      </ProgressiveReveal>
      <section className="flex flex-col w-full px-4 py-8 gap-1 lg:px-80">
        <h2 className="text-xl font-medium mb-1">Making a windscreen claim</h2>
        <p className="text-base">
          Is your windscreen cracked or chipped? If you have comprehensive
          cover, you can arrange unlimited repairs. To make a glass claim and
          arrange a repair,{" "}
          <a href="tel:03333447600" className="text-[#4682B4] underline">
            call us at 0333 344 7600
          </a>
          .
        </p>
        <p className="text-base">
          You&apos;ll need to have your policy number, start date, and insurer
          to hand. You can find all these details on your Statement of
          Insurance.
        </p>
        <p className="text-base">
          A specialist technician will repair or replace your glass as quickly
          as possible.
        </p>
        <p className="text-base">
          As long as you use an AA Approved Repairer, your no-claim discount
          won&apos;t be affected, and you&apos;ll only need to pay an excess if
          your windscreen is being replaced.
        </p>
      </section>
      <section className="flex flex-col w-full px-4 pb-8 gap-2 lg:px-80">
        <FaqDropdown
          question="What to do after an accident?"
          answer="Stay safe, document the details, and contact us. We&apos;ll handle the rest, from managing your claim to arranging repairs and a replacement vehicle."
        />
        <FaqDropdown
          question="Will I have to pay anything upfront?"
          answer="No. You pay nothing upfront. We handle the costs directly."
        />
        <FaqDropdown
          question="What happens if my car is undriveable?"
          answer="We&apos;ll get you a replacement vehicle right away, so you&apos;re not stuck without transport."
        />
        <FaqDropdown
          question="Will I lose my no-claims bonus?"
          answer="No. Your no-claims bonus stays protected when you claim with us."
        />
      </section>
      <Footer2 />
    </main>
  );
}
