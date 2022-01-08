const { Client, Message, MessageEmbed } = require("discord.js")
module.exports = {
  name: "say",
  description: "say Command",
  category: `⚙️ Utility`,
  aliases: [''],
  /**
* @param {Message} message
* @param {Client} client
*/
  async run(client, message, args, prefix) {
    message.delete()
    message.channel.send({ content: args.join(" ")})
  }
}