const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Return the ping of the bot and the API of Discord.'),
    async run(client, interaction) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Pong! 🏓')
            .addField(`**${Date.now() - message.createdTimestamp}ms** \nDiscord API Latency: **${Math.round(client.ws.ping)}ms**`)
            .setTimestamp()
        return interaction.reply({embeds: [embed]})
    }
}