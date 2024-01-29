import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
const axios = require('axios');
import test from "../../configs/zabbixApiConfig"
const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/getDeviceID", async (req, res) => {
    try
    {
        const targetHostName = String(req.body.device)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        let getFromApi = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'host.get',
            params: {
              output: ['hostid'],
              filter: {
                host: [targetHostName],
              },
            },
            auth: authToken,
            id: 1,
          })
        let deviceID = getFromApi.data.result
        
        res.status(200).json(deviceID)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
module.exports = router;

