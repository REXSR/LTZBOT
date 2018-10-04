const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("online")   

});


const errmsg = "حدث خطا في البوت , سوف يتم اصلاحه في اقرب وقت "

function errormsg(message, err, cmd) {

    message.channel.send(errmsg) 

    client.channels.get("ايدي الروم").send(`**:warning: Error**`, {embed: {

    description: `\`\`\`${err}\`\`\` `,

    fields: [

        {

        name: "**server**",

        value: message.guild.name,

        inline: true

        }, 

        {

        name: "**user**",

        value: message.author.username,

        inline: true

        }, 

        {
        
        
        
        
client.login(process.env.BOT_TOKEN);

        name: "**command**",

        value: cmd,

        inline: true

        }

    ]}})

    return; 

}

function helpcmd(commands, cmd, role, group, desc, usage) {

commands[cmd] = {

name: cmd,

role: role,

group: group,

desc: desc,

usage: usage

}

}
