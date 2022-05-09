import ReactDOM from "react-dom";
import React, { useState } from "react";

import Users from "./Users"
import AddUser from "./AddUser"

const App = () => {
  const [users, setUsers] = useState([]);

  return(
      <section style={{display: "flex"}}>
      <AddUser setUsers={setUsers} />
      <Users users={users} setUsers={setUsers}/>
      </section>
  )
}




ReactDOM.render(<App/>, document.getElementById("app"));
