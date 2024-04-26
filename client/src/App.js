
import React from "react";
import { Route, Routes } from "react-router-dom";
import Tutorial from './component/Tutorial';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Tutorial/>} />
      </Routes>
   
    
    </>
  );
}

export default App;
