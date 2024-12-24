import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="md:p-20 sm:p-5 grid md:grid-cols-2 uppercase sm:grid-cols-1 p-7">
        <div>
          <ul>
            <li className="flex gap-5 p-1">
              <p className="font-bold w-20">Hours:</p>
              <p>Monday - Saturday - 9AM-6PM</p>
            </li>
            <li className="flex gap-5 p-1">
              <p className="font-bold w-20">Phone:</p>
              <p>(902) 270-3665</p>
            </li>
            <li className="flex gap-5 p-1">
              <p className="font-bold w-20">Email:</p>
              <p>CityNails@gmail.com</p>
            </li>
            <li className="flex gap-5 p-1">
              <p className="font-bold w-20">Address:</p>
              <p>272 Commercial Street</p>
            </li>
          </ul>
        </div>
        <ul className="font-bold md:pl-60 sm:pl-0 sm:mt-5 md:mt-0">
          <li className="p-1">Home</li>
          <li className="p-1">Services</li>
          <li className="p-1">About</li>
          <li className="p-1">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
