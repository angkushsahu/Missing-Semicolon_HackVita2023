import { connect, set } from "mongoose";

const db_url = process.env.DB_URI || "mongodb://127.0.0.1:27017/cultivate-exchange";
set("strictQuery", false);

connect(db_url)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));
