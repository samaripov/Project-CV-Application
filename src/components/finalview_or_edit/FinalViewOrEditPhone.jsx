import { useState } from "react";
import capitalize from "../../helpers/capitalize";
import Input from "../input/Input";
import lowerCaseFirstChar from "../../helpers/lowerCaseFirstChar";
import EditSVG from "../svgs/editSVG";
export default function FinalViewOrEdit({
  property,
  type = "text",
  applicantInfo,
  setApplicantInfo,
}) {
  const [phoneNumber, setPhoneNumber] = useState(applicantInfo.phoneNumber);

  return (
    <>
      {editFieldName === property.toLowerCase() ? (
        <form
          action={() => setEditFieldName("")}
          className="horizontal-container"
        >
          <PhoneInput
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={setPhoneNumber}
            minLength={2}
          />
          <button>Update</button>
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
