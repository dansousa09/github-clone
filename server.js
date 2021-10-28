const express = require("express");
const { path, resolve } = require("path");

const app = express();

app.use("/", express.static(resolve(__dirname, "./build")));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("server working...");
});

app.get("*", (req, res) => {
  let url = path.join(__dirname, "../client/build", "index.html");
  if (!url.startsWith("/app/"))
    // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});
