import EducationInformation from "../components/sections/EducationInformation";
import GeneralInformation from "../components/sections/GeneralInformation";
import ExperienceEducation from "../components/sections/ExperienceInformation";

export default function FormView({
  action,
  applicantInfo,
  setApplicantInfo,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <>
      <form className="container" action={action}>
        <h1>Tell us about yourself</h1>
        <GeneralInformation
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
        <EducationInformation
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <ExperienceEducation
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <button type="submit">Review Information</button>
      </form>
    </>
  );
}
