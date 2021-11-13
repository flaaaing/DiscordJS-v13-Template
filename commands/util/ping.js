const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Return the latency of the Discord API.'),
    async run(client, interaction) {
        const embed = new MessageEmbed()
            .setTitle('Pong! 🏓')
            .addFields({ name: 'Discord API Latency', value: ` **${client.ws.ping}ms**` })
            .setColor('GREEN')
            .setTimestamp()
        return interaction.reply({embeds: [embed]})
    }
}