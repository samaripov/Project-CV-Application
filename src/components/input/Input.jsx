import "./Input.css";

export default function Input({
  label,
  placeholder = label,
  applicantInfo,
  type = "text",
  setApplicantInfo,
}) {
  const handleOnChange = (e) => {
    setApplicantInfo({
      ...applicantInfo,
      [e.target.name]: e.target.value,
    });
  };
  if (applicantInfo[label.toLowerCase()] === undefined) {
    applicantInfo[label.toLowerCase()] = "";
  }

  return (
    <input
      placeholder={placeholder}
      name={label.toLowerCase()}
      value={applicantInfo[label.toLowerCase()]}
      type={type}
      onChange={(e) => handleOnChange(e)}
    ></input>
  );
}
