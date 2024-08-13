const workoutRecords = require("../services/recordService");

const getAllRecords = (req, res) => {
    try {
      const allRecordsForWorkout = workoutRecords.getAllRecords();
      res.send({ status: "OK", data: allRecordsForWorkout });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOneRecord = (req, res) => {
    const {
      params: { workoutId },
    } = req;
    if (!workoutId) {
      res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':workoutId' can not be empty" },
        });
    }
    try {
      const record = workoutRecords.getOneRecord(workoutId);
      res.send({ status: "OK", data: record });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };

module.exports = {
    getAllRecords,
    getOneRecord
};