module.exports.config = {
  'name': "botinfo",
  'version': "1.0.1",
  'hasPermssion': 0,
  'credits': "MAHBUB SHAON",
  'description': "Bot information",
  'commandCategory': "system",
  'cooldowns': 1,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};

module.exports.run = async function ({
  api,
  event,
  args,
  client,
  Users,
  Threads,
  __GLOBAL,
  Currencies
}) {
  const request = global.nodemodule.request;
  const fs = global.nodemodule["fs-extra"];
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor(uptime % 3600 / 60);
  const seconds = Math.floor(uptime % 60);
  const moment = require("moment-timezone");
  
  var timeNow = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
  var imageLinks = ["https://i.imgur.com/gSW285Z.gif"];
  
  var sendMessage = () => api.sendMessage({
    'body': `╔════════════════════╗
║      🌙 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭 🌙
╠════════════════════╣
║ 🌸 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘: ${global.config.BOTNAME}
║ ♻️ 𝗣𝗥𝗘𝗙𝗜𝗫 : ${global.config.PREFIX}
╠════════════════════╣
║ ⏱ 𝗨𝗣𝗧𝗜𝗠𝗘 : 
║ 🗓 𝗗𝗔𝗧𝗘 & 𝗧𝗜𝗠𝗘: ${timeNow}
║ ⚡ 𝗕𝗢𝗧 𝗜𝗦 𝗥𝗨𝗡𝗡𝗜𝗡𝗚 ⚡
║ 🕒 ${hours}:${minutes}:${seconds}
╠════════════════════╣
║🌺 𝗢𝗪𝗡𝗘𝗥: 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦
╚════════════════════╝`,
    'attachment': fs.createReadStream(__dirname + "/cache/juswa1.jpg")
  }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa1.jpg"));
  
  return request(encodeURI(imageLinks[Math.floor(Math.random() * imageLinks.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/juswa1.jpg"))
    .on("close", () => sendMessage());
};