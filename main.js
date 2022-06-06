const discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTgyNjMxMzU2ODE3MzY3MDQw.GV6gOy.IkUAbKUfvYQtnkpoSV1GjTst9-bvzwyR0fXjmM"

const clinet = new discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"    
    ]
})

clinet.on("ready", () => {
    console.log("bot logged in as ${clinet.user.tag}")
})

clinet.on("messageCreate", (msg) => {
    if (msg.content == "!rick") {
        msg.reply("<https://youtu.be/xvFZjo5PgG0>")
    }
})

clinet.login(process.env.TOKEN)