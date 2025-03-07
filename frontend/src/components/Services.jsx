import React from "react";
import { Truck, ShieldCheck, Headphones } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Truck size={50} className="text-blue-500" />,
    title: "Free Shipping",
    description: "Guaranteed Delivery in 4 Days",
  },
  {
    id: 2,
    icon: <ShieldCheck size={50} className="text-green-500" />,
    title: "100% Money Back",
    description: "Send Within 30 Days",
  },
  {
    id: 3,
    icon: <Headphones size={50} className="text-red-500" />,
    title: "Online Support",
    description: "Call us 24 / 7",
  },
];

const Services = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
