module.exports.run = (client) => {
 console.log('I\'m ready!');
    client.user.setActivity('giveaways', ({
     Type: "PLAYING" 
}));
  }
