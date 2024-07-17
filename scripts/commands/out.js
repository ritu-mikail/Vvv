module.exports.config = {
  name: "out",
  version: "1.0.0",
  permssion: 2,
  credits: "Islamick Cyber Chat",
  prefix:true,
  description: "",
  category: "Admin",
  usages: "by [id]",
  cooldowns: 10,
},

start: async function({ nayan, events, args }) {
        if (!args[0]) return nayan.removeUserFromGroup(nayan.getCurrentUserID(), events.threadID);
  nayan.reply("gd bye", events.threadID)
        if (!isNaN(args[0])) return nayan.removeUserFromGroup(nayan.getCurrentUserID(), args.join(" "));
}
}
