import React from "react";
import dhol from "../assets/svg/dhol.svg";
import dj from "../assets/svg/dj.svg";
import menhdi from "../assets/svg/menhdi.svg";
import pandit from "../assets/svg/pandit.svg";
import venue from "../assets/svg/venue.svg";
import corpe from "../assets/svg/corpe.svg";
import { Link } from "react-router-dom";

function Ourservices() {
  const services = [
    { icon: dj, title: "DJ", route: "/mehndiservices" },
    { icon: dhol, title: "Dhol"  , route: "/Shimmerefect"},
    { icon: pandit, title: "Pandit" },
    { icon: menhdi, title: "Mehndi Artist" },
    { icon: venue, title: "Venue" },
    { icon: corpe, title: "Corporate Events" },
  ];

  return (
    <div className="container mx-auto px-4 py-1">
      <h1 className="text-4xl text-center font-bold py-6 text-[#FF4040]">
        Our Top Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {services.map((service, index) => (
          <Link to={service.route}>
            <div
              key={index}
              className="
              bg-white 
              rounded-lg 
              shadow-lg 
              p-6 
              text-center 
              transform 
              transition-all 
              duration-300 
              hover:-translate-y-3 
              hover:shadow-2xl 
              flex 
              flex-col 
              items-center 
              justify-center
            "
            >
              <div className="mb-4 w-20 h-20 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="max-w-full max-h-full"
                />
              </div>
              <p className="text-xl font-semibold text-gray-800">
                {service.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Ourservices;
