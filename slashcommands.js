const fs = require('fs')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId,token,guildId } = require('./config.json')

const rest = new REST({ version: '9'}).setToken(token)

createSlash()

async function createSlash() {
    try{
        const commands = []
        fs.readdirSync('./commands').forEach(async (category) => {
            const commandFiles = fs.readdirSync(`./commands/${category}`).filter((archivo) => archivo.endsWith('.js'))
            for (const files of commandFiles) {
                const command = require(`./commands/${category}/${files}`)
                commands.push(command.data.toJSON())
            }
        })
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands }
        )
        console.log('The slash commands are pushed.')
    } catch(e) {
        console.error(e)
    }
}
