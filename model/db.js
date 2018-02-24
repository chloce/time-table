import mongoose from "mongoose";
import config from "../config/default.json";
const dbConfig = config.Todo.dbConfig;
const dbURI = `mongodb://${dbConfig.host}/${dbConfig.dbName}`;

mongoose.connection.on("connected", function() {
    console.log("connected to MongoDB:" + dbURI);
});

mongoose.connection.on("error", function(err) {
    console.error("MongoDB connection error: " + err);
    process.exit(-1);
});

const promise = mongoose.connect(dbURI, {
    useMongoClient: true
});
