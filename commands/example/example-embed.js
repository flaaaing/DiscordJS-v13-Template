const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example-embed') // Name of the command. Obligatory
        .setDescription('example-embed'), // Description of the command.
    async run(client, interaction) {
        const embed = new Discord.MessageEmbed()
        // The title or description is obligatory
            .setTitle('.') 
            .setDescription('.') 
            .addField('.') // field or fields of the embed. Optional
            .setImage('.') // image of the embed. Optional
            .setThumbnail('.') // Thumbnail of the embed. Optional
            .setFooter('.') // footer of the embed. Optional
        return interaction.reply({embeds: [embed]}) // Reply embed
    }
}