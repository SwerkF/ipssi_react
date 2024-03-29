import React, {useState, useEffect, useContext} from 'react'
import './Admin.scss'
import {UserContext} from '../../App'
import {api} from '../../services/Api'

import UserAdmin from '../../components/Admin/Users/UserAdmin'
import PetAdmin from '../../components/Admin/Pet/PetAdmin'
import DoctorAdmin from '../../components/Admin/Doctor/DoctorAdmin'
import Swal from 'sweetalert2'
import {api} from '../../services/Api'

export default function Admin() {
    const [page, setPage] = useState('user')
    const user = useContext(UserContext)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!user) {
            setLoaded(false)
        } else {
            setLoaded(true)
        }
    }, [user])

    const handleDelete = (e) => {
        Swal.fire({
            title: 'Êtes-vous sur de votre suppression ?',
            showDenyButton: true,
            confirmButtonText: `Supprimer`,
            denyButtonText: `Annuler`,
        }).then((result) => {
            if (result.isConfirmed) {
                if (page === 'user' || page === 'doctor') {
                    api.deleteUser(e.target.id).then((res) => {})
                } else if (page === 'pet') {
                    api.deletePet(e.target.id).then((res) => {})
                }
            } else if (result.isDenied) {
                Swal.fire('Suppression annulée', '', 'info')
            }
        })
    }

    const handleUpdate = (e) => {}

    return (
        <>
            {loaded === false ? (
                <></>
            ) : (
                <div className="hero bg-orange-50">
                    <div className="hero-content w-screen">
                        <div className="w-full flex flex-col gap-3">
                            <h1 className="text-5xl font-bold">Admin</h1>
                            <div className="flex flex-row gap-3">
                                <button
                                    onClick={() => setPage('user')}
                                    className={`btn ${
                                        page === 'user' ? 'btn-active' : ''
                                    }`}>
                                    Utilisateurs
                                </button>
                                <button
                                    onClick={() => setPage('pet')}
                                    className={`btn ${
                                        page === 'pet' ? 'btn-active' : ''
                                    }`}>
                                    Animaux
                                </button>
                                <button
                                    onClick={() => setPage('doctor')}
                                    className={`btn ${
                                        page === 'doctor' ? 'btn-active' : ''
                                    }`}>
                                    Vétérinaires
                                </button>
                            </div>
                            <div className="card w-full bg-base-100 shadow-xl p-3">
                                {page === 'user' && (
                                    <UserAdmin onDelete={handleDelete} />
                                )}
                                {page === 'pet' && (
                                    <PetAdmin onDelete={handleDelete} />
                                )}
                                {page === 'doctor' && (
                                    <DoctorAdmin onDelete={handleDelete} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
