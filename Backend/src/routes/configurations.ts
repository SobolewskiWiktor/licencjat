import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
import { createReadStream } from "fs";
const jwt = require("jsonwebtoken");
const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/getAll", async (req, res) => {
  try {
    let getter = await prisma.configurations.findMany();

    res.status(200).json(getter);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/getDevide/:name", async (req, res) => {
    try {
      let getter = await prisma.configurations.findFirst({
        where:
        {
            NameOfDeveice: String(req.params.name)
        }
      });
  
      res.status(200).json(getter);
    } catch (err) {
      res.status(500).json(err);
    }
});
router.post("/create", async (req,res) => {
    try
    {
        const creater = await prisma.configurations.create({
            data:{
                NameOfDeveice: String(req.body.device),
                Description: String(req.body.description)
            }
        })

        res.status(200).json(creater)
    }catch(err)
    {
        res.status(500).json(err)
    }
})
router.post("/update", async (req,res) => {
    try{
        const updater = await prisma.configurations.update({
            where:
            {
                ID: Number(req.body.id)
            },
            data:
            {
                NameOfDeveice: String(req.body.device),
                Description: String(req.body.description)
            }
        })

        res.status(200).json(updater)
    }catch(err)
    {
        res.status(500).json(err)
    }
})


  



module.exports = router;
