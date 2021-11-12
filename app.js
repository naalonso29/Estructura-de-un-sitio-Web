const express = require("express");
const app = express();
const path = require("path");

app.set("port", 3030);

app.listen(app.get("port"), () => console.log("Servidor Corriendo"));

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, './views', 'home.html')) });

app.use(express.static('./public'));