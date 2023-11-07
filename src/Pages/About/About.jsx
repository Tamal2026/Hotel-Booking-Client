import HelmetReact from "../../Components/Helmet/HelmetReact";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
    return (
     <>
     <div>
        <HelmetReact title="About"></HelmetReact>
     </div>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-4 bg-emerald-600 text-white  py-2 w-2/4  lg:w-1/6  text-center rounded-lg mx-auto">
          About Us
        </h1>
        <p className="mb-4 mt-7">
          Welcome to our Your Trusted Automotive Partner! We are passionate about
          Car Lover and dedicated to providing you with the best Car experiences.
        </p>
        <p className="mb-4">
          "At Close AutoMobile, we understand that driving is more than just a
          means of transportation; it's an experience. Our mission is to cater to
          all automotive enthusiasts, from those seeking a reliable ride for
          everyday adventures to those yearning for high-performance thrills. We
          share your passion for the open road, the joy of seamless journeys, and
          the excitement of exploring new horizons. Join us in celebrating the art
          of driving and embark on unforgettable automotive journeys."
        </p>
        <p className="mb-4">
          Our team of automotive enthusiasts is dedicated to providing
          comprehensive support for all your car-related requirements. We stay
          abreast of the latest advancements and innovations in the automotive
          industry to ensure you enjoy a seamless driving experience. Whether you
          seek guidance for selecting the perfect vehicle, require maintenance
          tips for optimal performance, or need assistance in resolving any
          car-related concerns, our knowledgeable experts are here to assist you
          every step of the way. Count on us to make your automotive journey
          smooth and hassle-free
        </p>
        html Copy code
        <h2 className="text-xl font-semibold mt-6 mb-4">Our Services</h2>
        <ul className="list-disc ml-6">
          <li>Vehicle Sales</li>
          <li>Vehicle Maintenance</li>
          <li>Vehicle Customization</li>
          <li>Vehicle Repairs</li>
          <li>Vehicle Consultation</li>
          <li>Vehicle Accessories</li>
        </ul>
        <p className="mt-6">
        Join us and become an integral part of the automotive community. Discover our range of services and prepare yourself for an unparalleled driving experience! Whether you're a solo adventurer, a road trip enthusiast, or a car aficionado, we're dedicated to transforming your automotive aspirations into a tangible reality. Let us accompany you on your journey towards automotive excellence and exploration
        </p>
      </div>
     </>
    );
  };
  
  export default About;
  