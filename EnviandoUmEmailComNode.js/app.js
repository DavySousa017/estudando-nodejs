const express = require("express");
const nodemailer = require("nodemailer");
app = express();
port = 3000;

const user = "norene.hammes16@ethereal.email";
const password = "xRUcqEUxWPfZcGJf7h";

app.get("/", (req, res) => res.send("Hello Word!"));
app.get("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: user,
      pass: password,
    },
  });

  transporter
    .sendMail({
      from: "d4vy.sousa@gmail.com",
      to: "d4vy.sousa@gmail.com",
      replyTo: "d4vy.sousa@gmail.com",
      subject: "Enviando o primeiro email",
      text: "Hello Word!",
    })
    .then((info) => {
      res.send(info);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}!`));
