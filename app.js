const express = require("express");

const app = express();

app.set("view engine", "ejs");

// middleware
app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.render("home", { title: "Homepage 🏠" });
});

app.get("/services", (req, res) => {
  res.render("services", { title: "Services 👷" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact ☎️" });
});

// start server
app.listen(3000);
