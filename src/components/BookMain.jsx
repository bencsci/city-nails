import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { motion } from "motion/react";
import { FiMapPin, FiPhone, FiClock, FiDollarSign } from "react-icons/fi";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const MAP_ID = process.env.REACT_APP_MAP_ID;

const ContactMain = () => {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title with decorative element */}
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-[#8A192C] mr-4"></div>
            <h2 className="text-sm uppercase tracking-widest text-[#8A192C] font-medium">
              Book Now
            </h2>
            <div className="h-[1px] w-12 bg-[#8A192C] ml-4"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-light text-center text-[#333] mb-6 leading-tight">
            Schedule Your Visit
          </h3>
          <p className="text-center text-[#555] max-w-2xl mb-8">
            Visit us for walk-in services or schedule an appointment by phone or
            in person. We look forward to providing you with an exceptional nail
            care experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Contact information */}
          <motion.div
            className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-serif text-[#333] mb-8">
              Contact <span className="text-[#8A192C]">Information</span>
            </h4>

            <div className="space-y-6 mb-10">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 mr-5 p-2 bg-[#8A192C]/5 rounded-full">
                  <FiMapPin className="text-[#8A192C] w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-[#333] mb-1">Address</h5>
                  <p className="text-[#555]">
                    272 Commercial Street, North Sydney
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 mr-5 p-2 bg-[#8A192C]/5 rounded-full">
                  <FiPhone className="text-[#8A192C] w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-[#333] mb-1">Phone</h5>
                  <p className="text-[#555]">
                    <a
                      href="tel:9022703665"
                      className="hover:text-[#8A192C] transition-colors"
                    >
                      (902) 270-3665
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 mr-5 p-2 bg-[#8A192C]/5 rounded-full">
                  <FiClock className="text-[#8A192C] w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-[#333] mb-1">
                    Business Hours
                  </h5>
                  <p className="text-[#555]">Friday: 9:30 AM - 7:00 PM</p>
                  <p className="text-[#555]">Saturday: 9:30 AM - 6:00 PM</p>
                  <p className="text-[#555]">Sunday: Closed</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 mr-5 p-2 bg-[#8A192C]/5 rounded-full">
                  <FiDollarSign className="text-[#8A192C] w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-medium text-[#333] mb-1">
                    Payment Methods
                  </h5>
                  <p className="text-[#8A192C] font-medium">
                    Cash only - No debit or credit cards accepted
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-[#555] italic">
                Visit us today and let our expert technicians treat you with the
                exceptional nail care you deserve.
              </p>
            </div>
          </motion.div>

          {/* Right side - Google Map */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-full min-h-[500px] rounded-sm overflow-hidden shadow-sm border border-gray-100">
              <APIProvider apiKey={API_KEY}>
                <Map
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  defaultCenter={{ lat: 46.20906, lng: -60.24881 }}
                  defaultZoom={16}
                  gestureHandling={"cooperative"}
                  mapId={MAP_ID}
                  streetViewControl={false}
                  mapTypeControl={false}
                >
                  <AdvancedMarker position={{ lat: 46.20906, lng: -60.24881 }}>
                    <Pin
                      background={"#8A192C"}
                      borderColor={"#8A192C"}
                      glyphColor={"#ffffff"}
                      scale={1.2}
                    />
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
