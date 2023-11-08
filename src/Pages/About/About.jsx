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
        <p className="mb-4 font-bold mt-7">
        Welcome to our Luxury Hotel Booking Platform! We are passionate about creating memorable hotel experiences and are dedicated to providing you with the best hospitality services. With our exceptional accommodations, world-class amenities, and personalized customer service, we ensure your stay with us is nothing short of extraordinary. Book your dream getaway today and indulge in the ultimate hotel experience.

        </p>
        <p className="mb-4">
        At CoZy Heaven Hotel, we believe that a hotel stay is more than just a temporary residence; it's an experience. Our mission is to cater to all travelers, from those seeking a comfortable stay for business trips to those yearning for luxurious getaways. We share your passion for exceptional hospitality, the pleasure of seamless stays, and the thrill of discovering new destinations. Join us in celebrating the art of hospitality and embark on unforgettable hotel experiences..
        </p>
      
      
        <h2 className="text-xl font-bold mt-6 mb-4">Our Services</h2>
        <ul className="list-disc ml-6">
          <li>Room Bookings</li>
          <li>Concierge Services</li>
          <li>Event Planning</li>
          <li>Dining and Catering</li>
          <li>Recreational Activities</li>
          <li>Transportation Assistance</li>
        </ul>
        <p className="mt-6">
        Join us and become an integral part of our thriving hospitality community. Discover our comprehensive range of services and prepare yourself for an unparalleled hotel experience! Whether you're a solo traveler, a vacation enthusiast, or a hospitality aficionado, we're dedicated to transforming your travel aspirations into a tangible reality. Let us accompany you on your journey towards hospitality excellence and exploration
        </p>
      </div>
     </>
    );
  };
  
  export default About;
  