const { readdirSync } = require("fs");
const ascii = require("ascii-table");


// Create a new Ascii table
let table = new ascii("Events");
table.setHeading("Events", "Load status");

module.exports = (client) => {

  const commands = readdirSync(__dirname.replace("\handlers", "\events")).filter(file => file.endsWith(".js"));

  for (let file of commands) {

    try {
    let pull = require(`${__dirname.replace("\handlers", "\events")}/${file}`);

    

    pull.event = pull.event || file.replace(".js", "")

    client.on(pull.event, pull.run.bind(null, client))

    table.addRow(file, '✅');

    } 
  }

   
}
