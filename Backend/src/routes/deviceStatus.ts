import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";
const axios = require('axios');
import test from "../../configs/zabbixApiConfig"
const prisma: PrismaClient = new PrismaClient();
const router: Router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/getUptime", async (req, res) => {
    try
    {
        const deviceID = String(req.body.device)
        const actionID = String(req.body.action)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        const getter = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'history.get',
            params: {
              output: 'extend',
              itemids: actionID,
              sortfield: 'clock',
              sortorder: 'DESC',
              limit: 1, // Ilość wartości do pobrania
            },
            auth: authToken,
            id: 1,
          })
          res.status(200).json(getter.data.result[0].value)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
router.post("/getOs", async (req,res) => {
    try
    {
        const deviceID = String(req.body.name)
        const actionID = String(req.body.action)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        const getter = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'history.get',
            params: {
              output: "extend",
              history: 1,
              itemids: actionID,
              sortfield: "clock",         
              sortorder: "DESC",
              limit: 1, // Ilość wartości do pobrania
            },
            auth: authToken,
            id: 1,
          })
          res.status(200).json(getter.data.result[0].value)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
router.post("/getCpuUtil", async (req,res) => {
    try
    {
        const deviceID = String(req.body.device)
        const actionID = String(req.body.action)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        const getter = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'history.get',
            params: {
              output: "extend",
              history: 0,
              itemids: actionID,
              sortfield: "clock",         
              sortorder: "DESC",
              limit: 60, // Ilość wartości do pobrania
            },
            auth: authToken,
            id: 1,
          })
          let cpuUtilHistory = [];
          for(let  i=0; i<getter.data.result.length; i++)
          {
            cpuUtilHistory.push(getter.data.result[i].value)
          }
          res.status(200).json(cpuUtilHistory)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
router.post("/getRamUtil", async (req,res) => {
    try
    {
        const deviceID = String(req.body.device)
        const actionID = String(req.body.action)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        const getter = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'history.get',
            params: {
              output: "extend",
              history: 0,
              itemids: actionID,
              sortfield: "clock",         
              sortorder: "DESC",
              limit: 60, // Ilość wartości do pobrania
            },
            auth: authToken,
            id: 1,
          })
          let ramUtilHistory = [];
          for(let  i=0; i<getter.data.result.length; i++)
          {
            ramUtilHistory.push(getter.data.result[i].value)
          }
          res.status(200).json(ramUtilHistory)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
router.post("/getStatus", async (req,res) => {
    try
    {
        const deviceID = String(req.body.device)
        const actionID = String(req.body.action)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        const getter = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'history.get',
            params: {
              output: "extend",
              history: 3,
              itemids: actionID,
              sortfield: "clock",         
              sortorder: "DESC",
              limit: 60, // Ilość wartości do pobrania
            },
            auth: authToken,
            id: 1,
          })
          let statusHistory = [];
          for(let  i=0; i<getter.data.result.length; i++)
          {
            statusHistory.push(getter.data.result[i].value)
          }
          res.status(200).json(statusHistory)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
router.post("/getDescription", async(req,res) => {
    try
    {
        const deviceID = String(req.body.device)
        const actionID = String(req.body.action)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        const getter = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'history.get',
            params: {
              output: "extend",
              history: 1,
              itemids: actionID,
              sortfield: "clock",         
              sortorder: "DESC",
              limit: 1, // Ilość wartości do pobrania
            },
            auth: authToken,
            id: 1,
          })
          console.log(getter)
          res.status(200).json(getter.data.result[0].value)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
router.post("/getContact", async(req,res) => {
    try
    {
        const deviceID = String(req.body.device)
        const actionID = String(req.body.action)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        const getter = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'history.get',
            params: {
              output: "extend",
              history: 1,
              itemids: actionID,
              sortfield: "clock",         
              sortorder: "DESC",
              limit: 1, // Ilość wartości do pobrania
            },
            auth: authToken,
            id: 1,
          })
          res.status(200).json(getter.data.result[0].value)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
router.post("/getSerialNumber", async(req,res) => {
    try
    {
        const deviceID = String(req.body.device)
        const actionID = String(req.body.action)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        const getter = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'history.get',
            params: {
              output: "extend",
              history: 1,
              itemids: actionID,
              sortfield: "clock",         
              sortorder: "DESC",
              limit: 1, // Ilość wartości do pobrania
            },
            auth: authToken,
            id: 1,
          })
          res.status(200).json(getter.data.result[0].value)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
router.post("/getDeviceModel", async (req,res) => {
    try
    {
        const deviceID = String(req.body.device)
        const actionID = String(req.body.action)
        const zabbixApiUrl = test.zabbixApiUrl
        const authToken = test.authToken
        const getter = await axios.post(zabbixApiUrl, {
            jsonrpc: '2.0',
            method: 'history.get',
            params: {
              output: "extend",
              history: 1,
              itemids: actionID,
              sortfield: "clock",         
              sortorder: "DESC",
              limit: 1, // Ilość wartości do pobrania
            },
            auth: authToken,
            id: 1,
          })
          res.status(200).json(getter.data.result[0].value)
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err)
    }
})
module.exports = router;

