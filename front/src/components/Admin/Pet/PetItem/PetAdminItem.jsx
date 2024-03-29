import React, { useEffect, useState } from 'react';
import Button from '../../../Button/Button';


export default function PetAdminItem(props) {

    return (
        <tr>
            <th>
            <label>
                <input type="checkbox" className="checkbox bg-gray-200" />
            </label>
            </th>
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={`http://localhost:3000/images/${props.pet.avatar}`} alt="avatar" />
                    </div>
                </div>
                <div>
                <div className="font-bold">{props.pet.name}</div>
                <div className="text-sm opacity-50 uppercase">{props.pet.specie}</div>
                </div>
            </div>
            </td>
            <td>
                {props.pet.gender === "male" ? (
                    <div className="badge bg-blue-100 gap-2">
                        M.
                    </div>
                ) : (
                    <div className="badge bg-pink-100 gap-2">
                        F.
                    </div>
                )}
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={`http://localhost:3000/images/${props.pet.owner.avatar}`} alt="avatar" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{props.pet.owner.firstname} {props.pet.owner.lastname}</div>
                        <div className="text-sm opacity-50 uppercase">{props.pet.owner.role}</div>
                    </div>
                </div>
        </td>
            <th>
                <div className="d-flex flex-row gap-5">
                    <Button onClick={props.onDelete} id={props.pet.id} className="btn btn-error text-white" icon="bx bx-trash"/>
                </div>
                
            </th>
        </tr>
    )
}
