const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready',() => {
    console.log('[+]Made by decept, join discord.gg/deceptdevv for more information')
})

client.on('messageCreate', message =>{
    if (message.content === 'ping') {
        message.reply ('pong')
    }
})

client.login(process.env.TOKEN)