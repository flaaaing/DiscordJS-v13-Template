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
            .addField('Version 1.0.0') // field or fields of the embed. Optional
            .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2014%2F10%2Fanimal%2FCute_Golden_Dog.jpg&f=1&nofb=1') // image of the embed. Optional
            .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.backpacker.com%2F.image%2Ft_share%2FMTU2Mzk0NDU5ODQ2NjgxOTAz%2F23158166954_7643010070_k.jpg&f=1&nofb=1') // Thumbnail of the embed. Optional
            .setFooter('2021 ® Flaing') // footer of the embed. Optional
        return interaction.reply({embeds: [embed]}) // Reply embed
    }
}