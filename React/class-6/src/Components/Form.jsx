import { useState } from "react";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    setName("");
  };

  const [name, setName] = useState("");

  return (
    <div className="formContainer">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="name">
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            id=""
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
