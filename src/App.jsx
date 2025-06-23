import { useState } from "react";
import "./App.css";

function App() {
  const [applicantInfo, setApplicantInfo] = useState({});

  const handleOnChange = (e) => {
    setApplicantInfo({
      ...applicantInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>General Information</h1>
      <form className="container" action={handleSubmit}>
        <input
          placeholder="Firstname"
          name="Firstname"
          value={applicantInfo.firstname}
          onChange={(e) => handleOnChange(e)}
        ></input>
        <input
          placeholder="Lastname"
          name="Lastname"
          value={applicantInfo.lastname}
          onChange={(e) => handleOnChange(e)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
