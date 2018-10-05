const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("online")   

});
   




client.on("message", (message) => {

if (message.content.startsWith("cc")) {

            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(" ").slice(1);

    message.guild.createChannel(args.join(' '), 'Category');

message.channel.sendMessage('Category تـم إنـشاء روم')

}

});












    

        








       

        
        
        
        
        




client.login(process.env.BOT_TOKEN);
