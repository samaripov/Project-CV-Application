import { useState } from "react";
import FinalViewOrEdit from "../components/finalview_or_edit/FinalViewOrEdit";
import PhoneInput from "react-phone-number-input/input";

export default function FinalView({ applicantInfo, setApplicantInfo }) {
  const [phoneNumber, setPhoneNumber] = useState(applicantInfo.phoneNumber);
  return (
    <div className="container">
      <h1>Is this correct?</h1>
      <FinalViewOrEdit
        property="firstname"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrEdit
        property="lastname"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrEdit
        property="email"
        type="email"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <PhoneInput
        placeholder="Enter your phone number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={setPhoneNumber}
        minLength={2}
      />
    </div>
  );
}
