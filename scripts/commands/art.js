module.exports.config = {
  name: "art",
  version: "1.0.0",
  permission: 0,
  credits: "nazrul",
  prefix : true,
  description: "editing img",
  category: "editing",
  usages: "reply image",
  cooldowns: 5
    }
  },
  module.exports.run = async function ({ message, api, args, event }) {
    const text = args.join(' ');
    
    if (!event.messageReply || !event.messageReply.attachments || !event.messageReply.attachments[0]) {
      return message.reply("reply to image");
    }

    const imgurl = encodeURIComponent(event.messageReply.attachments[0].url);

    const [model] = text.split('|').map((text) => text.trim());
    const puti = model || "6";
        
    api.setMessageReaction("⏰", event.messageID, () => {}, true);
    const lado = `https://sandipapi.onrender.com/art2?url=${imgurl}&model=${puti}`;

    message.reply("✅| Generating please wait.", async (err, info) => {
      const attachment = await global.utils.getStreamFromURL(lado);
      message.reply({
        attachment: attachment
      });
      let ui = info.messageID;          
      message.unsend(ui);
      api.setMessageReaction("✅", event.messageID, () => {}, true);
    });
  }
};
