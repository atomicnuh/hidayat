const express = require("express");

const bodyParser = require("body-parser");

// const v1Router = require("./v1/routes");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");


const app = express();
const PORT = process.env.POR || 3000;

const apicache = require("apicache");

const cache = apicache.middleware;

// app.get("/", (req,res) => {
//     res.send("<h2>this is ahbeng the bot</h2>");
// });

// app.use("/api/v1", v1Router);

app.use(bodyParser.json());

app.use(cache("2 minutes"));


//now this will call different method handled in controller for each different endpoints
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});