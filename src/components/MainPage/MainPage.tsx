import Home from "../Home/Home";
// import "./App.css";
import Safety from "../Safety/Safety";
import Navbar from "../Navbar/Navbar";

import Units from "../Units/Units";
import Costs from "../Costs/Costs";
import Footer from "../Footer/Footer";
import Grants from "../Grants/Grants";
import Process from "../Process/Process";
import Testimony from "../Testimony/Testimony";
import Report from "../Report/Report";
import Advantage from "../Advantage/Advantage";

function MainPage() {
  return (
      <>
        <Navbar />
        <Home />
        <Safety />
        <Advantage />
        <Report />
        <Units />
        <Costs />
        <Process />
        <Grants />
        <Testimony />
        <Footer />
      </>
    
  );
}

export default MainPage;