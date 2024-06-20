
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage"
import FAQ from "./components/FAQ/FAQ";
import Tour from './components/Tour/Tour'
import Village from './components/Village/Village'
import About from "./components/About/About";
import Atrium from "./components/Atrium/Atrium";
import Brochure from './components/Brochure/Brochure';
import Book from './components/Book-Tour/Book';
import Initial from "./components/Initial-meeting/Initial";
import Feasibility from "./components/Feasibility-report/Feasibility";

import Phone from "./components/Phone/Phone";

import LearnMore from "./components/LearnMore/LearnMore";



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
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/book-tour" element={<Book />} />
          <Route path="/feasibility-report" element={<Feasibility />} />
          <Route path="/phone-call" element={<Phone /> }/>
          <Route path="/atrium" element={<Atrium /> }/>
          <Route path="/initial" element={< Initial/> }/>
          <Route path="/learn-more" element={<LearnMore/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
