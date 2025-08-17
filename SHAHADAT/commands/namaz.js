module.exports.config = {
 'name': "namaz",
 'version': "0.0.2",
 'hasPermission': 0x0,
 'credits': "Islamick Cyber Chat",
 'description': "prayer time",
 'commandCategory': "time",
 'usages': '',
 'cooldowns': 0x5
};
module.exports.run = async function ({
 api: _0x2e597d,
 event: _0xc9982d,
 args: _0xa5783e
}) {
 const _0x3af2e0 = require("axios");
 const _0x328e77 = _0xa5783e.join(" ");
 const _0x5d63b6 = await _0x3af2e0.get("http://api.aladhan.com/v1/timingsByAddress?address=" + _0x328e77);
 const {
 Fajr: _0x3e35e5,
 Dhuhr: _0x1a258e,
 Asr: _0x12b0dc,
 Sunset: _0x1ee792,
 Maghrib: _0x2468f9,
 Isha: _0x16fe87,
 Imsak: _0x418299,
 Midnight: _0x282b78
 } = _0x5d63b6.data.data.timings;
 const _0x3266fd = _0x5d63b6.data.data.date.readable;
 const _0x32948e = _0x5d63b6.data.data.date.gregorian.month.en;
 const _0x28be27 = _0x5d63b6.data.data.date.hijri.date;
 const _0x43cd74 = _0x5d63b6.data.data.date.hijri.month.en;
 var _0x147e9a = [];
 const _0x2b6eb1 = (await _0x3af2e0.get("https://i.imgur.com/gZuqamL.jpeg", {
 'responseType': "stream"
 })).data;
 {
 _0x147e9a += "╭•┄┅═══❁🌺❁═══┅┄•╮\n 𝚃𝙸𝙼𝙴 𝙾𝙵 𝚂𝙰𝙻𝙰𝚃𝙰\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⋆𝚃𝙸𝙼𝙴⋆⎯⎯⎯⋆✦\n•—»✨𝙵𝙰𝙹𝙰𝚁: " + _0x3e35e5 + " \n•—»✨𝚉𝙰𝙷𝙰𝚁: " + _0x1a258e + " \n•—»✨𝙰𝚂𝙰𝚁 : " + _0x12b0dc + " \n•—»✨𝙼𝙰𝙶𝚁𝙸𝙱 : " + _0x2468f9 + " \n •—»✨𝙸𝚂𝙷𝙰 : " + _0x16fe87 + " \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n\n ⋆✦⋆⎯⎯⎯⋆𝚃𝙸𝙼𝙴⋆⎯⎯⎯⋆✦\n •—»✨𝚂𝚄𝙽𝚂𝙴𝚃 : " + _0x1ee792 + " \n •—»✨𝙼𝙸𝙳-𝙽𝙸𝙶𝙷𝚃: " + _0x282b78 + " \n •—»✨𝙸𝚂𝙼𝙰𝙺: " + _0x418299 + " \n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n \n⋆✦⋆⎯⎯⎯⋆𝚃𝙸𝙼𝙴⋆⎯⎯⎯⋆✦\n\n 𝙳𝙰𝚃𝙴: " + _0x3266fd + " \n 𝙼𝙾𝙽𝚃𝙷-𝙴𝙽: " + _0x32948e + " \n 𝙷𝙸𝙹𝚁𝙸: " + _0x28be27 + " \n 𝙼𝙾𝙽𝚃𝙷-𝙰𝚁: " + _0x43cd74 + " \n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆";
 }
 return _0x2e597d.sendMessage({
 'body': _0x147e9a,
 'attachment': _0x2b6eb1
 }, _0xc9982d.threadID, _0xc9982d.messageID);
};