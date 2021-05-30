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
client.on('ready', () => {
    console.log('I\'m ready!');
    client.user.setActivity('giveaways', ({
     Type: "PLAYING" 
}));
});

client.on('message', (message) => {
    const ms = require('ms');
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'start') {
        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            winnerCount: parseInt(args[1]),
            prize: args.slice(2).join(' ')
        })
    }

    if (command === 'reroll') {
        const messageID = args[0];
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send('Giveaway rerolled!');
        }).catch(() => {
            message.channel.send('I couldn't find any giveaway on that message id');
        });
    }

    if (command === 'edit') {
        const messageID = args[0];
        client.giveawaysManager.edit(messageID, {
            addTime: ms(args[0]),
            newWinnerCount: parseInt(args[1]) ,
            newPrize: 'args.slice(2).join(' ')'
        }).then(() => {
            // Here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('Giveaway will updated in less than ' + numberOfSecondsMax + ' seconds.');
        }).catch(() => {
            message.channel.send('I couldn't find any giveaway on that message id.');
        });
    }

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
