const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example') // Name of the command.
        .setDescription('example'), // Description of the command.
    async run(client, interaction) {
        await interaction.reply('.'); // Reply message
    }
}