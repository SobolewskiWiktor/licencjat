import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
const axios = require('axios');
import test from "../../configs/zabbixApiConfig"
const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/getActionID", async (req, res) => {
    try
    {
        const targetHostName = String(req.body.device)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        let getFromApi = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'item.get',
            params: {
              output: ['itemid', 'name', 'key_'],
              hostids: targetHostName,
            },
            auth: authToken,
            id: 1,
          })
        const actionIds = []; 
        const parameterName = ["ICMP Ping", "Operational status", "Uptime", "System description", "Firmware version", "Hardware serial number", "CPU utilization", "Memory utilization", "Hardware model name"]
        for(let i=0; i<getFromApi.data.result.length; i++)
        {
            const matchingParameter = parameterName.find(param => getFromApi.data.result[i].name.includes(param));
            const indexMatchingParameter = parameterName.indexOf(parameterName.find(param => getFromApi.data.result[i].name.includes(param)) || 0);
            if(matchingParameter)
            {
                let parameter = {
                    name: String(parameterName[indexMatchingParameter]),
                    id:  String(getFromApi.data.result[i].itemid)
                }

                actionIds.push(parameter)
            }
        }
        res.status(200).json(actionIds)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
module.exports = router;

