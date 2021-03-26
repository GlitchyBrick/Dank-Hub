let fs = require("fs");
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const { Client, MessageAttachment } = require("discord.js");


module.exports = class DropCommand extends Command {
  constructor(client) {
    super(client, {
      name: "test",
      group: "member",
      memberName: "test",
      guildOnly: true,
      description: "test"
    });
  }

  run(message) {
    message.channel.send('e')
  }
};
