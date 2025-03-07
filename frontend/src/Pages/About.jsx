import { aboutimg } from "../assets/Data";
import Services from '../components/Services';

const About = () => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full h-64 bg-black flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">About Us</h1>
      </div>

      <section className="min-h-screen py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={aboutimg}
              alt="About Us"
              className="w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Mission Statement</h2>
            <p className="text-gray-700 mt-2">
              Our mission at propelprogressllc Inc. is to redefine excellence in online retail by offering an outstanding range of high-quality products, sourced from the most reliable and ethical wholesalers. We are committed to ensuring every product we sell not only meets but exceeds customer expectations in quality, innovation, and sustainability.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6">Vision Statement</h2>
            <p className="text-gray-700 mt-2">
              Our vision is to establish propelprogressllc Inc. as a leader in the e-commerce space, synonymous with unparalleled quality, innovation, and customer satisfaction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6">About Our Business</h2>
            <p className="text-gray-700 mt-2">
              Our wholesale business specializes in sourcing and distributing a wide array of top-tier branded products, catering to a diverse customer base. We pride ourselves on our ability to offer an extensive range of high-quality, well-known brands across various categories, ensuring that our clients always have access to the best products in the market.
            </p>
          </div>
        </div>
      </section>

      <Services />
    </>
  );
};

export default About;
