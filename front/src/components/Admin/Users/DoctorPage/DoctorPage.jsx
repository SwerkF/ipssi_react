import React, {useState, useEffect} from "react";
import "./DoctorPage.scss";
import Input from "../../../Input/Input";
import DoctorAppointment from "../../../Appointment/DoctorAppointment";

const DoctorPage = ({ user, updateStatus }) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setLoading(true);
    }
  }, [loading]);

  const handleUpdateStatus = (status, id) => {
    setLoading(true);
    updateStatus(id, status);
    window.location.reload();
    setLoading(false);
  }

  return (
    <div className="user page">
      <div className="flex justify-between">
        <form>
          <h3>Vos informations</h3>
          <div className="flex flex-row justify-between">
            <Input
              label={"Nom"}
              value={user.lastname}
              onChange={(value) => setNewUser({ ...user, lastname: value })}
            />
            <Input
              label={"Prénom"}
              value={user.firstname}
              onChange={(value) => setNewUser({ ...user, firstname: value })}
            />
          </div>
          <Input
            label={"Email"}
            value={user.email}
            onChange={(value) => setNewUser({ ...user, email: value })}
          />
          <Input
            label={"Mot de passe"}
            value={user.password}
            type={"password"}
            onChange={(value) => setNewUser({ ...user, password: value })}
          />
          <Input
            label={"Nouveau mot de passe"}
            value={user.newPassword}
            onChange={(value) => setNewUser({ ...user, newPassword: value })}
          />
          <button>Sauvegarder les informations</button>
        </form>
        <div className="pets">
          <h3>Vos patients</h3>
          <div className="animals">
            
          </div>
        </div>
      </div>
      {user.userSchedules && (
        <div className="appointments mt-10">
          <h3>Vos rendez vous</h3>
          <div className="flex flex-col gap-5 appointments">
            {user.doctorSchedules.map((schedule, indice) => (
              <div key={indice}>
                <DoctorAppointment key={indice} schedule={schedule} updateStatus={handleUpdateStatus}   />
                <hr class="w-full h-1 mx-auto my-4 bg-primary border-0 rounded md:my-10" />
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorPage;
