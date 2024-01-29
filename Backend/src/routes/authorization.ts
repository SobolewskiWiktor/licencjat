import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/", async (req, res) => {
    try {
        const token =  String(req.body.token);
        const decodedToken = jwt.verify(token, '[Zvf9T730x7/[uzZUriBf£Ts');
        res.status(200).json(decodedToken);
      } catch (error) {
        console.error('[ERROR] - Błąd weryfikacji tokenu:', error);
        res.status(200).json(error)
      }
})
module.exports = router;
