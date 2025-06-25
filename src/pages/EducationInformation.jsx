import "react-phone-number-input/style.css";
import { useState } from "react";

import Input from "../components/input/Input.jsx";
import isThereAMissingField from "../helpers/isThereAMissingField.js";
import capitalize from "../helpers/capitalize.js";

export default function EducationInformation({
  applicantInfo,
  setApplicantInfo,
  pageIndex,
  setPageIndex,
}) {
  
  return (
    <>
      <h1>Tell us about your most recent education.</h1>
      <Input
        label="schoolName"
        placeholder="School Name"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
        minLength={1}
      />
      <Input
        label="degree"
        placeholder="Degree (i.e. Bachelors, Associates etc)"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
        minLength={1}
      />
      <Input
        label="startDate"
        placeholder="The start date of your education."
        type="date"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <Input
        label="endDate"
        placeholder="The end date of your education."
        type="date"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
    </>
  );
}
