const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Return the avatar of the person you tagged, or your avatar.')
        .addUserOption(option => option.setName('person').setDescription('User whose avatar you want to see.')),
    async run(client, interaction) {
        const user = interaction.options.getUser('person')
        if (user) {
            const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`${user.username}'s avatar`)
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({embeds: [embed]})
        } else {
            const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Your avatar's`)
            .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 4096 }))
            return interaction.reply({embeds: [embed]})
        }
    }
}