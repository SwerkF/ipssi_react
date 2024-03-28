import React, { useEffect, useState } from 'react';
import './PetAdmin.scss';
import { api } from '../../../services/Api';
import PetAdminItem from './PetItem/PetAdminItem';

export default function PetAdmin(props) {

  const [pets, setPets] = useState([]);

  useEffect(() => {
   api.getAllPets().then(res => {
     setPets(res);
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
      <h1 className="text-5xl font-bold">Animaux</h1>
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
              <th>Genre</th>
              <th>Owner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet, index) => (
              <PetAdminItem key={index} pet={pet} onDelete={props.onDelete} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Genre</th>
              <th>Owner</th>
              <th>Actions</th>
            </tr>
          </tfoot>
          
        </table>
      </div>
    </div>
  )
}
