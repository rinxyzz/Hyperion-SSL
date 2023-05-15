/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "vote",
  description: "Support Me By Voting",
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
   await interaction.reply(`**Enjoying Hyperion?**\n\n[Official Vote Page](https://hyperion.rin4ever.xyz/vote/)\nAlternatively the Hyperion Bot is also listed on the following websites:\n- [Discord Bot List](https://discordbotlist.com/bots/hyperion-0651)\n- [Discords](https://discords.com/bots/bot/1103427996532097054)\n\nVoting for the bot increases its visibility and helps others discover hyperion Thank you for every vote!`);
  },

  async interactionRun(interaction) {
    await interaction.followUp(`**Enjoying Hyperion?**\n\n[Official Vote Page](https://hyperion.rin4ever.xyz/vote/)\nAlternatively the Hyperion Bot is also listed on the following websites:\n- [Discord Bot List](https://discordbotlist.com/bots/hyperion-0651)\n- [Discords](https://discords.com/bots/bot/1103427996532097054)\n\nVoting for the bot increases its visibility and helps others discover hyperion Thank you for every vote!`);
  },
};