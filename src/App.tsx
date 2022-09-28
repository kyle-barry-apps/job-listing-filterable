import React, { useEffect } from "react";
import JobsList from "./components/JobsList";
import jobData from './data.json';


const App:React.FC = () => {

  return (
    <>  
      <img src="/images/bg-header-desktop.svg" alt="background image" className="bg-img"/>
      <JobsList jobData={jobData}/>
    </>
  );
}

export default App;
