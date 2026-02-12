import { useState } from "react";

const UserCard = () => {
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  function handleFormSubmit(e) {
    e.preventDefault();

    const newUsers = [...allUsers];
    newUsers.push({ fullName, designation });
    setAllUsers(newUsers);
    setFullName("");
    setDesignation("");
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Your Full Name..."
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Designation..."
          value={designation}
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
        />
        <button onClick={handleFormSubmit}>Create Card</button>
      </form>
      {allUsers.map((user, index) => {
        return (
          <div key={index}>
            <h2>{user.fullName}</h2>
            <h2>{user.designation}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
