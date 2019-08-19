const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require("./auth.json");
const prefix = ">"
const guild = "569304035472179200"


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
            message.channel.send ('You must be staff to use this command!')
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
      message.channel.send ('You must be Operations Management to use this command!')
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
  message.author.send("DM 1" || "DM 2" || "DM 3");
}
if (message.content === prefix + 'keygen') {
  message.channel.send("DAC-158763" || "DAC-429214" || "DAC-789213");
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
const member = guild.member
client.on('guildMemberAdd', member => {

member.send(`Welcome ${member} to **Discord Advertising Central**! Please read <#569325072230252546> and <#569341867863441413> for the server rules and advertising guidelines. If you at any time need some help, you can send a message in <#613131963187855360> and a staff member will be glad to assist you! \n\nIf you want to partner, head on over to <#569542837415182343> and read that then ping or DM a Partner Manager and they will guide you from there.\n\nYou can get some roles in <#569335136441729039>.\n\nIf you wish to try out our custom services then head over to <#569539946180771856> \n\n__If you leave the server, all your advertisements will be deleted!__\nThanks for joining!`  +  '\n\n To be verified type  `>DAC-429214`' + ` in <#569320176600743936>`)
}
if (message.content === prefix + 'prq') {
message.delete(1)
  message.channel.send('**Partner Requirements** /n/n Our Partner Requirements /n/n - Server must follow Discord TOS! /n/n - You must have a partner section in your server! /n/n- A member of at least 50 human users are required! /n/n - We do not ping /n/n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬/n/n If you agree to our requirements, please DM <@548009285892833280> to request a partnership. (DM'ing any other staff will result in the denial of a partnership.) \n\n Our partner ad is located in <#569542344353906689>');
});

client.login(auth.token);
