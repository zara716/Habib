module.exports.config = {
  'name': "autowather",
  'version': "10.02",
  'hasPermssion': 0x0,
  'credits': "𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫",
  'description': "Automatically send messages at the set time!",
  'commandCategory': "System",
  'usages': '[]',
  'cooldowns': 0x3
};
const nam = [{
  'timer': "12:00:00 AM",
  'message': ["\n{abc}"]
}, {
  'timer': "1:30:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "2:00:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "3:00:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "4:00:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "5:00:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "6:00:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "7:00:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "8:00:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "9:00:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "10:00:00 PM",
  'message': ["\n{abc}"]
}, {
  'timer': "11:00:00 PM",
  'message': ["\n{abc}"]
}];
module.exports.onLoad = _0xa276e3 => setInterval(async () => {
  if (á = nam.find(_0x200343 => _0x200343.timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim())) {
    const _0x5e7804 = require("axios");
    const _0x27f830 = process.uptime();
    var _0x36debf = Math.floor(_0x27f830 / 3600);
    var _0x506293 = Math.floor(_0x27f830 % 3600 / 60);
    var _0x49b819 = Math.floor(_0x27f830 % 60);
    var _0x31efcb = á.message[Math.floor(Math.random() * á.message.length)];
    const _0x522ba9 = await _0x5e7804.get("https://api.popcat.xyz/weather?q=" + encodeURI("Dhaka"));
    var _0x199ced = "╭•┄┅══❁🌺❁══┅┄•╮\n    𝐀𝐔𝐓𝐎 𝐖𝐄𝐀𝐓𝐇𝐄𝐑 \n╰•┄┅══❁🌺❁══┅┄•╯\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n｢🚀｣ ᴘɪɴᴇ ɴᴇᴡsᴘᴀᴘᴇʀ ғʀᴏᴍ ᴛʜᴇ sᴛᴀᴛɪᴏɴ ᴜɴɪᴠᴇʀsᴇ ᴀɴᴅʀʀ-!!\n｢⏰｣ ᴀᴛ: " + _0x522ba9.data[0].current.day + " " + _0x522ba9.data[0].current.date + "\n｢🌡️｣ ᴛᴇᴍᴘᴇʀᴀᴛᴜʀᴇ: " + _0x522ba9.data[0].current.temperature + '°' + _0x522ba9.data[0].location.degreetype + "\n｢📋｣ ᴛɪssᴜᴇ: " + _0x522ba9.data[0].current.skytext + "\n｢☁️｣ ʜᴜᴍɪᴅɪᴛʏ: " + _0x522ba9.data[0].current.humidity + "\n｢💨｣ ᴡɪɴᴅ ᴅɪʀᴇᴄᴛɪᴏɴ: " + _0x522ba9.data[0].current.winddisplay + "\n｢📥｣ ɴᴏᴛᴇᴅ ᴀᴛ ᴛɪᴍᴇ: " + _0x522ba9.data[0].current.observationtime;
    _0x31efcb = _0x31efcb.replace(/{abc}/, _0x199ced);
    _0x31efcb = _0x31efcb.replace(/{hours}/g, _0x36debf);
    _0x31efcb = _0x31efcb.replace(/{minutes}/g, _0x506293);
    _0x31efcb = _0x31efcb.replace(/{seconds}/g, _0x49b819);
    _0x31efcb = _0x31efcb.replace(/{time}/g, require("moment-timezone").tz("Asia/Dhaka").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await _0x5e7804.get("https://islamick-cyber-chat-api-2a9f.onrender.com/vd6mui")).data.data);
    _0x31efcb = {
      'body': _0x31efcb,
      'attachment': (await _0x5e7804.get((await _0x5e7804.get("https://islamick-cyber-chat-api-2a9f.onrender.com/vd6mui")).data.url, {
        'responseType': "stream"
      })).data
    };
    global.data.allThreadID.forEach(_0x5859e5 => _0xa276e3.api.sendMessage(_0x31efcb, _0x5859e5));
  }
  ;
}, 1000);
module.exports.run = async _0x194d29 => {
  try {
    const _0x49b419 = global.nodemodule.axios;
    const {
      api: _0x566c9d,
      event: _0x1cfbb1,
      args: _0xa89d59
    } = _0x194d29;
    const {
      threadID: _0x4b4bfa,
      messageID: _0x45700f
    } = _0x1cfbb1;
    var _0x2ab40e = _0xa89d59.join(" ");
    if (!_0x2ab40e) {
      return _0x566c9d.sendMessage("Enter the province/city to see the weather", _0x4b4bfa);
    }
    const _0x2b5234 = await _0x49b419.get("https://api.popcat.xyz/weather?q=" + encodeURI(_0x2ab40e));
    const _0x4139c8 = _0x2b5234.data[0].forecast;
    var _0x437781 = "Weather of: " + _0x2ab40e + " in the days";
    for (let _0xc9c5e8 = 0; _0xc9c5e8 < 5; _0xc9c5e8++) {
      _0x437781 += "\n" + (_0xc9c5e8 + 1) + "-> " + _0x4139c8[_0xc9c5e8].day + " " + _0x4139c8[_0xc9c5e8].date + "\n=>Forecast temperature: from " + _0x4139c8[_0xc9c5e8].low + " arrive " + _0x4139c8[_0xc9c5e8].high + "\n=>Describe: " + _0x4139c8[_0xc9c5e8].skytextday + "\n=>Rain rate: " + _0x4139c8[_0xc9c5e8].precip + "\n";
    }
    ;
    _0x566c9d.sendMessage(_0x437781, _0x4b4bfa, _0x45700f);
  } catch (_0x56270b) {
    api.sendMessage('' + _0x56270b, threadID);
  }
};