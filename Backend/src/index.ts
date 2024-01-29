import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const cors = require('cors');
const prisma = new PrismaClient()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const allowedOrigins = ['http://localhost:3000', 'http://http://cochise.pro.work-time.pl/'];

app.use(cors());
console.log("⚒️ [BUILDING BACKEND]")
console.log("❗[================]")
console.log("📋[RELEASE: 1/28.01.2024]")

app.use("/api/login", require("./routes/login"));
app.use("/api/authorization", require("./routes/authorization"));
app.use("/api/gethostid", require ("./routes/hostID"))
app.use("/api/devicestatus", require ("./routes/deviceStatus"))
app.use("/api/getactionid", require("./routes/actionID"))

app.listen(port, () => {
  console.log(`⚡️[SERWER]: Server is running at localhost:${port}`);
});