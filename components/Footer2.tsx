import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  phoneNumber?: string;
  showClaimsLink?: boolean;
}

const Footer2: React.FC<FooterProps> = ({
  phoneNumber = "0333 344 7600",
  showClaimsLink = true,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white">
      <div className="px-4 py-8 lg:px-80">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and company info */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-nch1.svg"
              alt="Company Logo"
              width={160}
              height={100}
              priority
            />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href={`tel:${phoneNumber}`} className="underline">
                  {phoneNumber}
                </a>
              </li>
              {/* <li>
                <a
                  href="mailto:info@accident-claims-line.co.uk"
                  className="underline"
                >
                  info@accident-claims-line.co.uk
                </a>
              </li>
              <li>48 Oldham Road,</li>
              <li>Manchester, UK,</li>
              <li>M40 1AA</li> */}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/">Home</Link>
              </li>
              {/* {showClaimsLink && (
                <li>
                  <Link href="/claim">Claims</Link>
                </li>
              )}
              <li>
                <Link href="/complaints-procedure">Complaints Procedure</Link>
              </li> */}
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-gray-600 text-sm">
              Car Accident Line is a trading style of PURPLE SPRING LIMITED, registered in England and Wales (Company No. 11611972). Registered Address: 4200 Solihull Parkway, Birmingham Business Park, Birmingham, England, B37 7YN. PURPLE SPRING LIMITED operates within the advertising and lead-generation sector. We introduce customers to authorised UK accident-management providers who deliver repair and replacement services following non-fault accidents. We do not provide insurance, legal, or claims-management services directly. We are independent of all insurers and accident-management companies. You are under no obligation to use our partners and may contact your insurer or manage your case directly if you prefer. Registered with the Information Commissioner’s Office under the Data Protection Act 2018.
            </p>
            {/* <p className="text-gray-600 text-sm">
              Where we offer No Win No Fee services typically customers pay 42%
              Inclusive of VAT of the amount recovered to our solicitors,
              although this will be subject to your individual circumstances.{" "}
            </p>
            <p className="text-gray-600 text-sm">
              We are a regulated claims management firm, not an insurer. We
              assist drivers in making non-fault accident claims. You are not
              required to use the services of Motor Accident Group and may
              instead represent yourself for free either to the person you may
              wish to complain about or to the relevant statutory Ombudsman.
            </p>
            <p className="text-gray-600 text-sm">
              Disclaimer: We are committed to providing you with the best
              possible service and support while ensuring you have all the
              information you need to make informed decisions. Please note that
              while we strive to highlight the numerous benefits of our
              services, these advantages may vary depending on the circumstances
              of your case. For instance, if an accident is determined to be
              non-fault, some of the benefits outlined may not be fully
              available. Additionally, we want to remind you that an
              unsuccessful claim could potentially lead to increasing costs. Our
              goal is to ensure you are supported every step of the way and are
              able to navigate these challenges with confidence.{" "}
            </p> */}
            <p className="text-gray-600 text-sm">
              © {currentYear} Car Accident Line. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
