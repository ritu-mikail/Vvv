module.exports.config = {
  name: "imagine2",
  version: "1.0.0",
  permission: 0,
  credits: "Mahi--", 
  description: "",
  prefix: 'awto',
  category: "prefix",
  usages: "prompt",
  cooldowns: 10,
  dependencies: {
     'axios': '' 
  }
};

module.exports.run = async function({ api, event, args }) {

  const axios = require("axios")

   const content = args.join(" ");
if (!args[0]) return api.sendMessage(`Usage: ${global.config.PREFIX}${this.config.name} cat, 4k`, event.threadID, event.messageID)

if (this.config.credits !== "Mahi--") {
  return api.sendMessage("⚠️ Credit modification detected. The command is disabled.", event.threadID, event.messageID);
}

try {
  const response = await axios.get(`https://hopelessmahi.onrender.com/api/image?prompt=${content}`);

  api.setMessageReaction("✨", event.messageID, (err) => {}, true);

  const imageUrl = response.data.image_url; 

  const pic = (
    await axios.get(imageUrl, { responseType: 'stream' })
  ).data;

  const msg = `🖼️ Here's your generated image!`;

  return api.sendMessage({
    body: msg,
    attachment: pic
  }, event.threadID, event.messageID);

} catch (err) {
  api.setMessageReaction("🚫", event.messageID, (err) => {}, true);
  console.log(err)
  api.sendMessage(`Oops! Something went wrong while generating the image.`, event.threadID, event.messageID);  
}
};
