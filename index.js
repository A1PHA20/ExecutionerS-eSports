require("dotenv").config()
const { Client, Collection } = require("discord.js")
const fs = require("fs")
const client = new Client({
  partials: ["GUILD_MEMBER", "MESSAGE", "CHANNEL", "REACTION"],
  allowedMentions: { parse: ["roles", "users"], repliedUser: true },
  restTimeOffset: 0,
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS"]
})
module.exports = client;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
	require(`./handlers/${handler}`)(client);
})
client.login("ODYzOTcyMjgzNjY0MDM5OTgx.YOuq5A.Yz0n-j8yJOdXheMhk5CwuZRpqFM")
process.on('unhandledRejection', (reason, p) => {
  console.log(' [antiCrash] :: Unhandled Rejection/Catch');
  console.log(reason, p);
});
process.on('uncaughtException', (err, origin) => {
  console.log(' [antiCrash] :: Uncaught Exception/Catch');
  console.log(err, origin)
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
  console.log(err, origin)
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log(' [antiCrash] :: Multiple Resolves');
  console.log(type, promise, reason)
});
