///Version 1.5.4
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require("./auth.json");
const prefix = ">"
const devprefix = "/"
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
// Embed Commands
  client.on('message', message => {
if (message.content.toLowerCase() === devprefix + 'keys') {
if(message.channel.type =='dm') return;
const developer = message.guild.roles.get("638563829902606356")
        message.delete()
        if(!message.member.roles.has(developer.id)){
            message.channel.send ('Only a bot developer can use this command!')
            return;
        } else if(message.member.roles.has(developer.id)){
          message.author.send('**DAC KEYS**\n\n\n **Lifetime Premium:** `>DAC-Premium-871319`\n\n **VERIFICATION KEY:** `>DAC-158763`');
        }}
});
/// Help Command
client.on('message', message => {
  if(!message.content) return;
if (message.content.toLowerCase() === prefix + 'help') {
const embed = {
  "color": 39674,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Commands List",
      "value": "Help Command Not Configured, Please contact a the developer."
    }
  ]
};
    message.delete()
    message.channel.send({embed});
  }
    //Lifetime Premium Key
if (message.content === prefix + 'DAC-Premium-871319') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Premium Redemption",
      "value": "Premium Key Redeemed!"
    }
  ]
};
  message.delete()
  message.member.addRole("569313968326311957"),
console.log('A Premium Key Was Redeemed - Lifetime')
  message.channel.send({embed});
  (message.guild.channels.get('627937789027155978').send(`${message.author.tag} \`${message.author.id}\` redeemed a lifetime premium key`));
  return;
}
if (message.content.toLowerCase() === prefix + 'version') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Bot Version",
      "value": "v.1.5.4"
    }
  ]
};
  message.delete()
  message.channel.send({embed})
}
/// Ping/Latency Command
 if (message.content.toLowerCase() === prefix + 'ping') {
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
        }
        if (message.content === prefix + 'guild test') {
        message.channel.send(`${guild.id}`)
      }
/// Avatar Command
 if (message.content.toLowerCase() === prefix + 'avatar') {
      message.channel.send(message.author.avatarURL);
 }
if(message.content.toLowerCase() === "back in nam") {
message.channel.send('https://tenor.com/Qk0Y.gif')
}
///Entry Key
if (message.content === prefix + 'DAC-158763') {
  message.delete()
  message.member.addRole("569313830845415424");
}
//Reaction - Hello React
if (message.content.toLowerCase() === 'hello' ||(message.content.toLowerCase() === 'hi')) {
message.react('👋')
}
if (message.content.toLowerCase() === 'help') {
message.reply('Need help? Send a DM to <@646723256241487882> for assistance!')
}
///Generate New Key
if (message.content.toLowerCase() === prefix + 'keygen') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Key Generation",
      "value": "Use the following key in <#627937632638468116> to verify. `>DAC-158763`"
    }
  ]
};
  message.delete()
  message.author.send({embed})
}
///Enter/Leave Logs
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

// Welcome Message
const member = guild.member
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Welcome To DAC",
      "value": "Welcome to **Discord Advertising Central**! Please read <#627937640481685530> and <#627937642247356416> for the server rules and advertising guidelines. If you at any time need some help, you can send a message to <@646723256241487882> and our team will be glad to assist you! \n\nIf you want to partner, head on over to <#627937672907849735> and read that then DM <@646723256241487882> and our team will guide you from there.\n\nYou can get some roles in <#627937643895848970>.\n\nIf you wish to try out our custom services then head over to <#569539946180771856> \n\n__If you leave the server, all your advertisements will be deleted!__\nThanks for joining! \n\nTo be verified type  `>DAC-158763` in <#627937632638468116>"
    }
  ]
};
client.on('guildMemberAdd', member => {
member.send({embed})
})
  
kill code

});
client.login(auth.token);
