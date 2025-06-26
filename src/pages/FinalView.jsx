import { useState } from "react";
import FinalViewOrEdit from "../components/finalview_or_edit/FinalViewOrEdit";
import PhoneInput from "react-phone-number-input";

export default function FinalView({ applicantInfo, setApplicantInfo }) {
  const [editFieldName, setEditFieldName] = useState("");

  return (
    <div className="container">
      <h1>Is this correct?</h1>
      <FinalViewOrEdit
        property="firstname"
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrEdit
        property="lastname"
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrEdit
        property="email"
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        type="email"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      
    </div>
  );
}
