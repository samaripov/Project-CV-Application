import "react-phone-number-input/style.css";
import { useState } from "react";

import PhoneInput from "react-phone-number-input";
import Input from "../components/input/Input.jsx";
import isThereAMissingField from "../helpers/isThereAMissingField.js";
import capitalize from "../helpers/capitalize.js";

export default function GeneralInformation({
  applicantInfo,
  setApplicantInfo,
  pageIndex,
  setPageIndex,
}) {
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSubmit = (e) => {
    const newInfo = {
      ...applicantInfo,
      phoneNumber: phoneNumber,
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
        <button type="submit">Next</button>
      </form>
    </>
  );
}
