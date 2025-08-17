const moment = require("moment-timezone");
const axios = require("axios");
const cheerio = require("cheerio");
const https = require("https");
const agent = new https.Agent({
  'rejectUnauthorized': false
});
const getStreamFromURL = async _0x3bcd21 => {
  const _0x47e3f2 = await axios({
    'method': "GET",
    'url': _0x3bcd21,
    'responseType': "stream"
  });
  return _0x47e3f2.data;
};
module.exports.config = {
  'name': "moon",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "Islamick Cyber Chat",
  'description': "See pictures of the moon on your birthday",
  'commandCategory': "imgur",
  'usages': "DD/MM/YYYY",
  'cooldowns': 0x5
};
function checkDate(_0x1ae781) {
  const [_0x5bddee, _0x34f64e, _0xb6fb5f] = (_0x1ae781 || '').split('/');
  const _0x470834 = (_0x5bddee || '').length == 1 ? '0' + _0x5bddee : _0x5bddee;
  const _0x5c5242 = (_0x34f64e || '').length == 1 ? '0' + _0x34f64e : _0x34f64e;
  const _0x9f35de = _0xb6fb5f || '';
  const _0x3642d5 = _0x9f35de + '/' + _0x5c5242 + '/' + _0x470834;
  return moment(_0x3642d5, "YYYY/MM/DD", true).isValid() ? _0x3642d5 : false;
}
const moonImages = ["https://i.ibb.co/9shyYH1/moon-0.png", "https://i.ibb.co/vBXLL37/moon-1.png", "https://i.ibb.co/0QCKK9D/moon-2.png", "https://i.ibb.co/Dp62X2j/moon-3.png", "https://i.ibb.co/xFKCtfd/moon-4.png", "https://i.ibb.co/m4L533L/moon-5.png", "https://i.ibb.co/VmshdMN/moon-6.png", "https://i.ibb.co/4N7R2B2/moon-7.png", "https://i.ibb.co/C2k4YB8/moon-8.png", "https://i.ibb.co/F62wHxP/moon-9.png", "https://i.ibb.co/Gv6R1mk/moon-10.png", "https://i.ibb.co/0ZYY7Kk/moon-11.png", "https://i.ibb.co/KqXC5F5/moon-12.png", "https://i.ibb.co/BGtLpRJ/moon-13.png", "https://i.ibb.co/jDn7pPx/moon-14.png", "https://i.ibb.co/kykn60t/moon-15.png", "https://i.ibb.co/qD4LFLs/moon-16.png", "https://i.ibb.co/qJm9gcQ/moon-17.png", "https://i.ibb.co/yYFYZx9/moon-18.png", "https://i.ibb.co/8bc7vpZ/moon-19.png", "https://i.ibb.co/jHG7DKs/moon-20.png", "https://i.ibb.co/5WD18Rn/moon-21.png", "https://i.ibb.co/3Y06yHM/moon-22.png", "https://i.ibb.co/4T8Zdfy/moon-23.png", "https://i.ibb.co/n1CJyP4/moon-24.png", "https://i.ibb.co/zFwJRqz/moon-25.png", "https://i.ibb.co/gVBmMCW/moon-26.png", "https://i.ibb.co/hRY89Hn/moon-27.png", "https://i.ibb.co/7C13s7Z/moon-28.png", "https://i.ibb.co/2hDTwB4/moon-29.png", "https://i.ibb.co/Rgj9vpj/moon-30.png", "https://i.ibb.co/s5z0w9R/moon-31.png"];
module.exports.handleReply = async ({
  api: _0x54aa2e,
  event: _0x1bc8bf,
  args: _0x499208,
  handleReply: _0x250cd0
}) => {
  const {
    author: _0x350f1d,
    type: _0x551239,
    date: _0x10ead6
  } = _0x250cd0;
  switch (_0x551239) {
    case "replyDay":
      {
        const _0x560b40 = _0x1bc8bf.body;
        if (_0x560b40 < 1 || _0x560b40 > 31) {
          return _0x54aa2e.sendMessage("The date you entered is not valid", _0x350f1d);
        }
        _0x10ead6.day = _0x560b40;
        return _0x54aa2e.sendMessage("Reply to this message and enter the month", _0x1bc8bf.threadID, (_0x3379b5, _0x24b01b) => {
          global.client.handleReply.push({
            'name': this.config.name,
            'messageID': _0x24b01b.messageID,
            'author': _0x350f1d,
            'type': "replyMonth",
            'date': _0x10ead6
          });
        });
      }
    case "replyMonth":
      {
        const _0x553acd = _0x1bc8bf.body;
        if (_0x553acd < 1 || _0x553acd > 12) {
          return _0x54aa2e.sendMessage("The month you entered is not valid", _0x350f1d);
        }
        _0x10ead6.month = _0x553acd;
        return _0x54aa2e.sendMessage("Reply to this message and enter the year", _0x1bc8bf.threadID, (_0x4fc669, _0x3da7d9) => {
          global.client.handleReply.push({
            'name': this.config.name,
            'messageID': _0x3da7d9.messageID,
            'author': _0x350f1d,
            'type': "done",
            'date': _0x10ead6
          });
        });
      }
    default:
      {
        try {
          const _0x2d3824 = checkDate(_0x10ead6.day + '/' + _0x10ead6.month + '/' + _0x1bc8bf.body);
          if (!_0x2d3824) {
            return _0x54aa2e.sendMessage("Please enter a valid date/month/year in the format DD/MM/YYYY", _0x1bc8bf.threadID, _0x1bc8bf.messageID);
          }
          const _0x5ed807 = "https://lunaf.com/lunar-calendar/" + _0x2d3824;
          let _0x41de45;
          try {
            _0x41de45 = await axios.get(_0x5ed807, {
              'httpsAgent': agent
            });
          } catch (_0xc8a540) {
            return _0x54aa2e.sendMessage("An error occurred that could not get the moon photo of the day " + _0x499208[0], _0x1bc8bf.threadID, _0x1bc8bf.messageID);
          }
          const _0xf56487 = cheerio.load(_0x41de45.data);
          const _0x1bf427 = _0xf56487("figure.mimg img").attr("src");
          const _0x2a6733 = moonImages[Number(_0x1bf427.match(/\d+/)[0])];
          const _0x5312da = "- Moon photo at night " + (_0x10ead6.day + '/' + _0x10ead6.month + '/' + _0x1bc8bf.body) + ("\n- " + _0xf56487(_0xf56487('h3').get()[0]).text()) + ("\n- " + _0xf56487("#phimg > small").text()) + ("\n- " + _0x5ed807) + ("\n- https://lunaf.com/img/moon/h-" + _0x1bf427.slice(_0x1bf427.lastIndexOf('/') + 1));
          const _0x1a1548 = await getStreamFromURL(_0x2a6733);
          _0x54aa2e.sendMessage({
            'body': _0x5312da,
            'attachment': _0x1a1548
          }, _0x1bc8bf.threadID, _0x1bc8bf.messageID);
        } catch (_0x5edfe2) {
          console.log(_0x5edfe2);
        }
        break;
      }
  }
};
module.exports.run = async ({
  api: _0x51b515,
  event: _0x43e5fc
}) => {
  _0x51b515.sendMessage("Reply to this message and enter the date", _0x43e5fc.threadID, (_0x27fd29, _0x45b75e) => {
    global.client.handleReply.push({
      'name': this.config.name,
      'messageID': _0x45b75e.messageID,
      'author': _0x43e5fc.senderID,
      'type': "replyDay",
      'date': {}
    });
  });
};