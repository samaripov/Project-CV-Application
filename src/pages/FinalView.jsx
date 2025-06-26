import { useState } from "react";

export default function FinalView({ applicantInfo }) {
  const [editId, setEditId] = useState("");
  return (
    <div className="container">
      <h1>General Information</h1>
      <p>{applicantInfo.firstname}</p>
    </div>
  );
}
