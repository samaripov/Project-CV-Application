import { useState } from "react";
import capitalize from "../../helpers/capitalize";
import lowerCaseFirstChar from "../../helpers/lowerCaseFirstChar";
import EditSVG from "../svgs/editSVG";
import PhoneInput from "react-phone-number-input";

export default function FinalViewOrEditPhone({
  applicantInfo,
  setApplicantInfo,
  editFieldName,
  setEditFieldName,
}) {
  function handlePhoneUpdates(e) {
    const newInfo = {
      ...applicantInfo,
      phoneNumber: e,
    };
    setApplicantInfo(newInfo);
  }
  const property = "phoneNumber";
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
            value={applicantInfo.phoneNumber}
            onChange={handlePhoneUpdates}
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
