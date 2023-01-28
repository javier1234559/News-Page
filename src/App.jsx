import React, { useState, useEffect } from "react";
import styles from "./tailwind-styles";
import { Header, ScrollBackTop ,Footer} from "./components";
import { MicrosoftTeam , TikTok} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="w-full overflow-hidden ">
      <ScrollBackTop />
      <div className={`${styles.wrapper} border-b-[3px] `}>
        <div className={`${styles.container} lg:!mx-auto`}>
          <Header />
        </div>
      </div>
      <div className={`lg:h-[80px] lg:w-[100%]`} ></div>
      <Routes>
        <Route path="/" element={<MicrosoftTeam />} />
        <Route path="/tiktok"  element={<TikTok/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
