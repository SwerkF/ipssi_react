import React, { useState, useEffect, useContext } from "react";
import "./User.scss";
import UserPage from "../../components/Admin/Users/UserPage/UserPage";
import { UserContext } from "../../App";

export default function User() {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(userContext);
    console.log(userContext);
  }, [userContext]);
  return user && <UserPage user={user} />;
}
