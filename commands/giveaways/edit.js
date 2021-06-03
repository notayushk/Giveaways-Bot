module.exports = {
name: "edit",
usage: "g!edit <message id> 1d 3 nitro",
ownerOnly: false, 
cooldown: 10000,
botPermission: [],
authorPermission: [MANAGE_GUILD],
aliases: [gedit],
description: "edit a giveaway",
run: async(message,args) => {
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

    
