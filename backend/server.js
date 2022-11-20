// This is kind of like the entry file for the backend application.
// It's where we're going to register the Express app.

// Use .env
require("dotenv").config();

// Import
const express = require("express");
const workoutRoutes = require("./routes/workout");
const sql = require("mssql/msnodesqlv8");
<<<<<<< HEAD

const mongoose = require("mongoose");
=======
>>>>>>> 52a24985024ab9844af9b872a8ff8c491cca3755

// Declare
const app = express();

// Middleware
//  - In order to access request.body object
app.use(express.json);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// Connect to db
// const sqlConfig = {
//   database: "SASKI_Dev",
//   server: "DESKTOP-L4KGN47",
//   driver: "msnodesqlv8",
//   options: {
//     trustedConnection: true,
//   },
// };

// sql
//   .connect(sqlConfig)
//   .then(() => {
//     console.log("DB connect successfully");

//     try {
//       // const result =
//       //   await sql.query`select * from [user] where UserID = 'user001'`;
//       // console.dir(result);

//       // Listen for requests
//       app.listen(process.env.PORT, () => {
//         console.log(`Running on port ${process.env.PORT}`);
//       });
//     } catch (e) {
//       console.log(e.message);
//     }
//   })
//   .catch((err) => console.log(`Failed to connect with error: ${err}`));

// Connect to db (MongoDB)
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    console.log("DB connected successfully");
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
