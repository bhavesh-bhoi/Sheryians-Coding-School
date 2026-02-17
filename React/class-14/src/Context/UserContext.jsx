import React, { createContext } from "react";

export const UserDataContext = createContext();

const user = 'Bhavesh'

const UserContext = (props) => {
  return (
    <div className="context-div">
      <UserDataContext.Provider value={user}>
        <h1>{props.children}</h1>
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
