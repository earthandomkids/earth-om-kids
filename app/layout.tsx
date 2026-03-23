import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Earth & OM Kids | Kids Yoga & Mindfulness Programs in Toronto",
  description:
    "Earth & OM Kids offers kids yoga, mindfulness, and school wellness programs for childcare centres, Montessori communities, schools, and families in Toronto and the GTA.",

  keywords: [
    "kids yoga Toronto",
    "kids yoga GTA",
    "school yoga programs Toronto",
    "childcare yoga programs",
    "Montessori yoga program",
    "kids mindfulness Toronto",
    "toddler yoga Toronto",
    "preschool yoga classes Toronto",
    "yoga for daycare children",
  ],

  openGraph: {
    title: "Earth & OM Kids | Kids Yoga Toronto",
    description:
      "Beautifully designed kids yoga and mindfulness programs for schools, childcare centres, and families in Toronto and the GTA.",
    url: "https://earthandom.ca",
    siteName: "Earth & OM Kids",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Earth & OM Kids | Kids Yoga Toronto",
    description:
      "Kids yoga, mindfulness, and school wellness programs in Toronto and the GTA.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Earth & OM Kids',
              url: 'https://earthandom.ca',
              email: 'earthandomkids@gmail.com',
              telephone: '647-856-8206',
              areaServed: ['Toronto', 'GTA'],
              description:
                'Earth & OM Kids offers kids yoga, mindfulness, school wellness programs, childcare yoga programs, and educator wellness workshops in Toronto and the GTA.',
            }),
          }}
        />
      </body>
    </html>
  );
}