import "react-phone-number-input/style.css";
import { useState } from "react";

import PhoneInput from "react-phone-number-input";
import Input from "../input/Input.jsx";

export default function GeneralInformation({
  applicantInfo,
  setApplicantInfo,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <>
      <h2>General Information</h2>
      <Input
        label="Firstname"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
        minLength={1}
      />
      <Input
        label="Lastname"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
        minLength={1}
      />
      <Input
        label="email"
        placeholder="email@example.com"
        type="email"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
        minLength={4}
      />
      <PhoneInput
        id="phoneNumber"
        defaultCountry=""
        placeholder="Enter your phone number"
        name="phoneNumber"
        value={
          applicantInfo.phoneNumber ? applicantInfo.phoneNumber : phoneNumber
        }
        onChange={setPhoneNumber}
        minLength={2}
      />
    </>
  );
}
