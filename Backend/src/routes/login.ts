import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/", async (req, res) => {
  if (!req.body || !req.body.login || !req.body.password) {
    res.status(200).json("Bad Parameters");
    console.log("[ERROR] - Bledne dane w /api/login ", req.body);
    return;
  }
  try {
    const getter = await prisma.users.findMany({
      where: {
        Login: String(req.body.login),
      },
      select: {
        Password: true,
      },
    });
    if(getter.length == 0)
    {
        res.status(401).json("Bad login");
        return;
    }
    
    const match = await bcrypt.compare(
      String(req.body.password),
      getter[0].Password
    );
    console.log(match)
    if (match) {
      const token = jwt.sign(
        { Login: req.body.login, Backend: 'E=]t3;j}5AN>czSXR8)HhY' },
        "[Zvf9T730x7/[uzZUriBf£Ts"
      );
      res.status(200).json(token);
      return;
    } else {
      res.status(401).json("Bad login");
      return;
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
module.exports = router;
