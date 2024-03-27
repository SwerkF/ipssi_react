import React, { useState, useEffect } from 'react';
import './UserAdmin.scss';
import { useNavigate } from 'react-router-dom';
export default function UserAdmin() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/user/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(res => {
      setUsers(res);
      console.log(res);
    }).catch(err => {
      navigate('/login');
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
                  <input type="checkbox" className="checkbox" onClick={handleCheckAll} />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Animals</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">

                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.firstname} {user.lastname}</div>
                      <div className="text-sm opacity-50">{user.role}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br/>
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
          
        </table>
      </div>
    </div>
  )
}
