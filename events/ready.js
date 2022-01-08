const client = require('../index')
client.on("ready", () => {
    console.log(`${client.user.tag} is Online!`)
    client.user.setActivity(`How RedZone Coded ME!`, {
        type: "WATCHING"
    })
    client.user.setStatus("dnd")
})