import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import Home from "./Home";

function App() {
  const [showplant, setShowplant] = useState(false);

  const handleGetStarted = () => {
    setShowplant(true);
  };

  return (
    <>
      <header className="first_page">
        <div className="main_event">
          <div className="first_page_name_btn">
            <h1 className="budget_heading">BloomEase Solutions</h1>
            <p className="budget_sentence"> Bring Nature Home with Ease!</p>
            <div className="getstarted_btn">
              <button onClick={() => handleGetStarted()} className="get-started-btn">
                Get Started
              </button>
            </div>
          </div>
          <div className="aboutus_main">
            <AboutUs />
          </div>
        </div>
      </header>

      <div className={`event-list-container ${showplant ? 'visible' : ''}`}>
        <Home showplant = {showplant} setShowplant = {setShowplant}/>
      </div>
    </>
  );
}

export default App;
