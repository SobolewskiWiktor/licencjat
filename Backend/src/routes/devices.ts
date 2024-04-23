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
    let getter = await prisma.devices.findMany();

    res.status(200).json(getter);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/create", async(req,res) => {
    try
    {
        const creater = await prisma.devices.create({
            data:
            {
                Name: String(req.body.name),
                Manufacturer: String(req.body.manufacturer),
                Model: String(req.body.model),
                SerialNumber: String(req.body.serial),
                Type: String(req.body.type),
                NumberOfPorts: String(req.body.numberOfPorts),
                SpeedOfPorts: String(req.body.speedPorts),
                City: String(req.body.city),
                Street: String(req.body.street),
                Room: String(req.body.room),
                Floor: String(req.body.floor),
                Priority: String(req.body.priority),
                NumberOfStreet: String(req.body.numberBuilding),
                Status: String("Aktywny")
            }
        })

        res.status(200).json(creater)
    }catch(err)
    {
        res.status(500).json(err)
    }
})

router.post("/update", async(req,res) => {
    try
    {
        const updater = await prisma.devices.update({
            where:{ID: Number(req.body.id)},
            data:
            {
                Name: String(req.body.name),
                Manufacturer: String(req.body.manufacturer),
                Model: String(req.body.model),
                SerialNumber: String(req.body.serial),
                Type: String(req.body.type),
                NumberOfPorts: String(req.body.numberOfPorts),
                SpeedOfPorts: String(req.body.speedPorts),
                City: String(req.body.city),
                Street: String(req.body.street),
                Room: String(req.body.room),
                Floor: String(req.body.floor),
                Priority: String(req.body.priority),
                NumberOfStreet: String(req.body.numberBuilding),
                Status: String(req.body.status)
            }
        })

        res.status(200).json(updater)        
    }catch(err)
    {
        res.status(500).json(err)
    }
})

router.post("/delete/:id", async(req,res) => {
    try
    {
        const deleter = await prisma.devices.delete({where:{ID: Number(req.params.id)}})

        res.status(200).json(deleter)
    }catch(err)
    {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get(`/getData/:id`, async(req,res) => {
    try
    {
        const getter = await prisma.devices.findFirst({
            where:
            {
                ID: Number(req.params.id)
            }
        })

        res.status(200).json(getter)
    }catch(err)
    {
        res.status(500).json(err)
    }
})




module.exports = router;
