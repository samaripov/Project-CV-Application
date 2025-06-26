import { use, useState } from "react";

import "./App.css";
import capitalize from "./helpers/capitalize";
import isThereAMissingField from "./helpers/isThereAMissingField";
import FormView from "./pages/FormView";
import FinalView from "./pages/FinalView";
import SubmittedView from "./pages/SubmittedView";

function App() {
  const [applicantInfo, setApplicantInfo] = useState({
    companyname: "ee3",
    degree: "Masters",
    email: "aripov8cm@gmailc.e",
    enddate_education: "2025-06-09",
    enddate_experience: "2025-07-02",
    firstname: "Sirojiddin",
    lastname: "Aripov",
    major: "ee",
    phoneNumber: "+399",
    positiontitle: "333",
    responsibilities: "333",
    schoolname: "4939",
    startdate_education: "2025-06-12",
    startdate_experience: "2025-06-20",
  });
  const [phoneNumber, setPhoneNumber] = useState("+399");
  const [pageNumber, setPageNumber] = useState(0);

  const handleSubmit = (e) => {
    const newInfo = {
      ...applicantInfo,
      phoneNumber: phoneNumber,
      degree:
        applicantInfo.degree !== undefined ? applicantInfo.degree : undefined,
      responsibilities:
        applicantInfo.responsibilities !== undefined
          ? applicantInfo.responsibilities
          : undefined,
    };

    const missingProperty = isThereAMissingField(newInfo);
    if (missingProperty) {
      document.getElementById(missingProperty).focus();
      alert(`${capitalize(missingProperty)} can't be blank!`);
      return;
    }
    setApplicantInfo(newInfo);
    setPageNumber(1);
    console.log(newInfo);
  };

  function getPage() {
    switch (pageNumber) {
      case 0:
        return (
          <FormView
            action={handleSubmit}
            applicantInfo={applicantInfo}
            setApplicantInfo={setApplicantInfo}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        );
      case 1:
        return (
          <FinalView
            applicantInfo={applicantInfo}
            setApplicantInfo={setApplicantInfo}
            setPageNumber={setPageNumber}
          />
        );
      case 2:
        return <SubmittedView applicantInfo={applicantInfo} />;
    }
  }

  return <>{getPage()}</>;
}

export default App;
