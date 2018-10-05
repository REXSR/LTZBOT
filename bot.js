const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("online")   

});

@everyone | @here

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Code Alphacopyright arrow_down            

client.on("message", (message) => {

if (message.content.startsWith("-ct")) {

            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(" ").slice(1);

    message.guild.createChannel(args.join(' '), 'text');

message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}

});

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

وصف الكود: كود انشاء روم كتابي

تم النشر بواسطة: @- SB |LEGEND_YT








    

        








       

        
        
        
        
        




client.login(process.env.BOT_TOKEN);
