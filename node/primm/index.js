const express = require("express");
const apiRouter = require("./routes/api");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/api", apiRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
