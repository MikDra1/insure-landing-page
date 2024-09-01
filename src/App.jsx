import { useEffect, useState } from "react";
import NavigationMobile from "./components/NavigationMobile";
import NavigationDesktop from "./components/NavigationDesktop";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import useScreenSize from "./components/useScreenSize";

function App() {
  const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize()

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 700);
    },
    [screenSize.width]
  );



  return (
    <>
      {isMobile ? <NavigationMobile /> : <NavigationDesktop />}
      <HeroSection isMobile={isMobile} />
      <Benefits />
      <CTA />
      <Footer />
    </>
  );
}

// How we work Blog Account View plans          Find out more about how we work How we work Our company How we work Why Insure? View plans Reviews Help me FAQ Terms of use Privacy policy Cookies Contact Sales Support Live chat Others Careers Press Licenses
// Challenge by Frontend Mentor. Coded by Your Name Here.

export default App;
