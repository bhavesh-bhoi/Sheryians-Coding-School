import { useState } from "react";
import Card from "./Card";

const UsingCardComponent = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userImageURL, setUserImageURL] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    // const oldUsers = [...allUsers];
    // oldUsers.push({ userName, userRole, userDescription, userImageURL });
    setAllUsers([
      ...allUsers,
      { userName, userRole, userDescription, userImageURL },
    ]);

    // console.log(oldUsers);

    setUserName("");
    setUserRole("");
    setUserDescription("");
    setUserImageURL("");

    console.log(userName, userRole, userDescription, userImageURL);
  };

  const deleteHandler = (index) => {
    const usersCopy = [...allUsers];
    usersCopy.splice(index, 1);

    setAllUsers(usersCopy);
  };
  return (
    <div className="h-full bg-black text-white">
      <h1 className="text-3xl text-center">Form</h1>

      <form
        className="flex flex-wrap p-2 justify-center"
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          className="border-2 px-5 py-2 rounded m-2 w-[45%] outline-none"
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className="border-2 px-5 py-2 rounded m-2 w-[45%] outline-none"
          type="text"
          placeholder="Enter Role"
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
        />
        <input
          className="border-2 px-5 py-2 rounded m-2 w-[45%] outline-none"
          type="text"
          placeholder="Enter Description"
          value={userDescription}
          onChange={(e) => {
            setUserDescription(e.target.value);
          }}
        />
        <input
          className="border-2 px-5 py-2 rounded m-2 w-[45%] outline-none"
          type="text"
          placeholder="Image URL"
          value={userImageURL}
          onChange={(e) => {
            setUserImageURL(e.target.value);
          }}
        />
        <button
          className="border-2 px-5 py-2 rounded m-2 w-[91%] outline-none bg-emerald-500 active:scale-95"
          type="submit"
        >
          Create User
        </button>
      </form>
      <div className="flex flex-wrap p-20 gap-10">
        {allUsers.map((elem, index) => {
          return (
            <Card
              key={index}
              index={index}
              elem={elem}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsingCardComponent;
