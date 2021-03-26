let fs = require("fs");
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");


module.exports = class AchievementCommand extends Command {
  constructor(client) {
    super(client, {
      name: "achievement",
      group: "member",
      memberName: "achievement",
      guildOnly: true,
      description: "test"
    });
  }

  run(message) {
    var args = message.content.split(" ").slice(1).join(" ")
    if(!args[0]) return message.channel.send('You Cant Achieve Nothing')
    if(args[1]) return message.channel.send('No Spaces Please')

    const embed = new Discord.MessageEmbed();
    embed.setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=1&h=Achievement+get%21&t=${args[0]}`)
    embed.setColor('GREEN')

    message.channel.send(embed)
  }
};
