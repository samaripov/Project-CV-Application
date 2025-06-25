import { useState } from "react";

import "./App.css";
import GeneralInformation from "./pages/GeneralInformation";
import EducationInformation from "./pages/EducationInformation";
import capitalize from "./helpers/capitalize";
import isThereAMissingField from "./helpers/isThereAMissingField";

function App() {
  const [applicantInfo, setApplicantInfo] = useState({});

  const handleSubmit = (e) => {
    const newInfo = {
      ...applicantInfo,
    };
    const missingProperty = isThereAMissingField(newInfo);
    if (missingProperty) {
      alert(`${capitalize(missingProperty)} can't be blank!`);
      return;
    }
    setApplicantInfo(newInfo);
    setPageIndex(pageIndex + 1);
    console.log(newInfo);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <GeneralInformation
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
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
