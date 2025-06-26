import { use, useState } from "react";

import "./App.css";
import capitalize from "./helpers/capitalize";
import isThereAMissingField from "./helpers/isThereAMissingField";
import FormView from "./pages/FormView";
import FinalView from "./pages/FinalView";

function App() {
  const [applicantInfo, setApplicantInfo] = useState({});
  const [phoneNumber, setPhoneNumber] = useState();
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
        <FinalView applicantInfo={applicantInfo}/>
      )}
    </>
  );
}

export default App;
