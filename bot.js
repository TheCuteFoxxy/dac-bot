const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require("./auth.json");
const prefix = ">"


client.on('ready', () => {
  console.log('Connection Successful');
});
client.on("ready", async () => {
    console.log(`${client.user.username} Restarting`);
      let setStatus = setInterval(function () {
          var names = [">help",`DAC`, 'you'];
          var game = names[Math.floor(Math.random() * names.length)];
         client.user.setActivity(game,{ type: 'watching' });
          client.user.setStatus(`online`);
       }, 10000)
  });
  client.on('message', message => {
    if (message.content === prefix + 'ping') {
        const staff = message.guild.roles.get("569313373720674315")
        message.delete(1)
        if(!message.member.roles.has(staff.id)){
            message.channel.send ('Access Denied')
            return;
        } else if(message.member.roles.has(staff.id)){
          message.channel.send('Pong!'); message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
        }}
        if (message.content === prefix + 'avatar') {
      message.reply(message.author.avatarURL);
  }
  if (message.content === prefix + 'help') {
    message.channel.send('Help command currently unavailable')
  }
if (message.content === '>ban reasons') {
     message.channel.send('**Bannable Offenses:** \n `Raiding (With proof)` \n `Hacking (With proof)` \n `Spamming DMs (With proof)` \n `DM Advertising (With proof)` \n `Violating Discord ToS (With proof)` \n `Making Threats (With proof)` \n `Sending Malicious Links (With proof)` \n `Nuking (With proof)` \n `Stealing our bots code (With proof)` \n `Violating Copyright (With proof)` \n `False Reporting` \n `DDoS Attacks (With proof)`');
}
if (message.content === prefix + 'everyone') {
  const management = message.guild.roles.get("569313188366123010")
  message.delete(1)
  if(!message.member.roles.has(management.id)){
      message.channel.send ('Access Denied')
      return;
  } else if(message.member.roles.has(management.id)){
    message.channel.send('@everyone');
  }
}
if (message.content === prefix + 'owner') {
    message.channel.send('The Bot Owner Is: <@548009285892833280>');
}
if (message.content === prefix + 'DAC-158763') {
  message.delete(1)
  message.member.addRole("569319986980454400");
}
if (message.content === prefix + 'DAC-429214') {
  message.delete(1)
  message.member.addRole("569319986980454400");
}
if (message.content === prefix + 'DAC-789213') {
  message.delete(1)
  message.member.addRole("569319986980454400");
}
if (message.content === prefix + 'dm') {
  message.author.send("DM 1" || "DM 2" || "DM 3"));
}
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-logs');
  if (!channel) return;
  channel.send(`${member}` + 'Joined the server.');
});
client.on('guildMemberRemove', member => {
const channel = member.guild.channels.find(ch => ch.name === 'member-logs');
if (!channel) return;
channel.send(`${member}` + 'Left the server');
});

client.login(auth.token);
