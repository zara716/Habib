const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
 name: "helpall",
 version: "2.0.1",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐒𝐀𝐇𝐔",
 description: "Displays all available commands in one stylish page",
 commandCategory: "system",
 usages: "[No args]",
 cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
 const { commands } = global.client;
 const { threadID, messageID } = event;

 const allCommands = [];

 for (let [name] of commands) {
 if (name && name.trim() !== "") {
 allCommands.push(name.trim());
 }
 }

 allCommands.sort();

 const finalText = `╭•┄┅═══❁🌺❁═══┅┄•╮
 🌸 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐌𝐄𝐍𝐔 💫
╰•┄┅═══❁🌺❁═══┅┄•╯
${allCommands.map(cmd => `✾ ${cmd}`).join("\n")}
━━━━━━━━━━━━━
 🔰 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 🔰
━━━━━━━━━━━━━
🤖 𝐁𝐨𝐭: 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐁𝐨𝐭
👑 𝐎𝐰𝐧𝐞𝐫: 𝐒𝐇𝐀𝐇𝐀𝐃𝐀𝐓 𝐒𝐀𝐇𝐔
📦 𝐓𝐨𝐭𝐚𝐥 𝐂𝐦𝐝: ${allCommands.length}
─┄┅═════❁🌺❁═════┅┄─`;

 const backgrounds = [
 "https://i.imgur.com/YPkATMR.jpeg",
 "https://i.imgur.com/8WvpgUL.jpeg",
 "https://i.imgur.com/YPkATMR.jpeg",
 "https://i.imgur.com/8WvpgUL.jpeg"
 ];

 const selectedBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
 const imgPath = __dirname + "/cache/helpallbg.jpg";

 const callback = () =>
 api.sendMessage(
 { body: finalText, attachment: fs.createReadStream(imgPath) },
 threadID,
 () => fs.unlinkSync(imgPath),
 messageID
 );

 request(encodeURI(selectedBg))
 .pipe(fs.createWriteStream(imgPath))
 .on("close", () => callback());
};