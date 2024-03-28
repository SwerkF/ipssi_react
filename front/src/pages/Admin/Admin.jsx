import React, { useState, useEffect, useContext } from 'react';
import './Admin.scss';
import { UserContext } from '../../App';

import UserAdmin from '../../components/Admin/Users/UserAdmin';
import PetAdmin from '../../components/Admin/Pet/PetAdmin';
import DoctorAdmin from '../../components/Admin/Doctor/DoctorAdmin';

export default function Admin() {
    const [page, setPage] = useState('user');
    const user = useContext(UserContext);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log(user);
        if(!user) {
            window.location.href = '/login';
        } else {
            setLoaded(true);
        }
    }, [user]);

    return (
       <>
            {loaded === false ? <></> : (
                <div className="hero bg-orange-50">
                        <div className="hero-content w-screen">
                            <div className="w-full flex flex-col gap-3">
                                <h1 className="text-5xl font-bold">Admin</h1>
                                <div className="flex flex-row gap-3">
                                    <button onClick={() => setPage('user')} className={`btn ${page === 'user' ? 'btn-active' : ''}`}>Utilisateurs</button>
                                    <button onClick={() => setPage('pet')} className={`btn ${page === 'pet' ? 'btn-active' : ''}`}>Animaux</button>
                                    <button onClick={() => setPage('doctor')} className={`btn ${page === 'doctor' ? 'btn-active' : ''}`}>Vétérinaires</button>
                                </div>
                                <div className="card w-full bg-base-100 shadow-xl p-3">
                                    {page === 'user' && <UserAdmin />}
                                    {page === 'pet' && <PetAdmin />}
                                    {page === 'doctor' && <DoctorAdmin />}
                                </div>
                            </div>
                        </div>
                    </div>
            )}
       </>
        
    )
}
