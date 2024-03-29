import React, { useEffect, useState } from "react";
import "./CardAppointment.scss";
import ResumeDoctor from "../ResumeDoctor/ResumeDoctor";
import { api } from "../../services/Api";
import CardSchedule from "../Card/CardSchedule/CardSchedule";

const CardAppointment = ({ doctor , setModalActive, inputDate, loadModal }) => {
  const [calendar, setCalendar] = useState([]);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [showAll, setShowAll] = useState(false);  
  const [schedule, setSchedule] = useState([]);
  const currentDate = new Date();
  const [startDay, setStartDay] = useState(
    new Date(),
  );

  useEffect(() => {
    const newDate = new Date(inputDate);
    newDate.setDate(newDate.getDate() - 1);

    const today = new Date(); // Obtenir la date actuelle
    if (newDate > today) {
      setStartDay(newDate);
    } 
}, [inputDate]);


  useEffect(() => {

    api.getCalendarByDoctorId(doctor.id).then((data) => {
      setCalendar(data);
      setDaysOfWeek(getDaysOfWeek(data)); // Initialiser les jours de la semaine ici
    });
  }, [doctor.id]);

  useEffect(() => {
    setDaysOfWeek(getDaysOfWeek(calendar));
  }, [startDay])

  const nextWeek = () => {
    const newStart = new Date(startDay);
    newStart.setDate(newStart.getDate() + 6);
    setStartDay(newStart);
  };

  const prevWeek = () => {
    const newStart = new Date(startDay);
    newStart.setDate(newStart.getDate() - 6);

    if (newStart < new Date()) {
      setStartDay(new Date());
    } else {
      setStartDay(newStart);
    }
  };

  const generateDayOfWork = (day, calendar) => {
    const slots = [];
    
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const date = day.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}T`;

    const workStart = new Date(`${formattedDate}${calendar.startWorkAt}`);
    const workEnd = new Date(`${formattedDate}${calendar.endWorkAt}`);
    const lunchStart = new Date(`${formattedDate}${calendar.lunchBreakStartedAt}`);
    const lunchEnd = new Date(`${formattedDate}${calendar.lunchBreakEndedAt}`);

    const startTime = (day >= 1 && day <= 5 && workStart < lunchStart) ? lunchEnd : workStart;
    let currentTime = new Date(startTime);

    // Ajouter les créneaux horaires tant que l'heure actuelle est avant l'heure de fin de travail
    while (currentTime < workEnd) {
      // Vérifier si l'heure actuelle est pendant la pause déjeuner, si oui, sauter cette période
      if (currentTime >= lunchStart && currentTime < lunchEnd) {
        currentTime = new Date(currentTime.getTime() + 60 * 60 * 1000); // Ajouter 1 heure pour sauter la pause déjeuner
        continue;
      }

      // Ajouter l'heure actuelle comme créneau horaire
      slots.push({
        day: new Date(currentTime),
        hour: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      // Passer à l'heure suivante en ajoutant 30 minutes (durée d'un rendez-vous)
      currentTime = new Date(currentTime.getTime() + 30 * 60 * 1000);
    }
    return slots;
  };

  const isWorkingDuringThisDay = (intDay, calendar) => {
    switch (intDay) {
      case 0: // Dimanche
        return calendar.isWorkingOnSunday;
      case 1: // Lundi
        return calendar.isWorkingOnMonday;
      case 2: // Mardi
        return calendar.isWorkingOnTuesday;
      case 3: // Mercredi
        return calendar.isWorkingOnWednesday;
      case 4: // Jeudi
        return calendar.isWorkingOnThursday;
      case 5: // Vendredi
        return calendar.isWorkingOnFriday;
      case 6: // Samedi
        return calendar.isWorkingOnSaturday;
      default:
        return false; // Par défaut, on retourne faux
    }
  };

  const getDaysOfWeek = (calendar) => {
    const days = [];
    const currentDate = new Date(startDay); // Utiliser startDay au lieu de la date actuelle
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + 6);

    while (currentDate <= endDate) {
      const dayOfWeek = currentDate.getDay(); // Récupère le jour de la semaine (0 pour dimanche, 1 pour lundi, etc.)
      const isWorking = isWorkingDuringThisDay(dayOfWeek, calendar);
      if (isWorking) {
        const dayOfWork = generateDayOfWork(currentDate, calendar);
        const options = { month: 'long' };
        const nameMonth = currentDate.toLocaleString('fr-FR', options);
        days.push({
          timing: dayOfWork,
          dayName: currentDate.toLocaleDateString('fr-FR', { weekday: 'long' }),
          day: currentDate.getDate(),
          month: nameMonth
        });
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  };

  return (
    <>
      <div className="appointment flex mx-5 mt-5 bg-white rounded-lg shadow-lg">
        <div className="flex card-doctor justify-around w-2/3 mx-10 items-center">
          <div className="resume-container w-full">
            <ResumeDoctor doctor={doctor} />
          </div>
          <div className="separation"></div>
        </div>
        <div className="w-full container-sechedule m-10 item-center justify-center flex flex-col">

          <div className="flex items-center w-full ">
            <i
              className={`bx bx-left-arrow-alt ${startDay.toDateString() === new Date().toDateString() ? 'arrow-disabled' : ''}`}
              onClick={prevWeek}
            ></i>

            <CardSchedule daysOfWeek={daysOfWeek} showAll={showAll} setShowAll={setShowAll} setModalActive={setModalActive} doctor={doctor} />
            <i className='bx bx-right-arrow-alt ml-3' onClick={nextWeek}></i>
          </div>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Afficher moins' : 'Afficher tout'}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardAppointment;