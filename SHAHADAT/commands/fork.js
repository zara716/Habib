module.exports.config = {
 name: "fork",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Shahadat SAHU",
 description: "Send fork repository link",
 commandCategory: "general",
 usages: "fork",
 cooldowns: 0
};

module.exports.run = async function({ api, event }) {
 api.sendMessage(
 "https://www.facebook.com/share/1GPnRsJJJ8/",
 event.threadID,
 event.messageID
 );
};

// ===== Noprefix Support =====
module.exports.handleEvent = async function({ api, event }) {
 if (!event.body) return;
 const text = event.body.toLowerCase().trim();
 if (text === "fork") {
 return api.sendMessage(
 "https://www.facebook.com/share/1GPnRsJJJ8/",
 event.threadID,
 event.messageID
 );
 }
};
