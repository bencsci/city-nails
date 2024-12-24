import React from "react";

const ContactMain = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-4 px-auto text-center">
        Contact Us 📩
      </h1>
      <div className="p-4 text-lg">
        <div className="">
          <p>
            Feel free to contact us for any inquiries, appointments, or
            questions about our services. We're here to help and can't wait to
            make your nails shine at City Nails!
          </p>
        </div>

        <div className="my-2">
          <p>
            <span>📍 :</span> 272 Commercial Street, North Sydney
          </p>
          <p>
            <span>📞 :</span> (902) 270-3665
          </p>
          <p>
            <span>✉️ :</span> info@citynails.com
          </p>
        </div>

        <div className="mt-3">
          <h2 className="font-bold">Our Hours</h2>
          <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="my-2">
          <p>
            Visit us today and let us pamper you with the care you deserve! 💅✨
          </p>
        </div>
      </div>
      <iframe
        className="w-full h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.0716624813285!2d-60.248865200000004!3d46.2090294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b67ef092daafd3b%3A0x9a7336d5b4b0a643!2s272%20Commercial%20St%2C%20North%20Sydney%2C%20NS%20B2A%201B8!5e0!3m2!1sen!2sca!4v1735016664157!5m2!1sen!2sca"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMain;
