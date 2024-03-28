import React, { useEffect, useState } from "react";
import "./Appointment.scss";
import Stars from "../Stars/Stars";
import ResumeDoctor from "../ResumeDoctor/ResumeDoctor";
import { api } from "../../services/Api";

const API_BASE_URL = 'http://localhost:3000/images/';

export default function({ doctor }) {
    const [notice, setNotice] = useState({
        rating: null,
        description: ''
    })
    
    return (
        <div className='appointment flex w-full'>
            <div className='flex w-1/2 items-center'>
                <div className='doctor flex flex-col h-full justify-around py-10'>
                    <div className='flex'>
                        <img src={`${API_BASE_URL}${doctor.avatar}`}/>
                        <div className='flex flex-col'>
                            <h6>Docteur Richtofen E.</h6>
                            <Stars notation={1.4} size={'md'} />
                        </div>
                    </div>
                    <p>83 Rue de la Villette, 75001 PARIS</p>
                    <button className='p-2'>Prendre un rendez-vous</button>
                </div>
                
                <ResumeDoctor doctor={doctor} />
                    

                <div className="separation mx-10"></div>
                <div className='appointment flex flex-col'>
                    <div className="state flex">
                        <h6 className='mr-10'>Status</h6>
                        <p>A venir</p>
                    </div>
                    <p className="date">
                        22/02/2024
                    </p>
                    <div className="detail flex">
                        <div className='flex flex-col'>
                            <h6>Rendez-vous pour</h6>
                            <div className='flex flex-col'>
                                <img />
                                <p>Max</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h6>Horaires:</h6>
                            <p className="hour-meeting p-2">
                                9:20 - 10:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
              <h6>Horaires:</h6>
              <p className="hour-meeting p-2">9:20 - 10:00</p>
            </div>
            <div className="notice flex flex-col w-1/2">
                <div className="flex mb-5">
                <h6 className="mr-3">Avis</h6>
                <Stars notation={2.4} size={"md"} />
                </div>
                <textarea className="p-5" name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
  );
}
