import React, { useState, useEffect } from "react";
import styles from "./tailwind-styles";
import { MicrosoftTeam } from "./pages";
import { Header, ScrollBackTop ,Footer} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full overflow-hidden ">
      <ScrollBackTop />
      <div className={`${styles.wrapper} border-b-[3px] `}>
        <div className={`${styles.container} `}>
          <Header />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<MicrosoftTeam />} />
        {/* <Route path="/shop" exact component={Shop} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
