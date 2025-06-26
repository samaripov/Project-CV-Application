import EditSVG from "../svgs/editSVG";

export default function FinalViewOrEditResponsibilities({
  applicantInfo,
  setApplicantInfo,
  editFieldName,
  setEditFieldName,
}) {
  function handleOnChange(e) {
    const newInfo = {
      ...applicantInfo,
      responsibilities: e.target.value,
    };
    setApplicantInfo(newInfo);
  }

  const responsibilities = applicantInfo.responsibilities.trim().split(". ");
  const listItems = responsibilities.map((responsibility, i) => (
    <li key={`${responsibility}-${i}`}>{responsibility}</li>
  ));

  return (
    <>
      {editFieldName === "responsibilities" ? (
        <form
          action={() => setEditFieldName("")}
          className="container take-full-width"
        >
          <textarea
            id="responsibilities"
            name="responsibilities"
            placeholder="What were your responsibilities?"
            value={applicantInfo.responsibilities}
            onChange={handleOnChange}
            minLength={3}
          />
          <button>Done</button>
        </form>
      ) : (
        <>
          <div className="final-view">
            <EditSVG onClick={() => setEditFieldName("responsibilities")} />
            <div>
              <h4>Responsibilities: </h4>
              <ul>
                {listItems}
              </ul>
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
}
