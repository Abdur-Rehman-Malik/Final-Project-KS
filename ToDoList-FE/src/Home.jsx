import Landing from "./Components/Home/Index";
import Service from "./Components/Services/Index";
import About from "./Components/About/Index";
import Contact from "./Components/Contact/Index";

const Home = ({ header }) => {
  return (
    <>
      <div className="w-full h-full px-10 pt-20 py-4">
        <div className="bg-white w-full h-full  ">
          {header == "Home" && <Landing />}
          {header == "Service" && <Service />}
          {header == "About" && <About />}
          {header == "Contact" && <Contact />}
        </div>
      </div>
    </>
  );
};

export default Home;
