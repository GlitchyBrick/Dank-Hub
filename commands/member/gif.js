let fs = require("fs");
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");
const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");

module.exports = class GifCommand extends Command {
  constructor(client) {
    super(client, {
      name: "gif",
      group: "member",
      memberName: "gif",
      guildOnly: true,
      description: "test"
    });
  }

  run(message) {
    var args = message.content.split(" ").slice(1).join(" ")
    let term = args.slice(0).join(" ");

    if (!term) return message.channel.send('what gif lol')

    giphy.search(term).then(function (res) {
        let id = res.data[0].id
        let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
        if(typeof THING != "undefined"){}

        const embed = new Discord.RichEmbed()
        .setImage(msgurl)
        .setColor('RANDOM')
        .setThumbnail('https://image.ibb.co/b0Gkwo/Poweredby_640px_Black_Vert_Text.png')
        .setTitle(`First Result for "${term}" on GIPHY`)

        message.channel.send(embed)

    });
  }
};
