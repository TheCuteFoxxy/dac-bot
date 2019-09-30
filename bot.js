///Version 1.3.0
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
      "value": "To Enter the server, input the key you were sent via DMs including the prefix `>`. \n\nIf you did not recieve the DM when you joined please ensure your DMs are enabled and type `>keygen` to generate a new key. \n\n If you did not recieve the key after typing `>keygen` please ping or DM a <@&569313288232501258> or <@&569313321296330767>. \n\n Please do not ping or DM <@&569313224869281816> unless you have been waiting a while and no one has assisted you. \n\n Posting advertisements of any kind in this channel will result in an immediate ban. \n\n\n Thank you for advertising with Discord Advertising Central."
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
      "value": "\n- Server **must** follow Discord TOS!  \n\n - You must have a partner section in your server! \n\n - A member of at least **75** human users are required! \n\n - We do not ping \n\n  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n\n  If you agree to our requirements, please DM a **Partner Manager** to request a partnership. \n\n Our partner ad is located in <#627937674543628291>"
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
      "value": "**DAC Invite:** [https://discord.gg/xNvRPk](https://discord.gg/xNvRPk) \n\n**Punishment Appeal:** [https://forms.gle/p8fDS37ZUZPfVDLs7](https://forms.gle/p8fDS37ZUZPfVDLs7) \n\n **Insurance Policy:** [https://docs.google.com/document/d/1nV8MsEyuOOoeIrkEISKOvbziOEPQgwgcGeZkfkttr-M/edit?usp=sharing](https://docs.google.com/document/d/1nV8MsEyuOOoeIrkEISKOvbziOEPQgwgcGeZkfkttr-M/edit?usp=sharing) \n\n **DAC Insuance Claim:** [https://forms.gle/FYi98bK5kPEVW3RGA](https://forms.gle/FYi98bK5kPEVW3RGA)"
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
      "value": "DAC Offers many services for our members, both free and premium. Some of our services include: \n\n - General tips and tricks questions on how to grow and maintain your server \n - Server security check on how to take proper measures on how to make sure your server is safe from raids and attacks \n - Server facelift feedback on how to improve your server, organize channels, roles, etc. and make it look appealing to your members \n - Ad reviews on expert advice about how to make a great looking ad for your server \n\n ```Tips N' Tricks``` \n\n Our <#627937693682237450>  channel is for you to look at and there will be things in there that will help you grow your server and gain members and keep them. It is very useful and can be effective if done right. If you have any additional questions to ask our Growth Assistants, you can ask away in <#627937691790606336>. \n\n Some of the General Tips are: \n - Channel Organisation \n - Role Tips \n - Growing server and activity \n - How to be more professional \n - Layout and etc \n\n"
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
      "value": "```Server Security Check```Want to put your server security to the test? Participate in a Server Security Check and one of our vetted staff will join your server and put your security to the test. You may request a Server Security check by requesting a **Server Security Check** in <#627937691790606336> and a staff member will join when they can and let you know and give you advice on what to do. They will be helping you with on what to add for example bots, verification, staff and etc. This will help prevent nukes and raids. \n ```Server Facelift Feedback```For a server facelift feedback, ask for **Server Facelift Feedback** in <#627937691790606336> and a Growth Team member will join your server to review it and give you feedback on what to change and improve. The Growth Assistance team with help with additional tips and ways to help the server in any possible way."
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
      "value": "```Ad Review``` \nWant feedback on your server ad? Request an **Ad Review** in <#627937691790606336> This service is for our team to give expert advice on your ad since it is the first thing people will see when looking at your server and you want it to look very good. Our team will give you ideas and ways on how to improve your ad to attract more people to your server in the best way possible. \n ```Join Our Team``` Want to join our Growth Experts, team? Apply in <#627937669279645716> today!"
    }
  ]
};
message.delete(1)
message.channel.send({embed});
  }
if  (message.content === prefix + 'rules 1') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Server Rules",
      "value": "**Language**  \n\nEnglish only. Please limit other languages to well known quotes or provide a correct translation. \nAnything deemed politically extreme, pornographic, illegal, or unsavory in any way is prohibited. \nRacist or ethnic bashing comments are forbidden even if used in jest. \nComments that play down the use of illegal drugs or promote the use of said substances are strictly forbidden. \nNo use of profanity will be permitted (including masked profanity). If it's something a moderator feels is inappropriate, it will be deleted. "}
  ]
};
    message.delete(1)
    message.channel.send({embed});
}
if  (message.content === prefix + 'rules 2') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Server Rules",
      "value": "**General** \n\n- Treat each other with respect and remain polite. \n- Personal insults are not allowed anywhere in this server, including chats and DMs. \n- Users are not allowed to impersonate moderators. \n- Spam and off topic comments will be deleted. \n- Do not attempt to provoke the moderators. This action will be punished. \n- members who deliberately act against the building of the server  will be denied access to these server. \n- It is not allowed to rebuke another user concerning his grammar/spelling. If the grammar/spelling of a user is that bad, report the post to a moderator. \n- Do not include lots of unnecessary quotations. \n- Do not excessively use the markdown features \n- No sharing of illegal content. \n- No spam or soliciting. \n- To report the breaching of rules by another player in the server please contact a <@&569313288232501258>. "
    }
  ]
};
    message.delete(1)
    message.channel.send({embed});
}
if  (message.content === prefix + 'rules 2') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Server Rules",
      "value": "**Moderation** \n\nThe Moderation Staff are volunteers recruited by Management. They come in several forms, and you can tell which is which by their title: \n\n <@&569317762480996378>: They only have abilities to delete messages. They will moderate fairly and will answer any questions you have that they are able to. \n\n<@&569313288232501258> - They have the ability to delete messages and warn/kick/ban. They will moderate fairly and will answer any questions you have that they are able to. \n\n<@&569313321296330767>: Overseers of the Helpers and Moderators, these people are the ones to go to if you have a problem with any of the server moderation or if you have any questions on moderation in general. \n\nWe allow no discussion of Moderation (or bans or warnings) in the server. \n\nThe mods have a very tough job: it can be hard to keep the balance between a clean server and a fun server on a daily basis, and they also receive a lot of negative comments and abuse regularly. We would ask that you remain patient with all moderators and that you would be helpful and polite when talking to them; this will make their job that much easier, and in turn make the server a more pleasant place. \n\nPlease note that most moderators still advertise! They have as much a right to post in the capacity of a member as any other user on the server. Remember that they are volunteers, and are members just like you. This means that outside their realm as a moderator, they are to be treated as you would treat any other member. \n\nIndividually judging each possible infraction and acting accordingly is at the sole discretion of the DAC Team. \n\n**Guidelines for the server** \n\n- Do not insult or degrade any of the moderators in any way. \n- The moderators have the right to delete posts. Please follow their instructions. \n- If you notice that your post was deleted, it has been removed for a good reason. Do not complain or argue with the reason, this will result in further punishment. \n- DAC Staff reserve the right to delete, edit or otherwise modify any content posted in this server. "
    }
  ]
};
message.delete(1)
    message.channel.send({embed});
}
if  (message.content === prefix + 'rules 3') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Server Rules",
      "value": "**Images** \n\n- Images can not violate these rules or they will be removed \n\n**Advertising** \n\n- No malicious links in advertisements \n\n- See <#627937642247356416> for more advertising rules"
    }
    
  ]
};
    message.delete(1)
    message.channel.send({embed});
}
if  (message.content === prefix + 'rules 4') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Server Rules",
      "value": "**Punishments**  \n\nIn some extreme circumstances, no warning will not be given. \n- If you are banned from the forum, you are not allowed to create an account to evade this ban. Doing so will result in the ban being non-appealable \n- Arguing against the DAC team who uphold these rules will be punished and content that seek to create or worsen existing problems will be deleted. \nRepeated violations may result in probation or permanent removal from the server. \nPlease note that we reserve the right to ban, warn, kick, or mute members even if they haven't violated the stated rules. \n\n**OTHER** \n\n**Private messages** \n\- Conversations, discussions and arguments between two people should be done in private. \n Please use the private message system in Discord or other applications (e.g. IRC, skype, ...) \n- Do not harass other people through use of private messages. Repeatedly spamming private messages for personal gain or to irritate other users will result in warnings or bans. All rules also apply to private messages unless stated otherwise. \n- It is not allowed to impose derogations upon the company of Delta Advertising Solutions, nor any of its products or personnel. This server is the property of Delta Advertising Solutions., all rights reserved. \n\n\n*Please be aware that the rules are subject to change* \n\n\n*Last Updated: 09/29/2019*"
    }
  ]
};
   message.delete(1)
    message.channel.send({embed});
}
if  (message.content === prefix + 'rules 5') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "DAC Server Rules",
      "value": "**OTHER** \n\n**Private messages** \n\- Conversations, discussions and arguments between two people should be done in private. \n Please use the private message system in Discord or other applications (e.g. IRC, skype, ...) \n- Do not harass other people through use of private messages. Repeatedly spamming private messages for personal gain or to irritate other users will result in warnings or bans. All rules also apply to private messages unless stated otherwise. \n- It is not allowed to impose derogations upon the company of Delta Advertising Solutions, nor any of its products or personnel. This server is the property of Delta Advertising Solutions., all rights reserved. \n\n\n*Please be aware that the rules are subject to change* \n\n\n*Last Updated: 09/29/2019*"
    }
  ]
};
    message.delete(1)
    message.channel.send({embed});
}
if  (message.content === prefix + 'ad rules 1') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Advertising Rules",
      "value": "Please read all the following before posting any ads! \n\n- Only post (Server) advertisements under the ADVERTISING category. \n\n- You may post 4 ads every 24 hours for one server. If 2 people are posting for one server, it must not exceed 4 posts for that one server. \n\n- Only post again if someone has posted before your previous post, meaning no double posting. \n\n- Post your server in the correct channel for it, so heavy NSFW servers only in <#627937749160296448>. only advertising servers in <#627937743707832320>. etc. Ads not mainly based on a topic will be removed. \n\n- Do not spam post. (You have to wait 1 minute in between each post for the link cool-down) \n\n- Your advertisement must include a permanent link. (Expired invites will get deleted) \n\n- Your advertisement must include a good description for your server. (No descriptions will de deleted) \n\n- Your server must follow Discord TOS. "}
  ]
};
    message.delete(1)
    message.channel.send({embed});
}
if  (message.content === prefix + 'ad rules 2') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Advertising Rules",
      "value": "- If you have any malicious links in your description it will be deleted and you will be punished. \n\n- **If your description includes anything to do with real money, it is staff discretion to delete it. (This includes selling accounts)** \n\n- If your server contains anything to do with any sort of raiding / hacking / modding, it will be deleted and you will be reported to Discord. \n\n- If you leave the server, all your advertisements will be auto deleted.\n\n- Invites Rewards are not allowed, posting such will result in punishment\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\nIf your server breaks any of the above, a staff member will delete your advertisement and ping you why it was deleted. If you argue or ignore the staff member, you will be punished. \n\n*DAC Staff reserve the right to delete, edit or otherwise modify any content posted in this server, DAC Staff Also reserve the right to issue warnings and other punishments at their discretion with or without reason*"
    }
  ]
};
    message.delete(1)
    message.channel.send({embed});
}
/*
EMBED TEMPLATE

  }
if  (message.content === prefix + 'template') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Template",
      "value": "null"
    }
  ]
};
    message.delete(1)
    message.channel.send({embed});
}
*/
if (message.content === prefix + 'whois premium') {
if(message.channel.type =='dm') return;
const management = message.guild.roles.get("584069788364439553")
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
        const staff = message.guild.roles.get("569313393975099392")
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
if  (message.content === prefix + 'help') {
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
    message.delete(1)
    message.channel.send({embed});
  }
 if (message.content === prefix + 'ban reasons') {
 message.delete(1)
     message.channel.send('**Bannable Offenses:** \n `Raiding (With proof)` \n `Hacking (With proof)` \n `Spamming DMs (With proof)` \n `DM Advertising (With proof)` \n `Violating Discord ToS (With proof)` \n `Making Threats (With proof)` \n `Sending Malicious Links (With proof)` \n `Nuking (With proof)` \n `Stealing our bots code (With proof)` \n `Violating Copyright (With proof)` \n `False Reporting` \n `DDoS Attacks (With proof)`');
}

    //Lifetime Premium Key
if (message.content === prefix + 'DAC-Premium-461234') {
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
  message.delete(1)
  message.member.addRole("625700940770574337"),
  message.channel.send({embed});
}
if (message.content === prefix + 'developer') {
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Bot Developer",
      "value": "The Bot Owner Is: <@548009285892833280>"
    }
  ]
};
  message.delete(1)
  message.channel.send({embed});
}
if (message.content === prefix + 'DAC-158763') {
  message.delete(1)
  message.member.addRole("569313830845415424");
}
if (message.content === prefix + 'keygen') {
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
  message.delete(1)
  message.author.send({embed});
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
const embed = {
  "color": 16449536,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/615548285456744504/615553739784454167/DAC_logo_square.jpg",
    "text": "DAC © 2019; All Rights Reserved"
  },
  "fields": [
    {
      "name": "Welcome To DAC",
      "value": "`Welcome ${member} to **Discord Advertising Central**! Please read <#627937640481685530> and <#627937642247356416> for the server rules and advertising guidelines. If you at any time need some help, you can send a message in <#627937660677390336> and a staff member will be glad to assist you! \n\nIf you want to partner, head on over to <#627937672907849735> and read that then ping or DM a Partner Manager and they will guide you from there.\n\nYou can get some roles in <#627937643895848970>.\n\nIf you wish to try out our custom services then head over to <#569539946180771856> \n\n__If you leave the server, all your advertisements will be deleted!__\nThanks for joining!`  +  '\n\n To be verified type  `>DAC-429214`' + ` in <#627937632638468116>`"
    }
  ]
};
client.on('guildMemberAdd', member => {
member.send({embed})
}



  
    });
client.login(auth.token);
