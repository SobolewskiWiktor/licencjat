import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
import { createReadStream } from "fs";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/getAll", async (req, res) => {
  try {
    let getter = await prisma.users.findMany();

    res.status(200).json(getter);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    console.log(req.body)
    const saltRounds = 15;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const creater = await prisma.users.create({
      data: {
        Name: String(req.body.name),
        Surname: String(req.body.surname),
        Login: String(req.body.login),
        Password: String(hashedPassword),
        Status: String(req.body.status),
        Title: String(req.body.title),
      },
    });

    res.status(200).json(creater);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/update", async (req, res) => {
  try {
    if (req.body.password == "") {
      const updater = await prisma.users.update({
        where: { ID: Number(req.body.id) },
        data: {
          Name: String(req.body.name),
          Surname: String(req.body.surname),
          Login: String(req.body.login),
          Status: String(req.body.status),
          Title: String(req.body.status),
        },
      });
      res.status(200).json(updater)
    } else {
      const saltRounds = 15;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const updater = await prisma.users.update({
        where: { ID: Number(req.body.id) },
        data: {
          Name: String(req.body.name),
          Surname: String(req.body.surname),
          Login: String(req.body.login),
          Status: String(req.body.status),
          Title: String(req.body.status),
          Password: String(hashedPassword),
        },
      });
      res.status(200).json(updater)
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/delete/:id", async(req,res) => {
  try
  {
    const deleter = await prisma.users.delete({
      where:{ID: Number(req.params.id)}
    })

    res.status(200).json(deleter)
  }catch(err)
  {
    res.status(500).json(err)
  }
})

router.get("/getUserData/:login", async (req,res) => {
  try
  {
    const getter = await prisma.users.findFirst({
      where:
      {
        Login: String(req.params.login)
      }
    })

    res.status(200).json(getter)
  }catch(err)
  {
    res.status(500).json(err)
  }
})
module.exports = router;
