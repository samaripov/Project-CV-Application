import { use, useState } from "react";

import "./App.css";
import capitalize from "./helpers/capitalize";
import isThereAMissingField from "./helpers/isThereAMissingField";
import FormView from "./pages/FormView";
import FinalView from "./pages/FinalView";

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
  const [showFinalView, setShowFinalView] = useState(0);

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
    setShowFinalView(1);
    console.log(newInfo);
  };

  return (
    <>
      {showFinalView === 0 ? (
        <FormView
          action={handleSubmit}
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      ) : (
        <FinalView
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
      )}
    </>
  );
}

export default App;
