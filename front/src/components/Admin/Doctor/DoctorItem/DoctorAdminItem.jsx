import React, { useEffect, useState } from 'react';
import Button from '../../../Button/Button';

export default function UserAdminItem(props) {

    console.log(props.user)

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
                            <img src={`http://localhost:3000/images/${props.user.avatar}`} alt="avatar" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{props.user.firstname} {props.user.lastname}</div>
                        <div className="text-sm opacity-50 uppercase">{props.user.role}</div>
                    </div>
                </div>
            </td>
            <td>
                {props.user.email}
            </td>
            <td>
                {props.user.doctorAppointments.length > 0 ? (
                    <div className="text-center">
                        <span className="badge badge-success">{props.user.doctorAppointments.length}</span>
                    </div>
                ) : (
                    <div className="text-center">
                        <span className="badge badge-error">0</span>
                    </div>
                
                )}
            </td>
            <th>
                <div className="d-flex flex-row gap-5">
                    <Button onClick={props.onDelete} id={props.user.id} className="btn btn-error text-white" icon="bx bx-trash"/>
                </div>
                
            </th>
        </tr>
    )
}
