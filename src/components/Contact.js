import React from 'react';

const Contact = () => {
  return (
    <div className="App-header min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-6 w-full max-w-md">
        <div className="mb-6">
          <p className="mb-2">📧 Email：contact@minsgarden.com</p>
          <p className="mb-2">📞 Phone：+1 123 4567 8900</p>
          <p className="mb-2">📍 Addresss：Victoria, BC, Canada</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Working Hours</h2>
          <p className="mb-2">Monday to Friday：9:00 - 18:00</p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 