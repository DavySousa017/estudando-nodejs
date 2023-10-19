const express = require("express");
const routes = express.Router();

const accounts = [];

routes.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { name, email, password };

  const register = () => {
    accounts.push(newUser);
  };

  const emailExists = (email) => {
    return accounts.some((account) => account.email === email);
  };

  if (name && email && password) {
    if (!emailExists(email)) {
      register(newUser);
      return res
        .status(200)
        .json({ messege: "Usuário registrado com sucesso", accounts });
    } else {
      return res.status(401).json({ messege: "Endereço de email em uso" });
    }
  } else {
    return res.status(401).json({ messege: "Verifique todos os campos." });
  }
});

routes.post("/login", (req, res) => {
  const { email, password } = req.body;

  const login = accounts.find(
    (account) => account.email === email && account.password === password
  );

  if (login) {
    return res.status(200).json(accounts);
  } else {
    return res
      .status(401)
      .json({ messege: "Verifique o campos de Email e Senha." });
  }
});

module.exports = routes;
