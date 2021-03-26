let fs = require("fs");
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");
const emoji = require('discord-emoji-convert');

module.exports = class EmojifyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "emojify",
      group: "member",
      memberName: "emojify",
      guildOnly: true,
      description: "test"
    });
  }

  run(message) {
        var arg = message.content.split(" ").slice(1).join(" ")

        if(!arg) return message.channel.send('What do you want to emojify')
        if(arg.legth > 90) return message.channel.send('Please keep it under 90 characters')
        
        let emojis = emoji.convert(arg)
        message.channel.send(emojis).catch((_err) =>{
            message.channel.send(arg)
        })
  }
};
