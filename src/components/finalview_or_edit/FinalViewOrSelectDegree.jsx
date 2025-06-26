import capitalize from "../../helpers/capitalize";
import lowerCaseFirstChar from "../../helpers/lowerCaseFirstChar";
import EditSVG from "../svgs/editSVG";

export default function FinalViewOrSelectDegree({
  applicantInfo,
  setApplicantInfo,
  editFieldName,
  setEditFieldName,
}) {
  function handleOnChange(e) {
    const newInfo = {
      ...applicantInfo,
      degree: e.target.value,
    };
    setApplicantInfo(newInfo);
  }
  const property = "degree";
  return (
    <>
      {editFieldName === property.toLowerCase() ? (
        <form
          action={() => setEditFieldName("")}
          className="horizontal-container"
        >
          <select
            name="degree"
            id="degree"
            placeholder="Degree Level"
            value={
              applicantInfo.degree !== undefined ? applicantInfo.degree : ""
            }
            onChange={handleOnChange}
          >
            <option value="">Select</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Masters">Masters</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Associates">Associates</option>
            <option value="High School Diploma">High School Diploma</option>
          </select>
          <button>Done</button>
        </form>
      ) : (
        <>
          <div className="final-view">
            <EditSVG onClick={() => setEditFieldName(property.toLowerCase())} />
            <div>
              <h4>{capitalize(property)}: </h4>
              {applicantInfo[lowerCaseFirstChar(property)]}
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
}
