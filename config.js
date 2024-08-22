//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "pauladedokun007@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/ITACHI-MD-pixel/ITACHI_x_RAGE";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/DAQHuiVkoQJEQ4esni38DA";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafgKHuDjiOa7y21kq37";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2c1f6c598eab67b0f8ffa.jpg";
global.devs = "https://t.me/alvindoxx";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "255697263789";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Tgam36h.jpeg,https://telegra.ph/file/072fa6a932eab03639178.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5haUl4QVdLUTF6Mm95ZUhDUjM2MVZLZGtRd0VvM05SRlhRWTVDdTVVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3BaS0JiUUExZkRFblArdzdDK3pxUDNPMUxMRDQyWWpBTEFmY20vK0drYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSVBrM0FrNHlxU3kzejZQUEswL3RoNzQ4NCtRUWw3ajE0UHlBZUduSDM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRG5FVVpBS2tYK25qSjlZY1dWV09kSHhsRVVBeDRZdi9JSU5EOGx1SlRBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldERW1VS1BYeXFqMzFvMklDQ2k2TzBsc3F6bkhjdnNWYVZWV0NXdWxHM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik80b0kzNTFBUE9rQzExL0JqODdMODNieXZOc3dPaHMvQTJxNFRqQU9mQUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUl3T3JaMWxyc3cvcTJybVkzT251K0dFRGpJMnYrWEhSZHBjeEt4NU1uaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0RpQXhhaFpBNFV6dUNFcHJhOGNHeHc4ZERaSDBTeUswUGY2QVEwNGdYUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNTQ1dSUUROQUdQRmRoWVNRZmt1YlY2RmdHS0FEZ29lV0dRRmdEQ2tmL0JlemtqM2xaVTRkOTVHQXdTU2JHK3JTdml2N2poSmZzWStxQldaTUZGREN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6InhRTE9kK2hlTW9MM3FrdXhBeVdjbzMrMEhiTUNpTVcvbW9mYncvZXJqcG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjQ1TzZXS1BNU3V5Nml1RlBpdVdwcnciLCJwaG9uZUlkIjoiZTcyNjk0NWQtNmI0MS00OGZiLWI0MjctM2M5YjM2N2U1NGQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8vMEM3a3ZTQXM3SCtLQ1pLM2FmQTBnQ3NmZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5ejNaNFBHOThXdjhpaUdKUE8xZHkzcHV1b0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQThXQlBERkEiLCJtZSI6eyJpZCI6IjI1NTY5NzI2Mzc4OTo1NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEcvejVVSEVOSG5ucllHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNVpoenVJWHJhVHBDK3VzQWJPamR6UGZJRWR5VFMxNlU1MmQydDFRY3hEbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR3dkUm5pd2ozRWRyQWEyY0VPMUtrNCs4MGIyRUtKWUp1K3EvQ2ZGWEF5T3pUNlowcEdnS0lPTmRsVkZ0bGZnTU9OUzV4dkhqNUxwWjNzRWZLazdGQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IklUT0U5dUpkdEYyd1JHUy9UWVJtaWxoYmhpSFBSSzF6WU83eU9MdEt3SkhPMlpSTXpFdGdpSWtHMmVBRDhJZ3pmOE1VTXFjQmx1YUIxbVZtK3VwVUFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Njk3MjYzNzg5OjU2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVXWWM3aUY2Mms2UXZyckFHem8zY3ozeUJIY2swdGVsT2RuZHJkVUhNUTYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQzNjM3NDR9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ITACHI_x_RAGE™`",
  author: process.env.PACK_AUTHER || "ITACHI_x_RAGE",
  packname: process.env.PACK_NAME || "R A G E",
  botname: process.env.BOT_NAME || "ITACHI_x_RAGE",
  ownername: process.env.OWNER_NAME || "Criss Vevo",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R A G E").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
