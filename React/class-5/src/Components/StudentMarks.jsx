import { useState } from "react";

const StudentMarks = () => {
  const [marks, setMarks] = useState([45, 76, 36, 89, 29]);

  function addGraceMarks() {
    let newMarks = marks.map(function (mark) {
      if (mark <= 33) {
        return mark + 5;
      } else {
        return mark;
      }
    });

    setMarks(newMarks);
  }
  return (
    <div>
      {marks.map(function (mark, index) {
        return (
          <h1 key={index}>
            Marks of Subject {index} : {mark} ({mark >= 33 ? "PASS" : "FAIL"})
          </h1>
        );
      })}
      <button onClick={addGraceMarks}>Add Grace</button>
    </div>
  );
};

export default StudentMarks;
