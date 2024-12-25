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
    <div className="lg:mx-32 lg:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:order-1">
          <h1 className="font-bold text-3xl mt-4 px-auto text-center lg:text-left lg:ml-3 lg:text-5xl">
            Contact Us 📩
          </h1>
          <div className="m-4 text-lg lg:my-8 lg:text-xl">
            <div className="">
              <p>
                Feel free to contact us for any inquiries, appointments, or
                questions about our services. We're here to help and can't wait
                to make your nails shine at City Nails!
              </p>
            </div>

            <div className="my-2 lg:my-10">
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

            <div className="mt-3 lg:mt-8">
              <h2 className="font-bold">Our Hours</h2>
              <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="my-2 lg:my-6">
              <p>
                Visit us today and let us pamper you with the care you deserve!
                💅✨
              </p>
            </div>
          </div>
        </div>

        {/* Right side - map */}
        <div className="md:order-2">
          <APIProvider apiKey={API_KEY}>
            <Map
              style={{ width: "100%", height: "50vh" }} // Map takes full space in grid cell
              defaultCenter={{ lat: 46.20906, lng: -60.24881 }}
              defaultZoom={17}
              gestureHandling={"greedy"}
              mapId={MAP_ID}
              streetViewControl={false}
              mapTypeControl={false}
            >
              <AdvancedMarker position={{ lat: 46.20906, lng: -60.24881 }}>
                <Pin
                  background={"#ff0000"}
                  borderColor={"#cc0000"}
                  glyphColor={"#ff6666"}
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
