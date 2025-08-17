const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs-extra");
const path = require("path");
const {
  image
} = require("image-downloader");
module.exports.run = async function ({
  api: _0x251e9c,
  event: _0xa3f7d0,
  args: _0x273cea
}) {
  try {
    if (_0xa3f7d0.type !== "message_reply") {
      return _0x251e9c.sendMessage("｢💬｣=> You reply one img", _0xa3f7d0.threadID, _0xa3f7d0.messageID);
    }
    if (!_0xa3f7d0.messageReply.attachments || _0xa3f7d0.messageReply.attachments.length == 0) {
      return _0x251e9c.sendMessage("｢💬｣=> Reply Your img", _0xa3f7d0.threadID, _0xa3f7d0.messageID);
    }
    if (_0xa3f7d0.messageReply.attachments[0].type != "photo") {
      return _0x251e9c.sendMessage("｢💬｣=> its not img reply a img", _0xa3f7d0.threadID, _0xa3f7d0.messageID);
    }
    const _0x1616fe = _0xa3f7d0.type == "message_reply" ? _0xa3f7d0.messageReply.attachments[0].url : _0x273cea.join(" ");
    const _0x47057d = ["CXT1T2FwSXvPePnjfuefnTGP", "4DE6BJAa3EndPPXtGdQ7X1KG"];
    const _0x3e2754 = path.resolve(__dirname, "cache", "photo.png");
    await image({
      'url': _0x1616fe,
      'dest': _0x3e2754
    });
    const _0x47c523 = new FormData();
    _0x47c523.append("size", "auto");
    _0x47c523.append("image_file", fs.createReadStream(_0x3e2754), path.basename(_0x3e2754));
    axios({
      'method': "post",
      'url': "https://api.remove.bg/v1.0/removebg",
      'data': _0x47c523,
      'responseType': "arraybuffer",
      'headers': {
        ..._0x47c523.getHeaders(),
        'X-Api-Key': _0x47057d[Math.floor(Math.random() * _0x47057d.length)]
      },
      'encoding': null
    }).then(_0x1f3197 => {
      if (_0x1f3197.status != 200) {
        return console.error("Error:", _0x1f3197.status, _0x1f3197.statusText);
      }
      fs.writeFileSync(_0x3e2754, _0x1f3197.data);
      return _0x251e9c.sendMessage({
        'body': "╭•┄┅═══❁🌺❁═══┅┄•╮\n🖼️= ｢𝐑𝐄𝐌𝐎𝐕𝐄 𝐈𝐌𝐆｣ =🖼️\n╰•┄┅═══❁🌺❁═══┅┄•╯\n✮🩷𝐁𝐀𝐂𝐊𝐆𝐑𝐎𝐔𝐍𝐃🩷✮\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
        'attachment': fs.createReadStream(_0x3e2754)
      }, _0xa3f7d0.threadID, () => fs.unlinkSync(_0x3e2754));
    })["catch"](_0x495916 => {
      return console.error("Request failed:", _0x495916);
    });
  } catch (_0x4133c8) {
    console.log(_0x4133c8);
    return _0x251e9c.sendMessage("｢👾｣ Api sarvar problem", _0xa3f7d0.threadID, _0xa3f7d0.messageID);
  }
};
module.exports.config = {
  'name': "removebg",
  'version': "1.0.0",
  'hasPermission': 0x0,
  'credits': "𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫",
  'description': '',
  'commandCategory': "prefix",
  'usages': "reply",
  'cooldowns': 0xa,
  'dependencies': {
    'form-data': '',
    'image-downloader': ''
  }
};