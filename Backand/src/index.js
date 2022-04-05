const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose
  .connect(
    "mongodb+srv://Marcos:aRQGEbiWbzfL9t6R@cluster0.t8sib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(app.listen(3333));

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

// server.listen(3334);
