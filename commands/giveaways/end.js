module.exports = {
name: "end",
usage: "g!end <message id>",
ownerOnly: false, 
cooldown: 10000,
botPermission: [],
authorPermission: [MANAGE_GUILD],
aliases: [gend],
description: "end a giveaway",
run: async(client,message,args) => {
const messageID = args[0];
        client.giveawaysManager.end(messageID).then(() => {
            message.channel.send('Success! Giveaway ended!');
        }).catch(() => {
            message.channel.send('I couldn't find any giveaway on that message id');
        });
}

    
