import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hillview Physiotherapy Group | Physiotherapy in Dromana & the Mornington Peninsula",
  description: "Physiotherapy and rehabilitation designed around you. At Hillview Physiotherapy Group in Dromana, we combine hands-on treatment, tailored exercise, and clear education to help you recover faster and move confidently.",
  keywords: "physiotherapy Dromana, physiotherapy Mornington Peninsula, sports physio, running assessment, rehabilitation, post-surgical rehab, dry needling, golf physio, strength training, physio Dromana, Hillview Physiotherapy",
  openGraph: {
    title: "Hillview Physiotherapy Group | Physiotherapy in Dromana",
    description: "Physiotherapy and rehabilitation designed around you. Move better. Recover stronger.",
    url: "https://www.hillviewphysiogroup.com.au",
    siteName: "Hillview Physiotherapy Group",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#171A18" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Hillview Physiotherapy Group",
              description: "Physiotherapy and rehabilitation in Dromana, Mornington Peninsula.",
              url: "https://www.hillviewphysiogroup.com.au",
              telephone: "(03) 5911 0201",
              email: "info@hillviewphysiogroup.com.au",
              address: {
                "@type": "PostalAddress",
                streetAddress: "236 Boundary Road",
                addressLocality: "Dromana",
                addressRegion: "VIC",
                postalCode: "3936",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -38.3439297,
                longitude: 144.9800489,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "12:00",
                },
              ],
              priceRange: "$$",
              sameAs: ["https://www.instagram.com/hillviewphysiodromana"],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script src="/js/includes.js" />
        <script src="/js/analytics.js" />
        <script src="/js/navigation.js" />
        <script src="/js/faq.js" />
        <script src="/js/booking.js" />
        <script src="/js/main.js" />
      </body>
    </html>
  );
}