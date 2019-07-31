const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require("./auth.json");


client.on('ready', () => {
  console.log('Connection Successful');
});
client.on("ready", async () => {
    console.log(`${client.user.username} starting`);
      let setStatus = setInterval(function () {
          var names = [">help",`DAC`, 'your commands'];
          var game = names[Math.floor(Math.random() * names.length)];
         client.user.setActivity(game,{ type: 'watching' });
          client.user.setStatus(`online`);
       }, 10000)
  });
client.on('message', message => {
  if (message.content === '>ping') {
    message.channel.send('Pong!'); message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
  }
 
 if (message.content === '>avatar') {
      message.reply(message.author.avatarURL);
  }
  if (message.content === '>help') {
    message.channel.send('**Commands:** \n `help` - This command \n `ping` - Provides the bots latency ping time \n `avatar` - Provides a link to the users avatar \n `ban reasons` - provides a valid list of ban reasons for DAC');
  }
if (message.content === '>ban reasons') {
     message.channel.send('**Bannable Offenses:** \n `Raiding (With proof)` \n `Hacking (With proof)` \n `Spamming DMs (With proof)` \n `DM Advertising (With proof)` \n `Violating Discord ToS (With proof)` \n `Making Threats (With proof)` \n `Sending Malicious Links (With proof)` \n `Nuking (With proof)` \n `Stealing our bots code (With proof)` \n `Violating Copyright (With proof)` \n `False Reporting` \n `DDoS Attacks (With proof)`');
}
if (message.content === '>ping everyone') {
    message.channel.send('@everyone');
}
if (message.content === '>owner') {
    message.channel.send('The Bot Owner Is: <@548009285892833280>');
}
});

client.login(auth.token);
