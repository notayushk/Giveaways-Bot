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


client.on('message', (message) => {
    const ms = require('ms');
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
if (command === 'delete') {
        const messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send('Giveaway deleted!');
        }).catch(() => {
            message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
        });
    }
    
    if (command === 'end') {
        const messageID = args[0];
        client.giveawaysManager.end(messageID).then(() => {
            message.channel.send('Success! Giveaway ended!');
        }).catch(() => {
            message.channel.send('I couldn't find any giveaway on that message id');
        });
    }
});

client.login(config.Token);
