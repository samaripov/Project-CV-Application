import { useState } from "react";
import "./App.css";
import Input from "./components/input/Input.jsx"

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
          placeholder="email@example.com"
          type="email"
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
