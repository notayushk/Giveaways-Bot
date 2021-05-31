module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot latency ",
  usage: "ping",
  run: (client, message) => {
    message.channel.send(`**Pong** ${client.ws.ping} ms `);
  }
  
}
