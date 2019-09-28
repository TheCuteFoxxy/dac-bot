///Version 1.2.6
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
// Embed Commands
  client.on('message', message => {
    if  (message.content === prefix + 'test embed') {
      const embed = {
        "title": "Discord Advertising Central",
        "description": "This is a test of the emergency embed system. Please do not remain calm.",
        "color": 1835263,
        "timestamp": "2019-08-26T13:49:14.682Z",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
          "text": "DAC © 2019; All Rights Reserved"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg"
        },
        "image": {
          "url": "https://cdn.discordapp.com/attachments/615548285456744504/615554484357300244/DAC_banner.jpg"
        }
      };
      message.delete(1)
      message.channel.send({embed});
    }      
if (message.content === prefix + 'checkpoint') {
const embed = {
  "color": 16056064,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "image": {
    "url": "https://cdn.discordapp.com/attachments/553649843550027776/617763440412459018/2019-09-01-10-48-49.jpg"
  },
  "fields": [
    {
      "name": "Checkpoint",
      "value": "To Enter the server, input the key you were sent via DMs including the prefix `>`. \n\nIf you did not recieve the DM when you joined please ensure your DMs are enabled and type `>keygen` to generate a new key. \n\n If you did not recieve the key after typing `>keygen` please ping or DM a <@&569313321296330767> or <@&569356696250482689>. \n\n Please do not ping or DM <@&569313188366123010> unless you have been waiting a while and no one has assisted you. \n\n Posting advertisements of any kind in this channel will result in an immediate ban. \n\n\n Thank you for advertising with Discord Advertising Central."
    }
  ]
};
message.delete(1)
message.channel.send({embed});
  }
if (message.content === prefix + 'blacklist') {
const embed = {
  "color": 16711680,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "⛔ Blacklist ⛔",
      "value": "Servers listed here have been added to the DAC Blacklist. Servers can end up on the blacklist for the following reasons. \n\n - Discord [Terms Of Service](https://www.discordapp.com/terms) Violations \n\n - Raidng/Hacking \n\n - Ads containing malicious links \n\n - Banning users without reason (Abuse of power/Impulsive bans) \n\n - Extreme Toxicity\n\n - Breaking Laws\n\n - False Advertising \n\n\n *This list is subject to change and the staff of DAC reserve the right to blacklist servers at their discretion.* "
    }
  ]
};
message.delete(1)
message.channel.send({embed});
  }
if (message.content === prefix + 'listed servers') {
const embed = {
  "color": 5631,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Become Listed",
      "value": "To become a listed server you must meet the following requirements. \n\n\n - Have at least **100** members in your server \n\n - Follow all Discord [Terms Of Service](https://www.discordapp.com/terms) and [Community Guidelines](https://discordapp.com/guidelines) \n\n - Must be an Advertising/Listing server or allow advertising in the server \n\n - DAC Management Must be able to join\n\n - Server and Server Owner can not be blacklisted \n\n\n Apply [here](https://forms.gle/KXytSHBeApYMExKC7) to become a Listed Server\n\n\n *These requirements are subject to change*."
    }
  ]
};
message.delete(1)
message.channel.send({embed});
  }
if (message.content === prefix + 'ad rights') {
const embed = {
  "color": 16711910,
  "timestamp": "2019-08-30T14:11:55.093Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Advertising Rights",
      "value": "By using DAC services and servers you agree to the following: \n\n - Admin access to your server by our team to investigate an incident if deemed necessary. \n\n - The right to have your server removed off our platform. \n\n- To request audit log access."
    }
  ]
};
message.delete(1)
message.channel.send({embed});
  }
if  (message.content === prefix + 'partner req') {
const embed = {
  "color": 65331,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Our Partnership Requirements",
      "value": "\n- Server **must** follow Discord TOS!  \n\n - You must have a partner section in your server! \n\n - A member of at least **75** human users are required! \n\n - We do not ping \n\n  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n\n  If you agree to our requirements, please DM a **Partner Manager** to request a partnership. \n\n Our partner ad is located in <#569542344353906689>"
    }
  ]
};
    message.delete(1)
    message.channel.send({embed});
}
if (message.content === prefix + 'Insurance') {
const embed = {
  "color": 1441536,
  "timestamp": "2019-08-30T14:11:55.093Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Insurance",
      "value": "By being a member of DAC and its sister servers you are insured against raids or attacks against your server. Please see the insurance policy terms for details. In the event your claim is approved, we will ban the member on your behalf, report them to discord, and send a representative to assist with rebuilding your server (if needed). This service is free and available to all members."
    }
  ]
};
message.delete(1)
message.channel.send({embed});
}
if (message.content === prefix + 'links set 2') {
const embed = {
  "color": 16711680,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Links",
      "value": "\n**DAC Invite:** [https://discord.gg/ngHhXAa](https://discord.gg/ngHhXAa) \n\n**DRC Invite:** [https://discord.gg/PU4DzxP](https://discord.gg/PU4DzxP) \n\n**DAC Directory Invite:** [https://discord.gg/aGwSvCw](https://discord.gg/aGwSvCw)"
    }
  ]
};
message.delete(1)
message.channel.send({embed});
  }
if (message.content === prefix + 'links') {
const embed = {
  "color": 1376511,
  "timestamp": "2019-08-30T14:11:55.093Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved |"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg"
  },
  "fields": [
    {
      "name": "Links",
      "value": "**DAC Invite:** [https://discord.gg/ngHhXAa](https://discord.gg/ngHhXAa) \n\n **DRC Invite:** [https://discord.gg/PU4DzxP](https://discord.gg/PU4DzxP) \n\n **Punishment Appeal:** [https://forms.gle/p8fDS37ZUZPfVDLs7](https://forms.gle/p8fDS37ZUZPfVDLs7) \n\n **Insurance Policy:** [https://docs.google.com/document/d/1nV8MsEyuOOoeIrkEISKOvbziOEPQgwgcGeZkfkttr-M/edit?usp=sharing](https://docs.google.com/document/d/1nV8MsEyuOOoeIrkEISKOvbziOEPQgwgcGeZkfkttr-M/edit?usp=sharing) \n\n **DAC Insuance Claim:** [https://forms.gle/FYi98bK5kPEVW3RGA](https://forms.gle/FYi98bK5kPEVW3RGA)"
    }
  ]
};
message.delete(1)
message.channel.send({embed});
}
if (message.content === prefix + 'services 1')  {
const embed = {
  "color": 16738816,
  "timestamp": "2019-09-17T19:38:02.421Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Services",
      "value": "DAC Offers many services for our members, both free and premium. Some of our services include: \n\n - General tips and tricks questions on how to grow and maintain your server \n - Server security check on how to take proper measures on how to make sure your server is safe from raids and attacks \n - Server facelift feedback on how to improve your server, organize channels, roles, etc. and make it look appealing to your members \n - Ad reviews on expert advice about how to make a great looking ad for your server \n\n ```Tips N' Tricks``` \n\n Our <#623605342886035506>  channel is for you to look at and there will be things in there that will help you grow your server and gain members and keep them. It is very useful and can be effective if done right. If you have any additional questions to ask our Growth Assistants, you can ask away in <#623603525053841448>. \n\n Some of the General Tips are: \n - Channel Organisation \n - Role Tips \n - Growing server and activity \n - How to be more professional \n - Layout and etc \n\n"
    }
  ]
};
    message.delete(1)
message.channel.send({embed});
  }
if (message.content === prefix + 'services 2') {
const embed = {
  "color": 16738816,
  "timestamp": "2019-09-17T19:49:29.886Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Services",
      "value": "```Server Security Check```Want to put your server security to the test? Participate in a Server Security Check and one of our vetted staff will join your server and put your security to the test. You may request a Server Security check by requesting a **Server Security Check** in <#571490532061216768> and a staff member will join when they can and let you know and give you advice on what to do. They will be helping you with on what to add for example bots, verification, staff and etc. This will help prevent nukes and raids. \n ```Server Facelift Feedback```For a server facelift feedback, ask for **Server Facelift Feedback** in <#623603525053841448> and a Growth Team member will join your server to review it and give you feedback on what to change and improve. The Growth Assistance team with help with additional tips and ways to help the server in any possible way."
    }
  ]
};
message.delete(1)
message.channel.send({embed});
  }
if (message.content === prefix + 'services 3') {
const embed = {
  "color": 16738816,
  "timestamp": "2019-09-17T19:57:30.292Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Services",
      "value": "```Ad Review``` \nWant feedback on your server ad? Request an **Ad Review** in <#623603525053841448> This service is for our team to give expert advice on your ad since it is the first thing people will see when looking at your server and you want it to look very good. Our team will give you ideas and ways on how to improve your ad to attract more people to your server in the best way possible. \n ```Join Our Team``` Want to join our Growth Experts, team? Apply in <#569533387979882496> today!"
    }
  ]
};
message.delete(1)
message.channel.send({embed});
  }
if (message.content === prefix + 'whois premium') {
if(message.channel.type =='dm') return;
const management = message.guild.roles.get("569313224869281816")
    if(!message.member.roles.has(management.id)){
      message.channel.send ('You must be Management to use this command!')
      return;
} else if(message.member.roles.has(management.id)){
const embed = {
  "color": 5631,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC Premium List"
  },
  "fields": [
    {
      "name": "Premium Key Holders",
      "value": " Key Holder List \n\n<@548009285892833280> - Lifetime (Issued 09/25/2019) \n\n<@293841631583535106> - Lifetime (Issued 09/23/2019) \n\n<@334840635775254528> - Lifetime (Issued 09/23/2019)\n\n <@282966457162399744> - Lifetime (Issued 09/23/2019)"
    }
  ]
};
  message.delete(1)
message.channel.send({embed});
}}
});
// Normal Commands
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
    message.delete(1)
    message.channel.send('Help command currently unavailable')
  }
if (message.content === 'kill me') {
  message.channel.send(`*kills ${message.author}*`)
  message.delete(1)
}
//if (message.content === prefix + 'test') {
//message.delete(1)
//    const secondary_guild = client.guilds.get("571870208185335848");
//   const user = message.secondary_guild.member(messsage.mentions.users.first());
//    const test001 = message.secondary_guild.channels.get("625142396937830410");
//  
//    test001.send(`Testing mentions defined ${user}`)
// }
 if (message.content === prefix + 'ban reasons') {
 message.delete(1)
     message.channel.send('**Bannable Offenses:** \n `Raiding (With proof)` \n `Hacking (With proof)` \n `Spamming DMs (With proof)` \n `DM Advertising (With proof)` \n `Violating Discord ToS (With proof)` \n `Making Threats (With proof)` \n `Sending Malicious Links (With proof)` \n `Nuking (With proof)` \n `Stealing our bots code (With proof)` \n `Violating Copyright (With proof)` \n `False Reporting` \n `DDoS Attacks (With proof)`');
}

    //Lifetime Premium Key
if (message.content === prefix + 'DAC-Premium-461234') {
  message.delete(1)
  message.member.addRole("625700940770574337");
}
if (message.content === prefix + 'owner') {
  message.delete(1)
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
if (message.content === prefix + 'keygen') {
  message.delete(1)
  message.author.send("Use the following command in <#569320176600743936> to verify. `>DAC-158763`");
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

// Welcome Message
const member = guild.member
client.on('guildMemberAdd', member => {

member.send(`Welcome ${member} to **Discord Advertising Central**! Please read <#569325072230252546> and <#569341867863441413> for the server rules and advertising guidelines. If you at any time need some help, you can send a message to <@546661574182436864> and a staff member will be glad to assist you! \n\nIf you want to partner, head on over to <#569542837415182343> and read that then ping or DM a Partner Manager and they will guide you from there.\n\nYou can get some roles in <#569335136441729039>.\n\nIf you wish to try out our custom services then head over to <#569539946180771856> \n\n__If you leave the server, all your advertisements will be deleted!__\nThanks for joining!`  +  '\n\n To be verified type  `>DAC-429214`' + ` in <#569320176600743936>`)


  
    });
client.login(auth.token);
