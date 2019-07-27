var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // \ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
			// \hello
            case 'hello':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello World!'
                });
            break;
			// \help
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '**Commands List:** \n `help` - This \n `prefix` - Displays the bot prefix \n `hello` - Responds "Hello World!" \n `ping` - Checks the bots ping \n `version` - Provides the bot version \n `server-invite` - Provides an invite to the DAC Server'
                });
            break;
			// \version
            case 'version':
                bot.sendMessage({
                    to: channelID,
                    message: '**Bot Current Version:** 1.0.1'
                });
            break;
			// \server-invite
            case 'server-invite':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://discord.gg/ngHhXAa'
                });
            break;
      		      // \prefix
            case 'prefix':
let staff = guild.roles.get("569313224869281816")
if(message.member.roles.has(staff.id)) {
                bot.sendMessage({
                    to: channelID,
                    message: 'https://discord.gg/ngHhXAa'
                });
            break;
} else {
message.channel.send("denied");
}
            // Just add any case commands if you want to..
         }
     }
});
