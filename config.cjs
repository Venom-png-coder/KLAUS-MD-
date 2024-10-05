// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"YBkiTOSv4aFlOGaBOd5CZLm0U4/Kp/ueY763WtitnFM="},"public":{"type":"Buffer","data":"Zxc9c3MiUI/0J3Ft2e86AJofTJ4zSuX9WUbU/abtJBM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"WH5qnGTNmXqALd7l6+Oeg0ybkJfIO4X5zEpeDXCrIGY="},"public":{"type":"Buffer","data":"UMHOYC8pX1uWuhqiSG4uRFbPrVaCe7sYeB7/Lx4I0Hg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"uNRjBj6OGzT4Xm1WmIo1a+9UYaaZ93JZ61eepkPE0lI="},"public":{"type":"Buffer","data":"E5FI6+tOeHBhkrvNnrBqn5Fms1+b8yiEynjdW5WMgWA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"aOeHlJez2mG6hU0ase6De/hMqfgC2n7QkZmbvGWh/Uw="},"public":{"type":"Buffer","data":"n3hjkv7SLWlFgideF+K2HNZF21ObYErIsQ3Bb1kxBDo="}},"signature":{"type":"Buffer","data":"iryaVSJpsKrboB9xCShLRzoIAPFbjYBTHOUivj0fVfnC/jBxVt81NbL9KA0sAFOmQpxIg8DNSy8ojDbvTOuXiA=="},"keyId":1},"registrationId":107,"advSecretKey":"cL0+w7/+d9fDo9vNHoohgmOlcF9zxAAs5qJ1K3ge8M8=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"UkoGMs_DSoa9AEcszWHJYg","phoneId":"99a691bc-7eb6-43e9-a5c0-97bebdf9330b","identityId":{"type":"Buffer","data":"p+cMN65xuRqGQYoSWB2uSk4LmGg="},"registered":true,"backupToken":{"type":"Buffer","data":"ilMxxTgnJL5cwi+XZY5whfR2S3k="},"registration":{},"pairingCode":"ZV7G3H74","me":{"id":"254748423791:57@s.whatsapp.net","name":"Venom Killer"},"account":{"details":"CIfjnu8DELiKg7gGGAEgACgA","accountSignatureKey":"EX2fXKWXGDymhCxZXu45dfKVEzo0efC+y2OKQBlamRo=","accountSignature":"Uvtgp3PrRKx2kUmVhcUou7LAGaAIfuhRRIFySztrHVz9w+/JBXtcgIlpVqiKwD7mRbBpWQidcwV7ljuesOzKAA==","deviceSignature":"oI1mhIGiSUdM6lYNQLOhlieNRuhvqJVAlTM5GaAgEBO9leSiEKQsMrjSNN8YFCqdBodyE3BZRrF8YtD2sERrhw=="},"signalIdentities":[{"identifier":{"name":"254748423791:57@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRF9n1yllxg8poQsWV7uOXXylRM6NHnwvstjikAZWpka"}}],"platform":"smba","lastAccountSyncTimestamp":1728103740,"myAppStateKeyId":"AAAAAD54"}",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "QUEEN-VENOM",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254748423791",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : true, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;
