const axios = require('axios');

// Adres URL Zabbix API
const zabbixApiUrl = 'http://192.168.0.80/api_jsonrpc.php';

// Zainstalowany token
const authToken = 'a9b22f0ecf66159761d9e9aaab180a779d5d0dcb491779d44f3ed7ecbfe7cdd3';

// Nazwa hosta, dla którego chcesz uzyskać hostid
const targetHostName = 'Switch1';

// Zapytanie do Zabbix API
axios.post(zabbixApiUrl, {
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
  .then(response => {
    const hosts = response.data.result;

    if (hosts.length > 0) {
      const hostId = hosts[0].hostid;
      console.log(`Host ID for ${targetHostName}: ${hostId}`);
    } else {
      console.log(`Host with name "${targetHostName}" not found.`);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

  // ID hosta, dla którego chcesz uzyskać uptime
const hostId = '10606';

// Klucz elementu monitorowanego dla uptime
const uptimeItemKey = 'TP-LINK: Uptime (hardware)';

// znajdywanie id itemu monitorującego
/* axios.post(zabbixApiUrl, {
    jsonrpc: '2.0',
    method: 'item.get',
    params: {
      output: ['itemid', 'name', 'key_'],
      hostids: hostId,
    },
    auth: authToken,
    id: 1,
  })
  .then(response => {
    const items = response.data.result;
    items.forEach(item => {
      console.log(`Item ID: ${item.itemid}, Name: ${item.name}, Key: ${item.key_}`);
    });
  })
  .catch(error => {
    console.error('Error:', error.message);
  });*/ 


const itemId = '46461'; // Zastąp to odpowiednim itemid


axios.post(zabbixApiUrl, {
    jsonrpc: '2.0',
    method: 'history.get',
    params: {
      output: 'extend',
      itemids: itemId,
      sortfield: 'clock',
      sortorder: 'DESC',
      limit: 30, // Ilość wartości do pobrania
    },
    auth: authToken,
    id: 1,
  })
  .then(response => {
    const histories = response.data.result;
    if (histories.length > 0) {
      console.log(`Last 30 values for item ${itemId}:`);
      histories.forEach(history => {
        console.log(`Timestamp: ${new Date(history.clock * 1000)}, Value: ${history.value}`);
      });
    } else {
      console.log(`No history found for item ${itemId}.`);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });