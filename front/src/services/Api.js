const API_BASE_URL = 'http://localhost:8000';

const api = {
  getPetsOfUser: (userId, accessToken) => fetch(`${API_BASE_URL}/pet/all/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
    body: JSON.stringify(buy),
  }).then(response => response.json()),

  getNoticeUserDoctor: (userId, doctorId,accessToken) => fetch(`${API_BASE_URL}/notice/doctor/${doctorId}/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
    body: JSON.stringify(buy),
  }).then(response => response.json()),

  getCalendarByDoctorId: (doctorId, accessToken) => fetch(`${API_BASE_URL}/calendar/doctor/${doctorId}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
    body: JSON.stringify(buy),
  }).then(response => response.json()),

  getSchedulesOfUser: (doctorId, accessToken) => fetch(`${API_BASE_URL}/schedule/user/${doctorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
    body: JSON.stringify(buy),
  }).then(response => response.json()),

  getSchedulesOfDoctor: (doctorId, accessToken) => fetch(`${API_BASE_URL}/schedule/doctor/${doctorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
    body: JSON.stringify(buy),
  }).then(response => response.json()),

  getSchedulesOfDoctor: (doctorId, accessToken) => fetch(`${API_BASE_URL}/appointment/doctor/${doctorId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
    body: JSON.stringify(buy),
  }).then(response => response.json()),


}