import React, { useEffect, useState } from "react";
import "./Appointment.scss";
import Stars from "../Stars/Stars";
import ResumeDoctor from "../ResumeDoctor/ResumeDoctor";
import { api } from "../../services/Api";
import StatusAppointment from "./Status/StatusAppointment";

const API_BASE_URL = "http://localhost:3000/images/";

export default function DoctorAppointment({schedule, updateStatus}) {
    const [notice, setNotice] = useState({
        rating: null,
        description: "",
    });
    const [doctor, setDoctor] = useState("");
    const [pet, setPet] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getAllOfUser(schedule.doctorId).then((data) => {
            setDoctor(data);
            
        });
        api.getAllPetInformationById(schedule.petId).then((data) => {
            setPet(data);
            setLoading(false);
        
        });
    }, [loading]);

    const handleUpdateStatus = (status) => {
        setLoading(true);
        updateStatus(status, schedule.id);
        setLoading(false);
    }

    
    return (
        <>
            {pet && doctor ? (
                <div className="appointment flex w-full">
                <div className="flex items-center">
                    {/* Resume animal */}
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col items-center">
                            <img src={`${API_BASE_URL}${pet.avatar}`} className="rounded-full w-40" />
                            <p className="text-2xl font-bold text-primary">{pet.name}</p>
                        </div>
                        <div className="owner">
                            <h6>Propriétaire</h6>
                            <p className="text-center">{pet.owner.firstname} {pet.owner.lastname}</p>
                            <p className="text-center">{pet.owner.email}</p>
                        </div>
                    </div>
                    <div className="separation mx-10"></div>
                    <div className="flex flex-col">
                        <div className="state flex">
                            <StatusAppointment schedule={schedule} onClick={handleUpdateStatus} />
                        </div>
                        <p className="date text-">
                            {`${new Date(schedule.date)
                            .getDate()
                            .toString()
                            .padStart(2, "0")}/${(new Date(schedule.date).getMonth() + 1)
                            .toString()
                            .padStart(2, "0")}/${new Date(schedule.date).getFullYear()}`}{" "}
                        </p>
                        <div className="detail flex">

                            <div className="flex flex-col">
                            <h6>Horaires:</h6>
                            <p className="hour-meeting p-2 text-center">
                                {new Date(schedule.date).toLocaleTimeString().toString().slice(0,5)}
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ):
            (
                "Chargement en cours..."
            )
            }
        </>
    )
}
