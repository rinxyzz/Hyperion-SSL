/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "wiki",
  description: "Visit Hyperion Wiki",
  category: "INFORMATION",
  command: {
    enabled: true,
  },
  slashCommand: {
    enabled: true,
    ephemeral: true,
    options: [],
  },

async messageRun(message, args) {
    await message.safeReply(`Visit Hyperion Wiki: https://github.com/rinxyzz/hyperion/wiki`);
  },

  async interactionRun(interaction) {
    await interaction.followUp(`Visit Hyperion Wiki: https://github.com/rinxyzz/hyperion/wiki`);
  },
};