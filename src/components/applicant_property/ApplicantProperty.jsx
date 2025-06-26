import capitalize from "../../helpers/capitalize";
import lowerCaseFirstChar from "../../helpers/lowerCaseFirstChar";

export default function ApplicantProperty({ property, applicantInfo }) {
  let title = capitalize(property);
  if (property.includes("date")) {
    const words = property.split("_");
    title = `${capitalize(words[1])} ${words[0].replace("date", "")}`;
  }
  return (
    <>
      <div className="horizontal-container">
        <span>{title}: </span>
        {applicantInfo[lowerCaseFirstChar(property)]}
      </div>
    </>
  );
}
