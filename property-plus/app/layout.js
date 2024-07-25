
import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from '@/contex/GlobalContext';


export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental', 
    description: "Find your dream rental property",
    keywords: 'rental, rental property, find property'
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
     <AuthProvider>   
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
          <ToastContainer />
        </body>
      </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;
