module.exports = {
name: "giveaway",
usage: "g!giveaway 1d 1 nitro",
ownerOnly: false, 
cooldown: 10000,
category: "giveaways",
botPermission: [],
authorPermission: [MANAGE_GUILD],
aliases: [gstart,start],
description: "start a giveaway",
run: async(message,args) => {
client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            winnerCount: parseInt(args[1]),
            prize: args.slice(2).join(' ')
        }
}

    
