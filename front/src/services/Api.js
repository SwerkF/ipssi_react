const API_BASE_URL = "http://localhost:3000";
const token = localStorage.getItem("token");

const api = {
  //get all pets of a user
  getPetsOfUser: (userId) =>
    fetch(`${API_BASE_URL}/pet/all/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((response) => response.json()),

  //get all doctors
  getAllDoctors: (name) =>
    fetch(`${API_BASE_URL}/user/allDoctors?name=${name ? name : ""}`, {
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
      },
    }).then((response) => response.json()),

  //get all pets of a user
  getAllPetInformationById: (petId) =>
    fetch(`${API_BASE_URL}/pet/search/${petId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
        Authorization: token,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json()),

  //body date et doctorId
  //récupérer les rdv d'un user
  getSchedulesOfDoctor: (body, doctorId) =>
    fetch(`${API_BASE_URL}/schedule/doctor/${doctorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json()),

  addSchedule(appointment) {
    return fetch(`${API_BASE_URL}/schedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(appointment),
    }).then((response) => response.json());
  },

  //récupérer les rdv d'un docteur
  getAppointmentsYpeByDoctor: (body, doctorId) =>
    fetch(`${API_BASE_URL}/appointment/doctor/${doctorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json()),

  //get all of a user
  getAllOfUser: (userId) =>
    fetch(`${API_BASE_URL}/user/search/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((response) => response.json()),

  //récupérer le bureau d'un docteur
  getOfficeByDoctor: (officeId) =>
    fetch(`${API_BASE_URL}/office/one/${officeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((response) => response.json()),

  getUserById(userId) {
    return fetch(`${API_BASE_URL}/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((response) => response.json());
  },

  getAllUsers() {
    return fetch(`${API_BASE_URL}/user/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((response) => response.json());
  },

  deleteUser(userId) {
    return fetch(`${API_BASE_URL}/user/delete/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((response) => response.json());
  },

  getAllPets() {
    return fetch(`${API_BASE_URL}/pet/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((response) => response.json());
  },

  handleUpdateStatus(scheduleId, status) {
    return fetch(`${API_BASE_URL}/schedule/update/${scheduleId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ status }),
    }).then((response) => console.log("udpated"));
  },

  createNewPet: (body) =>
    fetch(`${API_BASE_URL}/pet/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    }).then((response) => response.json()),

    getAllSchedulesOfUser: (userId) =>  {
      return fetch(`${API_BASE_URL}/schedule/all/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }).then((response) => response.json());
    },
    
};

export { api };
