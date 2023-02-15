import React, { useState } from "react";
import Home  from "./pages/Home/Home";
import Login  from "./pages/Login/Login"


function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  
  return (
  <>
    {currentPage === "Login" && <Login onClickGoToHome={setCurrentPage}/>}
    {currentPage === "Home" && <Home onClickGoToLogin={setCurrentPage}/>}
    {/* {currentPage === "Profile" && <Profile onClickProfile={setCurrentPage}/>} */}
  </>
  );
}

export default App;
