// Importing mongoose library
const mongoose = require("mongoose");

// Connecting to the MongoDB database
mongoose
  .connect(process.env.MONGO_URI, { // Connect to the URI stored in the .env file
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
  })
  .then(() => console.log("success connect")) // If connection is successful, log a message
  .catch((e) => console.log(e.message)); // If there's an error, log the error message

