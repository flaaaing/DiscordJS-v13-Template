const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example-embed') // Name of the command. Obligatory
        .setDescription('example-embed'), // Description of the command.
    async run(client, interaction) {
        const embed = new MessageEmbed()
        // The title or description is obligatory
            .setTitle('This is an example of a command.') 
            .setDescription('Created by Flaing') 
            .addFields({ name: 'Version', value: ` 1.0.0` }) // field or fields of the embed. Optional
            .setImage('') // image of the embed. Optional
            .setThumbnail('') // Thumbnail of the embed. Optional
            .setFooter('2021 © Flaing') // footer of the embed. Optional
            .setTimestamp() // Timestamp of the embed. Optional
        return interaction.reply({embeds: [embed]}) // Reply embed
    }
}