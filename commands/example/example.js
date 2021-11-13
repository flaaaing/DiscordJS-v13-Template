const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('') // Name of the command.
        .setDescription(''), // Description of the command.
    async run(client, interaction) {
        await interaction.reply(''); // Reply message
    }
}