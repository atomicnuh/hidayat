const Record = require("../database/Record");

const getAllRecords = (workoutId) => {
  try {
    const allRecord = Record.getAllRecords(workoutId);
    return allRecord;
  } catch (error) {
    throw error;
  }
};

const getOneRecord = (workoutId) => {
    try {
      const record = Record.getOneRecord(workoutId);
      return record;
    } catch (error) {
      throw error;
    }
  };
module.exports = { 
    getAllRecords,
    getOneRecord
};