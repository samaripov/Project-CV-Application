import { useState } from "react";
import capitalize from "../../helpers/capitalize";
import Input from "../input/Input";
import lowerCaseFirstChar from "../../helpers/lowerCaseFirstChar";
import editSVG from "../../../public/edit_button.svg";
import EditSVG from "../svgs/editSVG";
export default function FinalViewOrEdit({
  property,
  type = "text",
  applicantInfo,
  setApplicantInfo,
}) {
  const [editFieldName, setEditFieldName] = useState("");

  return (
    <>
      {editFieldName === property.toLowerCase() ? (
        <form
          action={() => setEditFieldName("")}
          className="horizontal-container"
        >
          <Input
            label={lowerCaseFirstChar(property)}
            type={type}
            placeholder={`Edit ${property.toLowerCase()}`}
            applicantInfo={applicantInfo}
            setApplicantInfo={setApplicantInfo}
            minLength={1}
          />
          <button>Update</button>
        </form>
      ) : (
        <>
          <div className="final-view">
            <EditSVG
              onClick={() => setEditFieldName(property.toLowerCase())}
            />
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
