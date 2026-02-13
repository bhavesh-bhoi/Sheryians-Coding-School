import { useState } from "react";
import Card from "./Card";

const UsingCardComponent = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userImageURL, setUserImageURL] = useState("");

  // fetch data from localstorage - if empty return empty array
  const localDB = JSON.parse(localStorage.getItem("all-users")) || [];
  const [allUsers, setAllUsers] = useState(localDB);

  const formHandler = (e) => {
    e.preventDefault();

    const oldUsers = [...allUsers];
    oldUsers.push({ userName, userRole, userDescription, userImageURL });
    setAllUsers(oldUsers);

    // Save data in localstorage
    localStorage.setItem("all-users", JSON.stringify(oldUsers));

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
    // delete from localstorage
    localStorage.setItem("all-users", JSON.stringify(usersCopy));
  };
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">
        Create Users
      </h1>

      <form
        className="max-w-4xl mx-auto bg-zinc-900 p-8 rounded-2xl shadow-2xl flex flex-wrap justify-between gap-4"
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          className="bg-black border border-zinc-700 px-5 py-3 rounded-lg w-[48%] outline-none focus:border-emerald-500 transition"
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <input
          className="bg-black border border-zinc-700 px-5 py-3 rounded-lg w-[48%] outline-none focus:border-emerald-500 transition"
          type="text"
          placeholder="Enter Role"
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
        />

        <input
          className="bg-black border border-zinc-700 px-5 py-3 rounded-lg w-[48%] outline-none focus:border-emerald-500 transition"
          type="text"
          placeholder="Enter Description"
          value={userDescription}
          onChange={(e) => {
            setUserDescription(e.target.value);
          }}
        />

        <input
          className="bg-black border border-zinc-700 px-5 py-3 rounded-lg w-[48%] outline-none focus:border-emerald-500 transition"
          type="text"
          placeholder="Image URL"
          value={userImageURL}
          onChange={(e) => {
            setUserImageURL(e.target.value);
          }}
        />

        <button
          className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 transition-all duration-100 px-6 py-3 rounded-lg font-semibold cursor-pointer active:translate-y-0.75 active:translate-x-0.75"
          disabled={!userName || !userRole || !userDescription || !userImageURL}
          type="submit"
        >
          Create User
        </button>
      </form>

      <div className="flex flex-wrap justify-center mt-16 gap-10">
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
