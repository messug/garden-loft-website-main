
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage"
import FAQ from "./components/FAQ/FAQ";
import Tour from './components/Tour/Tour'
import Village from './components/Village/Village'
import About from "./components/About/About";
import Atrium from "./components/Atrium/Atrium";
// import Brochure from './components/Brochure/Brochure';
import Initial from "./components/Initial-meeting/Initial";


function App() {
  return (
    <>
<Router> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/village" element={<Village />} />
          {/* <Route path="/brochure" element={<Brochure />} /> */}
          <Route path="/atrium" element={<Atrium /> }/>
          <Route path="/initial" element={< Initial/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
