const express = require("express");
const path = require("path");
const os = require("os");
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const routers = require("./routers");

const PORT = process.env.PORT || 4000;

app.use(logger("dev"));
app.use(helmet());
app.use(express.static(path.join(__dirname, "../", "public/")));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", routers);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something Broke" });
});

app.listen(PORT, () => {
  console.log(`Server is on ${PORT}`);
});
