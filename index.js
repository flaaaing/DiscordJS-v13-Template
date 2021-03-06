const { Client, Intents, Collection } = require('discord.js')
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] [Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection()

require("./handlers/events.js")(client);
require("./handlers/commands.js")(client);

client.login(process.env.token)