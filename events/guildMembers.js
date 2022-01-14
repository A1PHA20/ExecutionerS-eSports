const client = require("../index")
const { MessageEmbed } = require("discord.js")

client.on("guildMemberAdd", async (member) => {
    if (member.guild.id !== "782827754500522006") return
    const channel = member.guild.channels.cache.get("782833451409735700")
    if (!channel) return;
    const embed = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`Welcome to **${member.guild.name}** Discord Server.\n\nUse <#782838272245760011> for general chatting.\nCheck <#886986860411379732> for our all latest updates and information.\n\n**Tag @Moderator if you have any inquiry**\n\nWe are now **${member.guild.memberCount}** in the server.`)
        .setTimestamp()
        .setColor("WHITE")
        .setFooter(member.guild.name, member.guild.iconURL({ dynamic: true }))
    channel.send({ content: `<@${member.user.id}>`, embeds: [embed] })
    const role = member.guild.roles.cache.get("782919301081595924")
    if (!role) return;
    await member.roles.add(role)
})
client.on("guildMemberRemove", async (member) => {
    if (member.guild.id !== "782827754500522006") return
    const channel = member.guild.channels.cache.get("782840488012939275")
    if (!channel) return;
    const embed = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`> Boddah chole gase!!:cry::cry:\n> We are now **${member.guild.memberCount}** in the server.`)
        .setTimestamp()
        .setColor("RED")
        .setFooter(member.guild.name, member.guild.iconURL({ dynamic: true }))
    channel.send({ content: `<@${member.user.id}>`, embeds: [embed] })
})
