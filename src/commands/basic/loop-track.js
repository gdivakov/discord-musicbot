const { SlashCommandBuilder } = require("@discordjs/builders");
const { useQueue } = require("discord-player");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("loop")
        .setDescription("Loop current track"),
    async execute({ client, interaction }) {
        const queue = useQueue(interaction.guild.id);
        queue.setRepeatMode(1);

        await interaction.reply('Track was looped !')
    }
}