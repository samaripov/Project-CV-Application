import { useState } from "react";
import "./App.css";

function Input({ label, applicantInfo, setApplicantInfo }) {
  const handleOnChange = (e) => {
    setApplicantInfo({
      ...applicantInfo,
      [e.target.name]: e.target.value,
    });
  };
  if (applicantInfo[label.toLowerCase()] === undefined) {
    applicantInfo[label.toLowerCase()] = "";
  }

  const specialTypes = ["email", "number"];
  return (
    <input
      placeholder={label}
      name={label.toLowerCase()}
      value={applicantInfo[label.toLowerCase()]}
      type={
        specialTypes.includes(label.toLowerCase())
          ? label.toLowerCase()
          : "text"
      }
      onChange={(e) => handleOnChange(e)}
    ></input>
  );
}

function App() {
  const [applicantInfo, setApplicantInfo] = useState({});

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>General Information</h1>
      <form className="container" action={handleSubmit}>
        <Input
          label="Firstname"
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <Input
          label="Lastname"
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <Input
          label="email"
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
