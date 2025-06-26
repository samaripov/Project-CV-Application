import capitalize from "../../helpers/capitalize";
import Input from "../input/Input";
import EditSVG from "../svgs/editSVG";

export default function FinalViewOrDate({
  property,
  applicantInfo,
  setApplicantInfo,
  editFieldName,
  setEditFieldName,
}) {
  const words = property.split("_")
  const title = `${capitalize(words[1])} ${words[0].replace("date", "")}:`
  return (
    <>
      {editFieldName === property.toLowerCase() ? (
        <form
          action={() => setEditFieldName("")}
          className="horizontal-container"
        >
          <div className="horizontal-container">
            <Input
              label={property.toLowerCase()}
              placeholder="The start date of your experience."
              type="date"
              applicantInfo={applicantInfo}
              setApplicantInfo={setApplicantInfo}
            />
          </div>
          <button>Done</button>
        </form>
      ) : (
        <>
          <div className="final-view">
            <EditSVG onClick={() => setEditFieldName(property.toLowerCase())} />
            <div>
              <h4>{title}</h4>
              {applicantInfo[property.toLowerCase()]}
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
}
