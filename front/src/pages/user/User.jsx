import React, { useState, useEffect, useContext } from "react";
import "./User.scss";
import UserPage from "../../components/Admin/Users/UserPage/UserPage";
import DoctorPage from "../../components/Admin/Users/DoctorPage/DoctorPage";
import { UserContext } from "../../App";
import { api } from "../../services/Api";

export default function User() {
  
  const [page, setPage] = useState("user");
  const user = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!user) {
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  }, [user, loaded]);

  const updateScheduleStatus = (id, status) => {
    setLoaded(false);
    api.handleUpdateStatus(id, status).then((res) => {
      setLoaded(true)
    });
  }
  
  return (
    <>
      {loaded === false ? (
        <></>
      ) : (
        <>
          {user && user.role === "user" || user.role === "admin" ? (
            <UserPage user={user} />
          ) : (
            <DoctorPage user={user} updateStatus={updateScheduleStatus} />
          )}
        </>
      )}
    </>
  );
}
