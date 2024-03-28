<<<<<<< HEAD
const API_BASE_URL = 'http://localhost:3000';

const api = {
  //get all pets of a user
  getPetsOfUser: (userId, accessToken) => fetch(`${API_BASE_URL}/pet/all/user/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
  }).then(response => response.json()),

  getUserById: (userId, accessToken) => fetch(`${API_BASE_URL}/user/search/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
  }).then(response => response.json()),
=======
const API_BASE_URL = "http://localhost:3000";

const api = {
  //get all pets of a user
  getPetsOfUser: (userId, accessToken) =>
    fetch(`${API_BASE_URL}/pet/all/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    }).then((response) => response.json()),

  //get all doctors
  getAllDoctors: () =>
    fetch(`${API_BASE_URL}/user/allDoctors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),
>>>>>>> 1a78af98f09b161e81ddca4b913c36d83d812bcf

  //get note of a doctor
  getNoticeUserDoctor: (userId, doctorId, accessToken) =>
    fetch(`${API_BASE_URL}/notice/doctor/${doctorId}/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    }).then((response) => response.json()),

  //get calendar by a doctor
  getCalendarByDoctorId: (doctorId) =>
    fetch(`${API_BASE_URL}/calendar/doctor/${doctorId}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  //body date et doctorId
  //récupérer les rdv d'un user
  getSchedulesOfUser: (body, accessToken) =>
    fetch(`${API_BASE_URL}/schedule/user/${doctorId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify(buy),
    }).then((response) => response.json()),

  //body date et doctorId
  //récupérer les rdv d'un user
  getSchedulesOfDoctor: (body, accessToken) =>
    fetch(`${API_BASE_URL}/schedule/doctor/${doctorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json()),

  //récupérer les rdv d'un docteur
  getAppointmentsYpeByDoctor: (doctorId, accessToken) =>
    fetch(`${API_BASE_URL}/appointment/doctor/${doctorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    }).then((response) => response.json()),

  //récupérer le bureau d'un docteur
  getOfficeByDoctor: (officeId) =>
    fetch(`${API_BASE_URL}/office/one/${officeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),
};

export { api };
