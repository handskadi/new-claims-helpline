import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";


const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Motor Claims Helpline",
  description: "Independent, hassle-free claims assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        {/* Google Tag Manager */}
        {/* <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K2DVFD25');`}
        </Script> */}
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17643542041"
          strategy="afterInteractive"
        />

        {/* Google Ads base config */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17643542041');
          `}
        </Script>

        {/* Phone conversion config */}
        <Script id="gtag-phone" strategy="afterInteractive">
          {`
            gtag('config', 'AW-17643542041/U75ZCP-WpKwbEJmsjN1B', {
              'phone_conversion_number': '03333447600'
            });
          `}
        </Script>
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2DVFD25"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
