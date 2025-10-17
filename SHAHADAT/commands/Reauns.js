module.exports = {
  config: {
    name: "/tag",
    version: "1.0",
    hasPermission: 0,
    credits: "Credit",
    description: "Tag all members in a group",
    commandCategory: "Group",
    usages: "tag all",
    cooldowns: 0
  },
  run: async function({ api, event, args }) {
    if (args[0] == "all") {
      let threadInfo = await api.getThreadInfo(event.threadID);
      let members = threadInfo.participantIDs;
      let mentions = [];
      members.forEach((member) => {
        mentions.push({
          tag: `@${threadInfo.userInfo[member].name}`,
          id: member,
        });
      });
      let message = "member";
      mentions.forEach((mention) => {
        message += `${mention.tag} `;
      });
      api.sendMessage(message, event.threadID);
    }
  }
};
