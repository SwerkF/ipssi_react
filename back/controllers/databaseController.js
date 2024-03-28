const sequelize = require("../bdd/database");
const Pet = require("../models/petModel");
const User = require("../models/userModel");
const Calendar = require("../models/calendarModel");

exports.initialized = async (req, res) => {
  await sequelize.query(`
    CREATE PROCEDURE InsertOffice(
      IN officeId VARCHAR(36),
      IN officeName VARCHAR(255),
      IN officeCity VARCHAR(255),
      IN officeAddress TEXT
    )
    BEGIN
        INSERT INTO office (id, name, city, address, createdAt, updatedAt)
        VALUES (officeId, officeName, officeCity, officeAddress, NOW(), NOW());
    END
  `);
  await sequelize.query(`
    CREATE PROCEDURE InsertUser(
      IN userId VARCHAR(36),
      IN userFirstName VARCHAR(255),
      IN userLastName VARCHAR(255),
      IN userEmail VARCHAR(255),
      IN userPassword VARCHAR(255),
      IN userRole ENUM('admin', 'doctor', 'user'),
      IN userOfficeId VARCHAR(255),
      IN userAvatar VARCHAR(255)
    )
    BEGIN
        INSERT INTO user (id, firstname, lastname, email, password, role, officeId, avatar, createdAt, updatedAt)
        VALUES (userId, userFirstName, userLastName, userEmail, userPassword, userRole, userOfficeId, userAvatar, NOW(), NOW());
    END
  `);
  await sequelize.query(`
    CREATE PROCEDURE InsertPet(
      IN petId VARCHAR(36),
      IN petName VARCHAR(255),
      IN petGender ENUM('male', 'female'),
      IN petColor VARCHAR(255),
      IN petSpecie VARCHAR(255),
      IN petWeight INT,
      IN petHeight INT,
      IN petBirthDate DATE,
      IN petAvatar VARCHAR(255),
      IN ownerId VARCHAR(36)
    )
    BEGIN
      INSERT INTO pet (id, name, gender, color, specie, weight, height, birth_date, avatar, id_owner, createdAt, updatedAt)
      VALUES (petId, petName, petGender, petColor, petSpecie, petWeight, petHeight, petBirthDate, petAvatar, ownerId, NOW(), NOW());
    END`);
  await sequelize.query(`
    CREATE PROCEDURE InsertAppointmentType(
      IN typeId VARCHAR(36),
      IN typePrize FLOAT,
      IN typeName VARCHAR(255),
      IN typeDuration INT,
      IN typeDoctorId VARCHAR(36)
    )
    BEGIN
      INSERT INTO appointmentType (id, prize, name, duration, doctorId, createdAt, updatedAt)
      VALUES (typeId, typePrize, typeName, typeDuration, typeDoctorId, NOW(), NOW());
    END
  `);
  await sequelize.query(`
  CREATE PROCEDURE InsertCalendar(
    IN calendarId VARCHAR(36),
    IN lunchBreakEndedAt TIME,
    IN lunchBreakStartedAt TIME,
    IN isWorkingOnSunday BOOLEAN,
    IN isWorkingOnMonday BOOLEAN,
    IN isWorkingOnTuesday BOOLEAN,
    IN isWorkingOnWednesday BOOLEAN,
    IN isWorkingOnThursday BOOLEAN,
    IN isWorkingOnFriday BOOLEAN,
    IN isWorkingOnSaturday BOOLEAN,
    IN startWorkAt TIME,
    IN endWorkAt TIME,
    IN userId VARCHAR(36)
  )
  BEGIN
    INSERT INTO calendar (id, lunchBreakEndedAt, lunchBreakStartedAt, isWorkingOnSunday, isWorkingOnMonday, isWorkingOnTuesday, isWorkingOnWednesday, isWorkingOnThursday, isWorkingOnFriday, isWorkingOnSaturday, startWorkAt, endWorkAt, userId, createdAt, updatedAt)
    VALUES (calendarId, lunchBreakEndedAt, lunchBreakStartedAt, isWorkingOnSunday, isWorkingOnMonday, isWorkingOnTuesday, isWorkingOnWednesday, isWorkingOnThursday, isWorkingOnFriday, isWorkingOnSaturday, startWorkAt, endWorkAt, userId, NOW(), NOW());
  END
  `);
  await sequelize.query(`
    CREATE PROCEDURE InsertNotice(
      IN noticeId VARCHAR(36),
      IN noticeName VARCHAR(255),
      IN noticeDescription TEXT,
      IN noticeRating INT,
      IN noticeDoctorId VARCHAR(36),
      IN noticeUserId VARCHAR(36),
    )
    BEGIN
      INSERT INTO notice (id, name, description, rating, doctorId, userId, createdAt, updatedAt)
      VALUES (noticeId, noticeName, noticeDescription, noticeRating, noticeDoctorId, noticeUserId, NOW(), NOW());
    END
  `);
  await sequelize.query(`
    CREATE PROCEDURE InsertSchedule(
      IN scheduleId VARCHAR(36),
      IN scheduleAddress TEXT,
      IN scheduleStatus ENUM('booked', 'canceled', 'finished'),
      IN scheduleDoctorId VARCHAR(36),
      IN scheduleAppointmentTypeId VARCHAR(36),
      IN schedulePetId VARCHAR(36),
      IN schedulerUserId VARCHAR(36),
    )
    BEGIN
      INSERT INTO schedule (id, address, status, doctorId, appointmentTypeId, petId, userId, createdAt, updatedAt)
      VALUES (scheduleId, scheduleDate, scheduleStatus, scheduleDoctorId, scheduleAppointmentTypeId, schedulePetId, scheduleUserId, NOW(), NOW());
    END
  `);
  await sequelize.query(
    `CALL InsertOffice('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421b', 'Vetovie', 'Paris', '23 rue Cuvellier')`
  );
  await sequelize.query(
    `CALL InsertOffice('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421c', 'Clinique vétérinaire XYZ', 'Lyon', '8 rue des Vétérinaires')`
  );
  await sequelize.query(
    `CALL InsertOffice('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421d', 'VetoService', 'Marseille', '15 avenue des Animaux')`
  );
  await sequelize.query(
    `CALL InsertOffice('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421e', 'Clinique des animaux', 'Bordeaux', '12 rue du Chien')`
  );
  await sequelize.query(`
    CALL InsertUser('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421n', 'Marie', 'Dupont', 'admin@example.com', '$2b$10$JEnU9jzibYGMOtAdyXlsleADzMXbYdg/LLu8KYJ58NwZ5zM2uduze', 'admin', NULL, 'admin1.png')
  `);
  await sequelize.query(`
    CALL InsertUser('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f', 'Julien', 'Martin', 'doctor1@example.com', '$2b$10$JEnU9jzibYGMOtAdyXlsleADzMXbYdg/LLu8KYJ58NwZ5zM2uduze', 'doctor', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421b', 'doctor1.png')
  `);
  await sequelize.query(`
    CALL InsertUser('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g', 'Manon', 'Lambert', 'doctor2@example.com', '$2b$10$JEnU9jzibYGMOtAdyXlsleADzMXbYdg/LLu8KYJ58NwZ5zM2uduze', 'doctor', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421c', 'doctor2.png')
  `);
  await sequelize.query(`
    CALL InsertUser('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h', 'Thomas', 'Dubois', 'doctor3@example.com', '$2b$10$JEnU9jzibYGMOtAdyXlsleADzMXbYdg/LLu8KYJ58NwZ5zM2uduze', 'doctor', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421d', 'doctor3.png')
  `);
  await sequelize.query(`
    CALL InsertUser('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i', 'Camille', 'Moreau', 'user1@example.com', '$2b$10$JEnU9jzibYGMOtAdyXlsleADzMXbYdg/LLu8KYJ58NwZ5zM2uduze', 'user', NULL, 'user1.png')
  `);
  await sequelize.query(`
    CALL InsertUser('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421j', 'Lucas', 'Petit', 'user2@example.com', '$2b$10$JEnU9jzibYGMOtAdyXlsleADzMXbYdg/LLu8KYJ58NwZ5zM2uduze', 'user', NULL, 'user2.png')
  `);
  await sequelize.query(`
    CALL InsertUser('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421k', 'Anaïs', 'Girard', 'user3@example.com', '$2b$10$JEnU9jzibYGMOtAdyXlsleADzMXbYdg/LLu8KYJ58NwZ5zM2uduze', 'user', NULL, 'user3.png')
  `);
  await sequelize.query(`
    CALL InsertUser('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421l', 'Antoine', 'Leroy', 'user4@example.com', '$2b$10$JEnU9jzibYGMOtAdyXlsleADzMXbYdg/LLu8KYJ58NwZ5zM2uduze', 'user', NULL, 'user4.png')
  `);
  await sequelize.query(`
    CALL InsertUser('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421m', 'Émilie', 'Simon', 'user5@example.com', '$2b$10$JEnU9jzibYGMOtAdyXlsleADzMXbYdg/LLu8KYJ58NwZ5zM2uduze', 'user', NULL, 'user5.png')
  `);
  await sequelize.query(`
  CALL InsertPet('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421o', 'Max', 'male', 'Marron', 'Chien', 10, 50, '2022-01-15', 'dog1.png', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i');
  `);
  await sequelize.query(`
CALL InsertPet('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421p', 'Bella', 'female', 'Blanc', 'Chat', 5, 30, '2021-11-20', 'cat1.png', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i');
`);

  await sequelize.query(`
CALL InsertPet('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421q', 'Rocky', 'male', 'Noir', 'Chien', 8, 45, '2020-09-10', 'dog2.png', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i');
`);

  await sequelize.query(`
CALL InsertPet('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421r', 'Luna', 'female', 'Gris', 'Chat', 4, 25, '2023-03-05', 'cat2.png', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421j');
`);

  await sequelize.query(`
CALL InsertPet('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421s', 'Simba', 'male', 'Marron', 'Chat', 6, 35, '2022-05-12', 'cat3.png', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421j');
`);

  await sequelize.query(`
CALL InsertPet('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421t', 'Daisy', 'female', 'Blanc et marron', 'Chien', 7, 40, '2021-07-08', 'dog3.png', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421m');
`);

  await sequelize.query(`
CALL InsertPet('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421u', 'Charlie', 'male', 'Noir et blanc', 'Chien', 9, 55, '2020-12-25', 'dog4.png', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421m');
`);

  await sequelize.query(`
CALL InsertPet('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421v', 'Whiskers', 'male', 'Gris et blanc', 'Chat', 3, 20, '2023-01-30', 'cat4.png', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421m');
`);

  await sequelize.query(`
CALL InsertAppointmentType('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422e', 50.0, 'Examen de routine', 30, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f');
`);

  await sequelize.query(`
CALL InsertAppointmentType('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422f', 80.0, 'Vaccination', 45, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f');
`);

  await sequelize.query(`
CALL InsertAppointmentType('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422g', 100.0, 'Consultation chirurgicale', 60, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f');
`);

  await sequelize.query(`
CALL InsertAppointmentType('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422h', 120.0, 'Nettoyage dentaire', 45, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g');
`);

  await sequelize.query(`
CALL InsertAppointmentType('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422i', 90.0, 'Examen par radiographie', 60, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g');
`);

  await sequelize.query(`
CALL InsertAppointmentType('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422j', 150.0, "Soins d'urgence", 90, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g');
`);

  await sequelize.query(`
CALL InsertAppointmentType('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422k', 70.0, 'Échographie', 45, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h');
`);

  await sequelize.query(`
CALL InsertAppointmentType('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422l', 110.0, 'Test sanguin', 60, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h');
`);

  await sequelize.query(`
CALL InsertAppointmentType('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422m', 200.0, 'Consultation spécialiste', 90, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h');
`);
  await sequelize.query(`
  CALL InsertCalendar('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421w', '12:00:00', '13:00:00', 0, 1, 1, 1, 1, 1, 1, '08:00:00', '18:00:00', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f')
`);

  await sequelize.query(`
  CALL InsertCalendar('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421x', '13:00:00', '14:00:00', 0, 1, 1, 1, 1, 1, 1, '08:30:00', '17:30:00', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g')
`);

  await sequelize.query(`
  CALL InsertCalendar('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421y', '12:30:00', '13:30:00', 0, 1, 1, 1, 1, 1, 1, '09:00:00', '18:00:00', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h')
`);
  await sequelize.query(`
CALL InsertNotice('dc67f5e9-d1f6-4ba1-9b16-b0eaf526421z', 'Service excellent', "J'ai emmené mon chien pour un examen et le service était excellent. Le personnel était sympathique et professionnel. Hautement recommandé !", 5, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i');
`);

  await sequelize.query(`
CALL InsertNotice('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422a', 'Expérience formidable', "J'ai emmené mon chat pour la vaccination et ce fut une expérience formidable dans l'ensemble. Le vétérinaire était compétent et attentionné.", 4, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421i');
`);

  await sequelize.query(`
CALL InsertNotice('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422b', 'Personnel sympathique', 'Le personnel de cette clinique est très sympathique et serviable. Ils ont pris grand soin de mon chien pendant son opération.', 5, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421j');
`);

  await sequelize.query(`
CALL InsertNotice('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422c', 'Je recommande vivement', "Je viens ici avec mes animaux depuis des années et j'ai toujours eu une expérience positive. Les médecins sont compétents et les prix sont raisonnables.", 5, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421k');
`);

  await sequelize.query(`
CALL InsertNotice('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422d', 'Personnel attentionné', "Le personnel ici se soucie vraiment des animaux. Ils ont fait tout leur possible pour que mon chien soit à l'aise pendant son séjour.", 4, 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421m');
`);
  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422n', '2024-02-16', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422e', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421o')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422o', '2024-02-17', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421p')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422p', '2024-02-18', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422g', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421q')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422q', '2024-02-19', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422h', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421r')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422r', '2024-02-20', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422i', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421s')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422s', '2024-02-21', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422e', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421t')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422t', '2024-02-22', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422e', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421u')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422w', '2024-02-23', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421v')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422y', '2024-02-24', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421o')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526422z', '2024-02-25', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421f', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422g', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421p')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526423a', '2024-02-26', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421g', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422g', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421q')
`);

  await sequelize.query(`
CALL InsertSchedule('dc67f5e9-d1f6-4ba1-9b16-b0eaf526423b', '2024-02-27', 'booked', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526422g', 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421r')
`);

  res.status(200).json("All");
};

exports.createAllTable = async (req, res) => {
  try {
    await sequelize.sync({ alter: true });
    res.status(200).json("All good");
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
};
