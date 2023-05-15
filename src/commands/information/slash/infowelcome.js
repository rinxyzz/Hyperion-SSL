/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "welcomehelp",
  description: "Help About Customization Description Welcome",
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
    await message.safeReply(`**Here List Of Customization**\n\n**Member & Servers**\n\\n/ : **Space**\n{server} : **Get This Server Name**\n{servericon} : **Get Server Icon**\n{count} : **Get Current Member Count**\n{member:nick} : **Get Member Display Name**\n{member:name} : **Get Member Username Without Discriminator**\n{member:dis} : **Get Member Discriminator Or Tag**\n{member:tag} : **Get Member Tag**\n{member:avatar} : **Get Member Avatar**\n\n**Inviter**\n{inviter:name} : **Get Inviter Name**\n{inviter:tag} : **Get Inviter Discriminator**\n{invites} : **Get Inviter Data**\n
`);
  },

  async interactionRun(interaction) {
    await interaction.followUp(`**Here List Of Customization**\n\n**Member & Servers**\n\\n/ : **Space**\n{server} : **Get This Server Name**\n{servericon} : **Get Server Icon**\n{count} : **Get Current Member Count**\n{member:nick} : **Get Member Display Name**\n{member:name} : **Get Member Username Without Discriminator**\n{member:dis} : **Get Member Discriminator Or Tag**\n{member:tag} : **Get Member Tag**\n{member:avatar} : **Get Member Avatar**\n\n**Inviter**\n{inviter:name} : **Get Inviter Name**\n{inviter:tag} : **Get Inviter Discriminator**\n{invites} : **Get Inviter Data**\n
`);
  },
};