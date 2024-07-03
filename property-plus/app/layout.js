

import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';  // Ensure the case matches the file name
import Footer from '@/components/Footer';

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental', // Fixed typo in the title
    description: "Find your dream rental property",
    keywords: 'rental, rental property, find property'
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en"> 
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
