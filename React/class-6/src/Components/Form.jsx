import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Form Submitted!");

    const oldUsers = [...allUsers];
    oldUsers.push(name);
    // console.log(oldUsers);

    setAllUsers(oldUsers);
    setName("");
  };

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
      {allUsers.map((user, index) => {
        return <h1 key={index}>{user}</h1>;
      })}
    </div>
  );
};

export default Form;
