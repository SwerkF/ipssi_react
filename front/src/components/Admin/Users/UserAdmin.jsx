import React, { useState, useEffect } from 'react';
import './UserAdmin.scss';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../services/Api';
import UserAdminItem from './UserItem/UserAdminItem';

export default function UserAdmin(props) {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getAllUsers().then(res => {
      setUsers(res);
    });
  }, []);


  const handleCheckAll = (e) => {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.checked = e.target.checked;
    });
  }


  return (
    <div className="w-full flex flex-col gap-3 p-4">
      <h1 className="text-5xl font-bold">Utilisateurs</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox bg-gray-200" onClick={handleCheckAll} />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Pets</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserAdminItem key={index} user={user} onDelete={props.onDelete} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Pets</th>
              <th></th>
            </tr>
          </tfoot>
          
        </table>
      </div>
    </div>
  )
}
