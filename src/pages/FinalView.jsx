import { useState } from "react";
import Input from "../components/input/Input";

export default function FinalView({ applicantInfo, setApplicantInfo }) {
  const [editFieldName, setEditFieldName] = useState("");

  return (
    <div className="container">
      <h1>Is this correct?</h1>
      {editFieldName === "firstname" ? (
        <form
          action={() => setEditFieldName("")}
          className="horizontal-container"
        >
          <Input
            label="Firstname"
            placeholder="Edit Firstname"
            applicantInfo={applicantInfo}
            setApplicantInfo={setApplicantInfo}
            minLength={1}
          />
          <button>Update</button>
        </form>
      ) : (
        <p onClick={() => setEditFieldName("firstname")}>
          <span>Name: </span>{applicantInfo.firstname}
          <hr />
        </p>
      )}
    </div>
  );
}
