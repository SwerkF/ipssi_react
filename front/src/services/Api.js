const API_BASE_URL = "http://localhost:3000";
const token = localStorage.getItem("token");

const api = {
  //get all pets of a user
  getPetsOfUser: (userId) =>
    fetch(`${API_BASE_URL}/pet/all/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    }).then((response) => response.json()),
  getUserById: (userId) =>
    fetch(`${API_BASE_URL}/user/search/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
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

  //get note of a doctor
  getNoticeUserDoctor: (userId, doctorId) =>
    fetch(`${API_BASE_URL}/notice/doctor/${doctorId}/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
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
  getSchedulesOfUser: (body) =>
    fetch(`${API_BASE_URL}/schedule/user/${doctorId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify(buy),
    }).then((response) => response.json()),

  //body date et doctorId
  //récupérer les rdv d'un user
  getSchedulesOfDoctor: (doctorId) =>
    fetch(`${API_BASE_URL}/schedule/doctor/${doctorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json()),

  //récupérer les rdv d'un docteur
  getAppointmentsYpeByDoctor: (doctorId) =>
    fetch(`${API_BASE_URL}/appointment/doctor/${doctorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
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

  getUserById(userId) {
    return fetch(`${API_BASE_URL}/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    }).then((response) => response.json());
  },
  getAllUsers() {
    return fetch(`${API_BASE_URL}/user/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    }).then((response) => response.json());
  },
  deleteUser(userId) {
    return fetch(`${API_BASE_URL}/user/delete/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    }).then((response) => response.json());
  },
  getAllPets() {
    return fetch(`${API_BASE_URL}/pet/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    }).then((response) => response.json());
  }
};

export { api };
