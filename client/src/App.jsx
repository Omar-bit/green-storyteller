import React from "react";
import { Routes, Route } from "react-router";
import Hero from "./composants/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Ask from "./composants/Hero/Ask";
import History from "./composants/History";
import HistorySession from "./composants/HistorySession";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);
  return (
    
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:id" element={<HistorySession />} />
        
      </Routes>
    
  );
};

export default App;