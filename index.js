const Discord = require('discord.js');
const client = new Discord.Client();
const settings = {
        prefix: 'g!',
        token: config.Token
    };
const { GiveawaysManager } = require('discord-giveaways');
const manager = new GiveawaysManager(client, {
    storage: './storage.json',
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
        embedColor: '#FF0000',
        embedColorEnd: '#0000FF',
        reaction: '🎉'
    }
});
client.giveawaysManager = manager;
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.login(config.Token);
