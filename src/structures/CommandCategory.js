const config = require("@root/config");

module.exports = {
  ADMIN: {
    name: "Admin Guild",
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983568822227004/admin320.png",
    emoji: "⚙️",
  },
  AUTOMOD: {
    name: "Automod",
    enabled: config.AUTOMOD.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983568599916614/admin3202.png",
    emoji: "🤖",
  },
  ANIME: {
    name: "Anime",
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983568369221672/anime320.png",
    emoji: "🎨",
  },
  ECONOMY: {
    name: "Economy",
    enabled: config.ECONOMY.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983568109195275/economy320.png",
    emoji: "🪙",
  },
  FUN: {
    name: "Fun",
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983517475549216/economy3202.png",
    emoji: "😂",
  },
  GIVEAWAY: {
    name: "Giveaway",
    enabled: config.GIVEAWAYS.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983517274218537/giveaway320.png",
    emoji: "🎉",
  },
  IMAGE: {
    name: "Image",
    enabled: config.IMAGE.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983517035151402/image320.png",
    emoji: "🖼️",
  },
  INVITE: {
    name: "Invite",
    enabled: config.INVITE.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983516720574474/invite320.png",
    emoji: "📨",
  },
  INFORMATION: {
    name: "Information",
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983516351479879/info320.png",
    emoji: "🪧",
  },
  MODERATION: {
    name: "Moderation",
    enabled: config.MODERATION.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983516074651698/moderation320.png",
    emoji: "🔨",
  },
  MUSIC: {
    name: "Music",
    enabled: config.MUSIC.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983457056587826/music320.png",
    emoji: "🎵",
  },
  OWNER: {
    name: "Owner & Developer (unavailable)",
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983456758800424/code320.png",
    emoji: "🤴",
  },
  SOCIAL: {
    name: "Social",
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103985104604368957/social320.png",
    emoji: "🫂",
  },
  STATS: {
    name: "Statistics",
    enabled: config.STATS.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983456435843112/statistik320.png",
    emoji: "📈",
  },
  SUGGESTION: {
    name: "Suggestion",
    enabled: config.SUGGESTIONS.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983456146432010/paper320.png",
    emoji: "📝",
  },
  TICKET: {
    name: "Ticket",
    enabled: config.TICKET.ENABLED,
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983455894777896/ticket320.png",
    emoji: "🎫",
  },
  UTILITY: {
    name: "Utility",
    image: "https://cdn.discordapp.com/attachments/1068223147955998740/1103983455555035156/utility320.png",
    emoji: "🛠",
	},
};
