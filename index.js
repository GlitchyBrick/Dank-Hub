const { CommandoClient } = require("discord.js-commando");
const { Structures } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const path = require("path");
const figlet = require('figlet');

const client = new CommandoClient({
  commandPrefix: '-',
  owner: "792168239375187989"
});

client.registry.registerDefaultTypes()
client.registry.registerGroups([
  ["member", "Member Commands"]

])

client.registry.registerDefaultGroups()
client.registry.registerDefaultCommands({
  help: false,
  ping: true,
  prefix: false,
  commandState: false,
  unknownCommand: false
})

client.registry.registerCommandsIn(path.join(__dirname, "commands"))

client.on("ready", () => {
  figlet('Made By GlitchyBrick', (err, result) => {
    console.log(err || result)
  })
});

client.login('Nzk1NDE1ODUzNzcyMzA4NTAw.X_JCvQ.zy23wCnSLjP7T6ApG3Uk_IzCgzQ')