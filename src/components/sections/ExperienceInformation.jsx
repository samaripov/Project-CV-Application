import "react-phone-number-input/style.css";

import Input from "../input/Input.jsx";

export default function ExperienceInformation({
  applicantInfo,
  setApplicantInfo,
}) {
  return (
    <>
      <h2>Do you have any relevant experience?</h2>
      <Input
        label="companyName"
        placeholder="Company Name"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
        minLength={2}
      />
      <Input
        label="positionTitle"
        placeholder="Position Title"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
        minLength={1}
      />
      <textarea
        id="responsibilities"
        name="responsibilities"
        placeholder="What were your responsibilities?"
        value={
          applicantInfo.responsibilities === undefined
            ? ""
            : applicantInfo.responsibilities
        }
        onChange={(e) => {
          const newInfo = {
            ...applicantInfo,
            responsibilities: e.target.value,
          };
          setApplicantInfo(newInfo);
        }}
        minLength={3}
      />
      <div className="horizontal-container">
        <Input
          label="startDate_Experience"
          placeholder="The start date of your experience."
          type="date"
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <Input
          label="endDate_Experience"
          placeholder="The end date of your experience."
          type="date"
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
      </div>
    </>
  );
}
