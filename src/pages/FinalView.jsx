import { useState } from "react";
import FinalViewOrEdit from "../components/finalview_or_edit/FinalViewOrEdit";
import FinalViewOrEditPhone from "../components/finalview_or_edit/FinalViewOrEditPhone";
import FinalViewOrSelectDegree from "../components/finalview_or_edit/FinalViewOrSelectDegree";
import FinalViewOrDate from "../components/finalview_or_edit/FinalViewOrDate";
import FinalViewOrEditResponsibilities from "../components/finalview_or_edit/FinalViewOrEditResponsibilities";

export default function FinalView({ applicantInfo, setApplicantInfo }) {
  const [editFieldName, setEditFieldName] = useState("");

  return (
    <div className="container">
      <h1>Is this correct?</h1>
      <h2>General Information</h2>
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
      <FinalViewOrEditPhone
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
      />

      <h2>Education</h2>
      <FinalViewOrEdit
        property="schoolname"
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrSelectDegree
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrEdit
        property="major"
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrDate
        property="startdate_education"
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrDate
        property="enddate_education"
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />

      <h2>Experience</h2>
      <FinalViewOrEdit
        property="companyname"
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrEdit
        property="positiontitle"
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <FinalViewOrEditResponsibilities
        editFieldName={editFieldName}
        setEditFieldName={setEditFieldName}
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
    </div>
  );
}
