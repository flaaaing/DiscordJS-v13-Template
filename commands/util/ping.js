const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Return the latency of the Discord API.'),
    async run(client, interaction) {
        const embed = new MessageEmbed()
            .setTitle('Pong! 🏓')
            .addField(`Discord API Latency: **${client.ws.ping}ms**`)
            .setTimestamp()
        return interaction.reply({embeds: [embed]})
    }
}