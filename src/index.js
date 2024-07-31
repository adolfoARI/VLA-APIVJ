const express = require("express");
const RouterLogin = require("./Routes/LoginRoute");
const RouterConsole = require("./Routes/ConsoleRoute");
const RouterVideojuegos = require("./Routes/VideosJuegosRoute");

const app = express();
const puerto = 3015;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json());

app.use("/api/route", RouterLogin);
app.use("/api/route", RouterConsole);
app.use("/api/route", RouterVideojuegos);

app.listen(puerto, () => {
  console.log("Se ha refrescado el sitio en puerto: ",puerto);
})