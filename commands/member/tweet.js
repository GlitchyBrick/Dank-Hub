let fs = require("fs");
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");


module.exports = class TweetCommand extends Command {
  constructor(client) {
    super(client, {
      name: "tweet",
      group: "member",
      memberName: "tweet",
      guildOnly: true,
      description: "test"
    });
  }

  run(message) {
    let text = args.slice(0).join(" ");

    if(!text) return message.channel.send("You Didnt say What you want to tweet")
  
    fetch(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`)
    .then((res) => res.json())
    .then((body) => {
        let embed = new Discord.RichEmbed()
        .setTitle("Trump tweeted!")
        .setImage(body.message)
        .setColor(`BLUE`)
        message.channel.send(embed)
    })
  }
};
