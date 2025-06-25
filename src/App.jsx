import { useState } from "react";

import "./App.css";
import GeneralInformation from "./pages/GeneralInformation";
import EducationInformation from "./pages/EducationInformation";
import capitalize from "./helpers/capitalize";
import isThereAMissingField from "./helpers/isThereAMissingField";
import ExperienceInformation from "./pages/ExperienceInformation";

function App() {
  const [applicantInfo, setApplicantInfo] = useState({});
  const [phoneNumber, setPhoneNumber] = useState();

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
    console.log(newInfo);
  };

  return (
    <>
      <h1>Tell us about yourself</h1>
      <form className="container" action={handleSubmit}>
        <GeneralInformation
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
        <EducationInformation
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <ExperienceInformation
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <button type="submit">Submit Application</button>
      </form>
    </>
  );
}

export default App;
