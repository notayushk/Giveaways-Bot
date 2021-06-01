module.exports = {
name: "reroll",
usage: "g!reroll <message id>",
ownerOnly: false, 
cooldown: 10000,
botPermission: [],
authorPermission: [MANAGE_GUILD],
aliases: [greroll],
description: "reroll a giveaway",
run: async(message,args) => {
const messageID = args[0];
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send('Giveaway rerolled!');
        }).catch(() => {
            message.channel.send('I couldn't find any giveaway on that message id');
        });
}

    
