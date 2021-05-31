module.exports = {
name: "giveaway",
usage: "g!giveaway 1d 1 nitro",
ownerOnly: false, 
cooldown: 10000,
botPermission: [],
authorPermission: [MANAGE_GUILD],
aliases: [gstart,start],
description: "start a giveaway",
run: async(message,args) => {
const messageID = args[0];
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send('Giveaway rerolled!');
        }).catch(() => {
            message.channel.send('I couldn't find any giveaway on that message id');
        });
}

    
