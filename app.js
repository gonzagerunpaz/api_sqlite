const express = require("express");
const db = require("./db/models");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/user", async (req, res) => {
  const data = await db.User.findAll({});
  res.status(200).json(data);
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const data = await db.User.findByPk(id);
  if (data) res.status(200).json(data);
  else res.status(404).json({ mensaje: `El ${id} no se encuentra` });
});

app.listen(PORT, () => {
  console.log(`App iniciada en el puerto ${PORT}.`);
  //Esta line se tiene que comentar, es solo de desarrollo
  //db.sequelize.sync({force: true});
});
