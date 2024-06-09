import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm">
           Biblioteria is a library in which user will be able to read 
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">
            Address: 123 Main Street, Karachi, Pakistan <br />
            Phone: +92132528571 <br />
            Email: umairhasanumair12@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
