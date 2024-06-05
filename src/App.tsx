
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage"
import FAQ from "./components/FAQ/FAQ";
import Tour from './components/Tour/Tour'
import Village from './components/Village/Village'

function App() {
  return (
    <>
<Router> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/village" element={<Village />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;