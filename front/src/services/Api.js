const API_BASE_URL = 'http://localhost:8000';

const api = {
  getPetsOfUser: (userId, accessToken) => fetch(`${API_BASE_URL}/pet/all/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
  }).then(response => response.json()),

  getNoticeUserDoctor: (userId, doctorId,accessToken) => fetch(`${API_BASE_URL}/notice/doctor/${doctorId}/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
  }).then(response => response.json()),

  getCalendarByDoctorId: (doctorId, accessToken) => fetch(`${API_BASE_URL}/calendar/doctor/${doctorId}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
  }).then(response => response.json()),

    //body date et doctorId
  getSchedulesOfUser: (body, accessToken) => fetch(`${API_BASE_URL}/schedule/user/${doctorId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
    body: JSON.stringify(buy),
  }).then(response => response.json()),

  //body date et doctorId
  getSchedulesOfDoctor: (body, accessToken) => fetch(`${API_BASE_URL}/schedule/doctor/${doctorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
    body: JSON.stringify(body),
  }).then(response => response.json()),

  getAppointmentByDoctor: (doctorId, accessToken) => fetch(`${API_BASE_URL}/appointment/doctor/${doctorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
  }).then(response => response.json()),


}

export { api };
