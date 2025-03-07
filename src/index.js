//index.js
import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";
import cors from "cors";

dotenv.config();

const app = express(); // Instancia o Express
const port = 3000; // Define a porta

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(roteadorLogin);
app.use(roteadorUsuario);

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  // Cria a rota da raiz do projeto
  res.json({
    nome: "Rhuan Spósito de Almeida", // Substitua pelo seu nome
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});