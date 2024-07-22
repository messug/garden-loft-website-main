import Home from "../Home/Home";
// import "./App.css";
import Safety from "../Safety/Safety";
import Navbar from "../Navbar/Navbar";
// import HomePage from "../Homepage/Home";
// import BackyardSuite from "../BackyardSuite/Backyard"
import Units from "../Units/Units";
import Costs from "../Costs/Costs";
import Footer from "../Footer/Footer";
import Grants from "../Grants/Grants";
import Process from "../Process/Process";
import Testimony from "../Testimony/Testimony";
import Report from "../Report/Report";
import Advantage from "../Advantage/Advantage";
import Award from '../Award/Award';
import Projects from "../Projects/Projects";


function MainPage() {
  return (
      <>
        <Navbar />
        {/* <HomePage /> */}
        <Home />
        {/* <BackyardSuite /> */}
        <Safety />
        <Advantage />
        <Report />
        <Award/>
        <Units />
        <Projects/>
        <Costs />
        <Process />
        <Grants />
        <Testimony />
        <Footer />
      </>
    
  );
}

export default MainPage;