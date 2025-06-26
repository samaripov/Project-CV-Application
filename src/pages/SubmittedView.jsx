import ApplicantProperty from "../components/applicant_property/ApplicantProperty";

export default function SubmittedView({ applicantInfo }) {
  const responsibilities = applicantInfo.responsibilities.trim().split(". ");
  const listItems = responsibilities.map((responsibility, i) => (
    <li key={`${responsibility}-${i}`}>{responsibility}</li>
  ));
  return (
    <>
      <h1>Application Submitted</h1>
      <p>Information Provided</p>
      <div className="container larger-font">
      <hr />
        <ApplicantProperty applicantInfo={applicantInfo} property="firstname" />
        <ApplicantProperty applicantInfo={applicantInfo} property="lastname" />
        <ApplicantProperty applicantInfo={applicantInfo} property="email" />
        <ApplicantProperty
          applicantInfo={applicantInfo}
          property="phoneNumber"
        />
        <hr />
        <ApplicantProperty
          applicantInfo={applicantInfo}
          property="schoolname"
        />
        <ApplicantProperty applicantInfo={applicantInfo} property="degree" />
        <ApplicantProperty applicantInfo={applicantInfo} property="major" />
        <ApplicantProperty
          applicantInfo={applicantInfo}
          property="startdate_education"
        />
        <ApplicantProperty
          applicantInfo={applicantInfo}
          property="enddate_education"
        />
        <hr />
        <ApplicantProperty
          applicantInfo={applicantInfo}
          property="companyname"
        />
        <ApplicantProperty applicantInfo={applicantInfo} property="positiontitle" />
        <ApplicantProperty applicantInfo={applicantInfo} property="major" />
        <span>Responsobilities:</span>
        <ul>
          {listItems}
        </ul>
        <ApplicantProperty
          applicantInfo={applicantInfo}
          property="startdate_experience"
        />
        <ApplicantProperty
          applicantInfo={applicantInfo}
          property="enddate_experience"
        />
      </div>
    </>
  );
}
