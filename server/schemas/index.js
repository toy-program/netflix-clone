const mongoose = require("mongoose");

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect("mongodb://localhost:27017/netflix", err => {
      if (err) {
        console.error("mongodb 연결 에러: ", err);
      } else {
        console.log("mongodb 연결 성공");
      }
    });
  };
  connect();

  mongoose.connection.on("error", err => {
    console.error("mongodb 연결 에러 (connection on 'error'): ", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.error("mongodb 연결이 끊어졌습니다. 연결을 재시도 합니다.");
    connect();
  });

  require("./user");
  require("./drama");
  require("./movie.js");
};
