const mongoose = require("mongoose");

const MongoURI =
  "mongodb+srv://puskarroy300:puskar@cluster0.puevpg2.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(MongoURI)
  .then(() => console.log("Database Connected!"))
  .catch((e) => console.log(e));
