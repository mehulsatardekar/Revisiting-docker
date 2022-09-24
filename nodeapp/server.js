const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json([
    {
      name: "alex",
      age: 32,
      position: "SDE1",
      company: "microsoft",
    },
    {
      name: "mehul",
      age: 26,
      position: "SDE1",
      company: "Google",
    },
    {
      name: "roy",
      age: 36,
      position: "SDE3",
      company: "Google",
    },
    {
      name: "simran",
      age: 26,
      position: "SDE1",
      company: "Google",
    },
  ]);
});

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
