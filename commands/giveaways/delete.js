module.exports = {
name: "delete",
usage: "g!delete «message id»",
category: "giveaways",
ownerOnly: false, 
cooldown: 10000,
botPermission: [],
authorPermission: [MANAGE_GUILD],
aliases: [gdelete],
description: "delete a giveaway",
run: async(client,message,args) => {
const messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send('Giveaway deleted!');
        }).catch(() => {
            message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
        });
}

    
