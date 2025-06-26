import { useState } from "react";
import capitalize from "../../helpers/capitalize";
import Input from "../input/Input";
import lowerCaseFirstChar from "../../helpers/lowerCaseFirstChar";

export default function FinalViewOrEdit({
  property,
  type="text",
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
        <p onClick={() => setEditFieldName(property.toLowerCase())}>
          <span>{capitalize(property)}: </span>
          {applicantInfo[lowerCaseFirstChar(property)]}
          <hr />
        </p>
      )}
    </>
  );
}
