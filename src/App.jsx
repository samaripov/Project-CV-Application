import { useState } from "react";

import "./App.css";
import GeneralInformation from "./pages/GeneralInformation";
import EducationInformation from "./pages/EducationInformation";
import capitalize from "./helpers/capitalize";
import isThereAMissingField from "./helpers/isThereAMissingField";

function App() {
  const [applicantInfo, setApplicantInfo] = useState({});
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSubmit = (e) => {
    const newInfo = {
      ...applicantInfo,
      phoneNumber: phoneNumber
    };

    const missingProperty = isThereAMissingField(newInfo);
    if (missingProperty) {
      alert(`${capitalize(missingProperty)} can't be blank!`);
      return;
    }
    setApplicantInfo(newInfo);
    console.log(newInfo);
  };

  return (
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
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default App;
