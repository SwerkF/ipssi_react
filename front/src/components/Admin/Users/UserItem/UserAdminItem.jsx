import React, { useEffect, useState } from "react";
import Button from "../../../Button/Button";

export default function UserAdminItem(props) {
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
              <img
                src={`http://localhost:3000/images/${props.user.avatar}`}
                alt="avatar"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {props.user.firstname} {props.user.lastname}
            </div>
            <div className="text-sm opacity-50 uppercase">
              {props.user.role}
            </div>
          </div>
        </div>
      </td>
      <td>{props.user.email}</td>
      <td>
        {props.user.pets ? (
          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
            {props.user.pets.map((pet, index) => (
              <div key={index} className="avatar w-8 h-8">
                <div className="mask mask-squircle">
                  <img
                    src={`http://localhost:3000/images/${pet.avatar}`}
                    alt="avatar"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm opacity-50">No pets</div>
        )}
      </td>
      <th>
        <div className="d-flex flex-row gap-5">
          <Button
            onClick={props.onDelete}
            id={props.user.id}
            className="btn btn-error text-white"
            icon="bx bx-trash"
          />
        </div>
      </th>
    </tr>
  );
}
