import { useState } from "react";

import "./App.css";
import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input";
import Input from "./components/input/Input.jsx";

function App() {
  const [applicantInfo, setApplicantInfo] = useState({});
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSubmit = (e) => {
    const newInfo = {
      ...applicantInfo,
      phoneNumber: phoneNumber,
    }
    setApplicantInfo(newInfo);
    console.log(e);
  };
  return (
    <>
      <h1>General Information</h1>
      <form className="container" action={handleSubmit}>
        <Input
          label="Firstname"
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <Input
          label="Lastname"
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <Input
          label="email"
          placeholder="email@example.com"
          type="email"
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <PhoneInput
          defaultCountry=""
          placeholder="Enter your phone number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
