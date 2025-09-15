import React from "react";
import logo1 from "../../../assets/icons8-running.gif";
import logo2 from "../../../assets/bookingIcon.png";
import logo3 from "../../../assets/safe-delivery.png";
import logo4 from "../../../assets/live-tracking.png";

const HowItWorks = () => {
  return (
    <section className="py-12 rounded-lg mb-2">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          How it Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="mb-4">
              <img
                src={logo2}
                alt="Booking Pick & Drop"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Booking Pick & Drop</h3>
            <p className="text-sm text-gray-600">
              From personal packages to business shipments — we deliver on
              time, every time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="mb-4">
              <img src={logo1} alt="Cash On Delivery" className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cash On Delivery</h3>
            <p className="text-sm text-gray-600">
              From personal packages to business shipments — we deliver on
              time, every time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="mb-4">
              <img src={logo3} alt="Delivery Hub" className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Delivery Hub</h3>
            <p className="text-sm text-gray-600">
              From personal packages to business shipments — we deliver on
              time, every time.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="mb-4">
              <img
                src={logo4}
                alt="Booking SME & Corporate"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Booking SME & Corporate
            </h3>
            <p className="text-sm text-gray-600">
              From personal packages to business shipments — we deliver on
              time, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
