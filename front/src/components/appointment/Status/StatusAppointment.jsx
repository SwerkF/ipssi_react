
import React, {useState, useEffect} from 'react'

export default function StatusAppointment({schedule, onClick}) {

  const [status, setStatus] = useState("booked") // ["booked", "finished", "canceled"]

  useEffect(() => {
    if (schedule.status === "booked") {
      setStatus("booked")
    } else if (schedule.status === "finished") {
      setStatus("finished")
    } else if (schedule.status === "canceled") {
      setStatus("canceled")
    }
  }, [schedule])

  return (
    <>
      {status && (
        <div class="dropdown ">
        <div tabindex="0" role="button" class=" m-1">
          {status === "booked" ? (<div className="badge badge-info text-white font-bold text-sm">À Venir</div> )
          : status === "finished" ? (<div className="badge badge-success text-white font-bold text-sm">Effectué</div>)
          : status === "canceled" ? (<div className="badge badge-error text-white font-bold text-sm">Annulé</div>)
          : (<div className="badge badge-warning text-white font-bold text-sm">Undefined</div>)}
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
          <li>
            <a>
              <div class="badge badge-info text-white font-bold text-sm" onClick={() => onClick('booked')}>À Venir</div>
            </a>
          </li>
          <li>
            <a>
              <div class="badge badge-success text-white font-bold text-sm" onClick={() => onClick('finished')}>Effectué</div>
            </a>
          </li>
          <li>
            <a>
              <div class="badge badge-error text-white font-bold text-sm" onClick={() => onClick('canceled')}>Annulé</div>
            </a>
          </li>
        </ul>
      </div>
      )}
    </>
  )
}
