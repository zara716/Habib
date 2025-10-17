const axios = require('axios');

module.exports.config = {
  name: "unsend",
  version: "1.0",
  hasPermission: 0,
  credits: "Credit",
  description: "Unsend link on react",
  commandCategory: "system",
  usages: "",
  cooldowns: 0
};

module.exports.run = async function({ api, event }) {
  if (event.type == "message_reaction") {
    const messageId = event.messageId;
    const reaction = event.reaction;
    const message = await api.getMessage(messageId);

    if (reaction == "👍" && message.body.includes("http")) {
      api.unsendMessage(messageId);
    }
  }

  // Add more functionality here
  // যেমন: নির্দিষ্ট শব্দ বা বাক্য চেক করা
  // মেসেজের ধরন চেক করা (যেমন: ছবি, ভিডিও ইত্যাদি)

  // Error handling
  try {
    // কোড এখানে লিখুন
  } catch (error) {
    console.error(error);
  }
};

// Additional functionality
// যেমন: নির্দিষ্ট সময় পরে মেসেজ আনসেন করা
// setTimeout(() => {
// api.unsendMessage(messageId);
// }, 10000); // 10 সেকেন্ড পরে আনসেন হবে
