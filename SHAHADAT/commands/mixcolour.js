module.exports.config = {
  'name': "mixcolour",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "Islamick Cyber Chat",
  'description': "random color",
  'commandCategory': "Other",
  'cooldowns': 0x0
};
module.exports.run = async function ({
  api: _0x8b45ac,
  event: _0x1b07f4,
  args: _0x4bf668
}) {
  const _0x2d4b3a = require("axios");
  const _0x162f27 = require("fs-extra");
  const _0x1ea642 = await _0x2d4b3a.get("https://api.popcat.xyz/randomcolor");
  var _0x3a6a6a = _0x1ea642.data.name;
  var _0x23bf80 = _0x1ea642.data.hex;
  let _0xea1e2 = '' + _0x1ea642.data.image;
  let _0x428c7c = (await _0x2d4b3a.get('' + _0xea1e2, {
    'responseType': "arraybuffer"
  })).data;
  _0x162f27.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(_0x428c7c, "utf-8"));
  var _0x194079 = [];
  _0x194079.push(_0x162f27.createReadStream(__dirname + "/cache/img1.png"));
  return _0x8b45ac.sendMessage({
    'body': "𝐂𝐎𝐋𝐎𝐔𝐑 𝐍𝐀𝐌𝐄: " + _0x3a6a6a + "\n𝐂𝐎𝐋𝐎𝐔𝐑 𝐂𝐎𝐃𝐄 : " + _0x23bf80,
    'attachment': _0x194079
  }, _0x1b07f4.threadID);
};