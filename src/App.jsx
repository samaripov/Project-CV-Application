import { useState } from "react";

import "./App.css";
import GeneralInformation from "./pages/GeneralInformation";

//TODO: Each screen should create it's respective part of the object.
//Once it creates it, it must also verify it's integrity.
//Afterwards the app should give a setApplicantInfo and
//each seaction needs to merge it's part with the main applicantInfo

function App() {
  const [applicantInfo, setApplicantInfo] = useState({});
  const [pageIndex, setPageIndex] = useState(0);

  const pages = [
    <GeneralInformation
      applicantInfo={applicantInfo}
      setApplicantInfo={setApplicantInfo}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
    />,
  ];
  return <>{pageIndex < pages.length ? pages[pageIndex] : <h1>Out of pages</h1>}</>;
}

export default App;
