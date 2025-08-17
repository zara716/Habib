module.exports.config = {
  'name': "real",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "Islamick Cyber Chat",
  'description': "ғɪɴᴅɪɴɢ ʏᴏᴜʀ ᴏᴛʜᴇʀ ʜᴀʟғ",
  'commandCategory': "love",
  'usages': "[boy/girl]",
  'cooldowns': 0xf
};
module.exports.run = async ({
  api: _0x41a21c,
  event: _0x3234a9,
  args: _0x260f77,
  Users: _0x3d368e
}) => {
  const _0x4adebb = global.nodemodule.axios;
  const _0x291e31 = global.nodemodule["fs-extra"];
  if (!_0x260f77[0]) {
    var _0x20a730 = await _0x41a21c.getThreadInfo(_0x3234a9.threadID);
    var _0xff8604 = _0x20a730.userInfo;
    let _0x9423e3 = [];
    for (let _0x5bcd80 of _0xff8604) {
      if (_0x5bcd80.gender == "MALE") {
        if (_0x5bcd80 != _0x3234a9.senderID) {
          _0x9423e3.push(_0x5bcd80.id);
        }
      }
      if (_0x5bcd80.gender == "FEMALE") {
        if (_0x5bcd80 != _0x3234a9.senderID) {
          _0x9423e3.push(_0x5bcd80.id);
        }
      }
    }
    console.log(_0x9423e3);
    if (_0x9423e3.length == 0) {
      return _0x41a21c.sendMessage("sᴏʀʀʏ ᴄᴀɴᴛ ғɪɴᴅ ʏᴏᴜʀ ʜᴀʟғ ʟɪғᴇ 😔💔", _0x3234a9.threadID, _0x3234a9.messageID);
    }
    let _0x2382de = _0x9423e3[Math.floor(Math.random() * _0x9423e3.length)];
    let _0x50aef8 = Math.random() * 50 + 50;
    var _0x51956b = (await _0x3d368e.getData(_0x2382de)).name;
    const _0x4a6f8b = _0x41a21c.getCurrentUserID(_0x2382de);
    let _0x10e8b6 = (await _0x4adebb.get("https://graph.facebook.com/" + _0x2382de + "/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
      'responseType': "arraybuffer"
    })).data;
    _0x291e31.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(_0x10e8b6, "utf-8"));
    _0x41a21c.sendMessage({
      'body': "｢ 🧡 ｣ ғɪɴᴅɪɢ ʏᴏᴜʀ ᴏᴛʜᴇʀ ʜᴀʟғ ｢ 🧡 ｣\n🤍 ɴᴀᴍᴇ: " + _0x51956b + "\n💜 ʀᴇʟᴀᴛɪᴏɴsʜɪᴘ: sɪɴɢʟᴇ (ᴘᴏssɪʙʟʏ)\n❤️‍🩹 sᴜɪᴛᴀʙɪʟɪᴛʏ: " + _0x50aef8.toFixed(2) + "%\n🪪 ʏᴏᴜʀ ɪᴅ: " + _0x4a6f8b + "\n📎ғᴀᴄᴇʙᴏᴏᴋ ɪᴅ ʟɪɴᴋ: https://m.facebook.com/" + _0x2382de,
      'attachment': _0x291e31.createReadStream(__dirname + "/cache/avt.png")
    }, _0x3234a9.threadID, () => _0x291e31.unlinkSync(__dirname + "/cache/avt.png"), _0x3234a9.messageID);
  } else {
    var _0x20a730 = await _0x41a21c.getThreadInfo(_0x3234a9.threadID);
    var _0xff8604 = _0x20a730.userInfo;
    let _0x38207a = [];
    if (_0x260f77[0] == "boy") {
      for (let _0x403c99 of _0xff8604) {
        if (_0x403c99.gender == "MALE") {
          if (_0x403c99 != _0x3234a9.senderID) {
            _0x38207a.push(_0x403c99.id);
          }
        }
      }
    } else {
      if (_0x260f77[0] == "girl") {
        for (let _0xf91f75 of _0xff8604) {
          if (_0xf91f75.gender == "FEMALE") {
            if (_0xf91f75 != _0x3234a9.senderID) {
              _0x38207a.push(_0xf91f75.id);
            }
          }
        }
      }
    }
    console.log(_0x38207a);
    if (_0x38207a.length == 0) {
      return _0x41a21c.sendMessage("sᴏʀʀʏ ᴄᴀɴᴛ ғɪɴᴅ ʏᴏᴜʀ ʜᴀʟғ ʟɪғᴇ 😔💔", _0x3234a9.threadID, _0x3234a9.messageID);
    }
    let _0x3bc1bc = _0x38207a[Math.floor(Math.random() * _0x38207a.length)];
    let _0x4c816b = Math.random() * 50 + 50;
    var _0x51956b = (await _0x3d368e.getData(_0x3bc1bc)).name;
    const _0x3d18a1 = _0x41a21c.getCurrentUserID(_0x3bc1bc);
    let _0x338ce6 = (await _0x4adebb.get("https://graph.facebook.com/" + _0x3bc1bc + "/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
      'responseType': "arraybuffer"
    })).data;
    _0x291e31.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(_0x338ce6, "utf-8"));
    _0x41a21c.sendMessage({
      'body': "｢ 🧡 ｣ ғɪɴᴅɪɢ ʏᴏᴜʀ ᴏᴛʜᴇʀ ʜᴀʟғ ｢ 🧡 ｣\n🤍 ɴᴀᴍᴇ: " + _0x51956b + "\n💜 ʀᴇʟᴀᴛɪᴏɴsʜɪᴘ: sɪɴɢʟᴇ (ᴘᴏssɪʙʟʏ)\n ❤️‍🩹sᴜɪᴛᴀʙɪʟɪᴛʏ: " + _0x4c816b.toFixed(2) + "%\n🪪 ʏᴏᴜʀ ɪᴅ: " + _0x3d18a1 + "\n📎ғᴀᴄᴇʙᴏᴏᴋ ɪᴅ ʟɪɴᴋ: https://m.facebook.com/" + _0x3bc1bc,
      'attachment': _0x291e31.createReadStream(__dirname + "/cache/avt.png")
    }, _0x3234a9.threadID, () => _0x291e31.unlinkSync(__dirname + "/cache/avt.png"), _0x3234a9.messageID);
  }
};