import Members from "./Members";
import ContactUs from "./ContactUs";
import RoadMap from "./RoadMap";
import AboutProject from "./AboutProject";
import Landing from "./Landing";

const Home = () => {
  return (
    <>
      {/* Landing */}
      <Landing />

      {/* About Project */}
      <AboutProject />

      {/* Road Map */}
      <RoadMap />

      {/* Our Team */}
      <Members />

      {/* Contact Us */}
      <ContactUs />
    </>
  );
};

export default Home;
