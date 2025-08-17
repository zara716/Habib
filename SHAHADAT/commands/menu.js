module.exports.config = {
  'name': "menu",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "Islamick cyber Chat",
  'description': "Beginner's Guide",
  'usages': "[all/-a] [number of pages]",
  'commandCategory': "For users",
  'cooldowns': 0x5
};
module.exports.handleReply = async function ({
  api: _0x5833ed,
  event: _0x23f006,
  handleReply: _0x15965a
}) {
  let _0x2b8677 = parseInt(_0x23f006.body.split(" ")[0].trim());
  if (_0x15965a.bonus) {
    _0x2b8677 -= _0x15965a.bonus;
  } else {
    _0x2b8677;
  }
  let _0x5f4278 = '';
  let _0x237c78 = _0x15965a.content;
  let _0x190bae = false;
  if (isNaN(_0x2b8677)) {
    _0x5f4278 = "𝗣𝗹𝗲𝗮𝘀𝗲 𝘀𝗲𝗹𝗲𝗰𝘁 𝗻𝘂𝗺𝗯𝗲𝗿";
  } else {
    if (_0x2b8677 > _0x237c78.length || _0x2b8677 <= 0) {
      _0x5f4278 = "𝗧𝗵𝗲 𝗻𝘂𝗺𝗯𝗲𝗿 𝘆𝗼𝘂 𝘀𝗲𝗹𝗲𝗰𝘁𝗲𝗱 𝗶𝘀 𝗻𝗼𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗹𝗶𝘀𝘁, 𝗽𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻";
    } else {
      const {
        commands: _0x465e7a
      } = global.client;
      let _0x30c07c = _0x237c78[_0x2b8677 -= 1];
      if (_0x15965a.type == "cmd_info") {
        let _0x5ee17d = _0x465e7a.get(_0x30c07c).config;
        _0x5f4278 += " ｢  " + _0x5ee17d.commandCategory.toUpperCase() + "   ｣   \n";
        _0x5f4278 += "\nᴄᴏᴍᴍᴀɴᴅ ɴᴀᴍᴇ: " + _0x30c07c;
        _0x5f4278 += "\nᴅᴇsᴄʀɪʙᴇ: " + _0x5ee17d.description;
        _0x5f4278 += "\nᴜsɪɴɢ: " + (_0x5ee17d.usages ? _0x5ee17d.usages : '');
        _0x5f4278 += "\nᴡᴀɪᴛɪɴɢ ᴛɪᴍᴇ: " + (_0x5ee17d.cooldowns || 5) + 's';
        _0x5f4278 += "\nᴘᴏᴡᴇʀ: " + (_0x5ee17d.hasPermssion == 0 ? "User" : _0x5ee17d.hasPermssion == 1 ? "Group administrator" : "Bot admin");
        _0x5f4278 += "\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆";
        _0x5f4278 += "\n\n Module code by " + _0x5ee17d.credits + " ";
      } else {
        _0x190bae = true;
        let _0x22fc0b = 0;
        _0x5f4278 += " " + _0x30c07c.group.toUpperCase() + " \n";
        _0x30c07c.cmds.forEach(_0x16b4a7 => {
          _0x5f4278 += "\n ｢" + (_0x22fc0b += 1) + ".｣  " + _0x16b4a7 + ": " + _0x465e7a.get(_0x16b4a7).config.description;
        });
        _0x5f4278 += "\n𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗯𝘆 𝗻𝘂𝗺𝗯𝗲𝗿 𝘁𝗼 𝘃𝗶𝗲𝘄 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 𝗮𝗻𝗱 𝗵𝗼𝘄 𝘁𝗼 𝘂𝘀𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱";
      }
    }
  }
  const _0x225465 = require("axios");
  const _0x301165 = require("fs-extra");
  const _0x2111e0 = ["https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif"];
  var _0x39df03 = __dirname + "/cache/menu.gif";
  var _0x4bfcfb = _0x2111e0[Math.floor(Math.random() * _0x2111e0.length)];
  const _0x4c7949 = [];
  let _0x49afb7 = (await _0x225465.get(_0x4bfcfb, {
    'responseType': "arraybuffer"
  })).data;
  _0x301165.writeFileSync(_0x39df03, Buffer.from(_0x49afb7, "utf-8"));
  _0x4c7949.push(_0x301165.createReadStream(_0x39df03));
  var _0x5944d3 = {
    'body': _0x5f4278,
    'attachment': _0x4c7949
  };
  _0x5833ed.unsendMessage(_0x15965a.messageID);
  return _0x5833ed.sendMessage(_0x5944d3, _0x23f006.threadID, (_0x21f69, _0x1c7f68) => {
    if (_0x21f69) {
      console.log(_0x21f69);
    }
    if (_0x190bae) {
      global.client.handleReply.push({
        'type': "cmd_info",
        'name': this.config.name,
        'messageID': _0x1c7f68.messageID,
        'content': _0x237c78[_0x2b8677].cmds
      });
    }
  }, _0x23f006.messageID);
};
module.exports.run = async function ({
  api: _0x110670,
  event: _0x2bf113,
  args: _0x50d65d
}) {
  const {
    commands: _0x464d58
  } = global.client;
  const {
    threadID: _0x197299,
    messageID: _0x20c1e7
  } = _0x2bf113;
  const _0x5d0266 = global.data.threadData.get(parseInt(_0x197299)) || {};
  const _0x836d6f = _0x5d0266.hasOwnProperty("PREFIX") ? _0x5d0266.PREFIX : global.config.PREFIX;
  const _0x2febd5 = require("axios");
  const _0x25b5e7 = require("fs-extra");
  const _0xbaa92a = [];
  const _0x44243c = ["https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif", "https://i.imgur.com/LU7sSfI.gif"];
  var _0x15d353 = __dirname + "/cache/menu.gif";
  var _0x148479 = _0x44243c[Math.floor(Math.random() * _0x44243c.length)];
  let _0x54ed7b = (await _0x2febd5.get(_0x148479, {
    'responseType': "arraybuffer"
  })).data;
  _0x25b5e7.writeFileSync(_0x15d353, Buffer.from(_0x54ed7b, "utf-8"));
  _0xbaa92a.push(_0x25b5e7.createReadStream(_0x15d353));
  const _0x246d89 = _0x464d58.values();
  var _0x597964 = [];
  var _0x1aa347 = "╭•┄┅═══❁🌺❁═══┅┄•╮\nআসসালামু আলাইকুম-!!🖤\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝐈𝐒𝐋𝐀𝐌𝐈𝐂𝐊 𝐂𝐇𝐀𝐓 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n";
  let _0x5f3378 = true;
  let _0x6d7caa = '';
  let _0x27af53 = 0;
  for (const _0x3eb8f5 of _0x246d89) {
    if (!_0x597964.some(_0x222c28 => _0x222c28.group.toLowerCase() == _0x3eb8f5.config.commandCategory.toLowerCase())) {
      _0x597964.push({
        'group': _0x3eb8f5.config.commandCategory.toLowerCase(),
        'cmds': [_0x3eb8f5.config.name]
      });
    } else {
      _0x597964.find(_0x20cb0f => _0x20cb0f.group.toLowerCase() == _0x3eb8f5.config.commandCategory.toLowerCase()).cmds.push(_0x3eb8f5.config.name);
    }
  }
  if (_0x50d65d[0] && ["all", '-a'].includes(_0x50d65d[0].trim())) {
    let _0x5ce292 = [];
    _0x597964.forEach(_0x27efde => {
      _0x27efde.cmds.forEach(_0xcfbe75 => _0x5ce292.push(_0xcfbe75));
    });
    let _0x10bfa1 = Math.ceil(_0x5ce292.length / 2222222222);
    if (_0x50d65d[1]) {
      _0x5f3378 = false;
      _0x6d7caa = parseInt(_0x50d65d[1]);
      if (isNaN(_0x6d7caa)) {
        _0x1aa347 = "𝗣𝗹𝗲𝗮𝘀𝗲 𝘀𝗲𝗹𝗲𝗰𝘁 𝗻𝘂𝗺𝗯𝗲𝗿";
      } else {
        if (_0x6d7caa > _0x10bfa1 || _0x6d7caa <= 0) {
          _0x1aa347 = "𝗧𝗵𝗲 𝗻𝘂𝗺𝗯𝗲𝗿 𝘆𝗼𝘂 𝘀𝗲𝗹𝗲𝗰𝘁𝗲𝗱 𝗶𝘀 𝗻𝗼𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗹𝗶𝘀𝘁, 𝗽𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻";
        } else {
          _0x5f3378 = true;
        }
      }
    }
    if (_0x5f3378) {
      index_start = _0x6d7caa ? _0x6d7caa * 2222222222 - 2222222222 : 0;
      _0x27af53 = index_start;
      index_end = index_start + 2222222222 > _0x5ce292.length ? _0x5ce292.length : index_start + 2222222222;
      _0x5ce292 = _0x5ce292.slice(index_start, index_end);
      _0x5ce292.forEach(_0x50582c => {
        _0x1aa347 += "\n" + (index_start += 1) + ".  " + _0x50582c + ": " + _0x464d58.get(_0x50582c).config.description;
      });
      _0x1aa347 += "\n\nPage " + (_0x6d7caa || 1) + '/' + _0x10bfa1;
      _0x1aa347 += "\nᴛᴏ ᴠɪᴇᴡ ᴏᴛʜᴇʀ ᴘᴀɢᴇs, ᴜsᴇ: " + _0x836d6f + "ᴍᴇɴᴜ [ᴀʟʟ/-ᴀ] [ɴᴜᴍʙᴇʀ ᴏғ ᴘᴀɢᴇs]";
      _0x1aa347 += "\nʏᴏᴜ ᴄᴀɴ ᴜsᴇ " + _0x836d6f + "ʜᴇʟᴘ ᴀʟʟ ᴛᴏ sᴇᴇ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs";
      _0x1aa347 += "\n𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗯𝘆 𝗻𝘂𝗺𝗯𝗲𝗿 𝘁𝗼 𝘃𝗶𝗲𝘄 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 𝗮𝗻𝗱 𝗵𝗼𝘄 𝘁𝗼 𝘂𝘀𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱";
    }
    var _0x250f7f = {
      'body': _0x1aa347,
      'attachment': _0xbaa92a
    };
    return _0x110670.sendMessage(_0x250f7f, _0x197299, (_0x551466, _0x3324df) => {
      if (_0x5f3378) {
        global.client.handleReply.push({
          'type': "cmd_info",
          'bonus': _0x27af53,
          'name': this.config.name,
          'messageID': _0x3324df.messageID,
          'content': _0x5ce292
        });
      }
    }, _0x20c1e7);
  }
  let _0x21004c = Math.ceil(_0x597964.length / 2222222222);
  if (_0x50d65d[0]) {
    _0x5f3378 = false;
    _0x6d7caa = parseInt(_0x50d65d[0]);
    if (isNaN(_0x6d7caa)) {
      _0x1aa347 = "𝗣𝗹𝗲𝗮𝘀𝗲 𝘀𝗲𝗹𝗲𝗰𝘁 𝗻𝘂𝗺𝗯𝗲𝗿";
    } else {
      if (_0x6d7caa > _0x21004c || _0x6d7caa <= 0) {
        _0x1aa347 = "𝗧𝗵𝗲 𝗻𝘂𝗺𝗯𝗲𝗿 𝘆𝗼𝘂 𝘀𝗲𝗹𝗲𝗰𝘁𝗲𝗱 𝗶𝘀 𝗻𝗼𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗹𝗶𝘀𝘁, 𝗽𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻";
      } else {
        _0x5f3378 = true;
      }
    }
  }
  if (_0x5f3378) {
    index_start = _0x6d7caa ? _0x6d7caa * 2222222222 - 2222222222 : 0;
    _0x27af53 = index_start;
    index_end = index_start + 2222222222 > _0x597964.length ? _0x597964.length : index_start + 2222222222;
    _0x597964 = _0x597964.slice(index_start, index_end);
    _0x597964.forEach(_0x28c508 => _0x1aa347 += "\n" + (index_start += 1) + ".  " + _0x28c508.group.toUpperCase() + " ");
    _0x1aa347 += "\n\n𝐏𝐀𝐆𝐄 ｢" + (_0x6d7caa || 1) + '/' + _0x21004c + '｣';
    _0x1aa347 += "\nᴛᴏ ᴠɪᴇᴡ ᴏᴛʜᴇʀ ᴘᴀɢᴇs, ᴜsᴇ: " + _0x836d6f + "ᴍᴇɴᴜ [ɴᴜᴍʙᴇʀ ᴏғ ᴘᴀɢᴇs]";
    _0x1aa347 += "\nʏᴏᴜ ᴄᴀɴ ᴜsᴇ " + _0x836d6f + "ᴍᴇɴᴜ ᴀʟʟ ᴛᴏ sᴇᴇ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs";
    _0x1aa347 += "\n𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗯𝘆 𝗻𝘂𝗺𝗯𝗲𝗿 𝘁𝗼 𝘃𝗶𝗲𝘄 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗯𝘆 𝗰𝗮𝘁𝗲𝗴𝗼𝗿𝘆";
  }
  var _0x250f7f = {
    'body': _0x1aa347,
    'attachment': _0xbaa92a
  };
  return _0x110670.sendMessage(_0x250f7f, _0x197299, async (_0x1213e8, _0x25be44) => {
    global.client.handleReply.push({
      'name': this.config.name,
      'bonus': _0x27af53,
      'messageID': _0x25be44.messageID,
      'content': _0x597964
    });
  });
};