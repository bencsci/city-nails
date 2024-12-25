import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const MAP_ID = process.env.REACT_APP_MAP_ID;

const ContactMain = () => {
  return (
    <div className="lg:px-32 lg:py-16 md:px-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Contact info */}
        <div className="md:order-1">
          <div>
            <h1 className="font-bold text-3xl mt-4 text-center lg:text-left xl:text-5xl text-[#8A192C] lg:text-3xl">
              Book Now <span className="animate-bounce inline-block">📩</span>
            </h1>
            <div className="m-4 text-lg lg:my-8 lg:text-lg text-gray-700 md:text-base xl:text-xl">
              <p className="mb-4">
                You can walk in for services without an appointment, or schedule
                an appointment in person or by calling us. We're always ready to
                serve you at City Nails!
              </p>
              <div className="my-4">
                <p>
                  <span className="font-semibold">📍 Address:</span> 272
                  Commercial Street, North Sydney
                </p>
                <p>
                  <span className="font-semibold">📞 Phone:</span> (902)
                  270-3665
                </p>
                <p>
                  <span className="font-semibold">✉️ Email:</span>{" "}
                  info@citynails.com
                </p>
              </div>

              <div className="my-4">
                <h2 className="font-bold text-xl">Our Hours</h2>
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="my-6">
                <p>
                  Visit us today and let us pamper you with the care you
                  deserve! 💅✨
                </p>
              </div>

              {/* New Section: Payment Info */}
              <div className="my-6 text-red-600">
                <p className="font-semibold">
                  Please note: We only accept cash, no debit or credit cards. 💵
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:order-2">
          <APIProvider apiKey={API_KEY}>
            <Map
              style={{
                width: "100%",
                height: "50vh",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
              defaultCenter={{ lat: 46.20906, lng: -60.24881 }}
              defaultZoom={17}
              gestureHandling={"greedy"}
              mapId={MAP_ID}
              streetViewControl={false}
              mapTypeControl={false}
            >
              <AdvancedMarker position={{ lat: 46.20906, lng: -60.24881 }}>
                <Pin
                  background={"#8A192C"}
                  borderColor={"#8A192C"}
                  glyphColor={"#ffffff"}
                />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
