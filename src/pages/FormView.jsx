import EducationInformation from "../components/sections/EducationInformation";
import ExperienceInformation from "../components/sections/ExperienceInformation";
import GeneralInformation from "../components/sections/GeneralInformation";

export default function FormView({
  action,
  applicantInfo,
  setApplicantInfo,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <>
      <h1>Tell us about yourself</h1>
      <form className="container" action={action}>
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
        <ExperienceInformation
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <button type="submit">Review Information</button>
      </form>
    </>
  );
}
