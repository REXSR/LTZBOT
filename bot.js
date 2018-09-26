const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("online")

});







    const fs = require('fs')

let points = JSON.parse(fs.readFileSync('./Points.json', 'utf8'));

client.on('message', message => {

if (!points[message.author.id]) points[message.author.id] = {

    points: 50,

  };

if (message.content.startsWith(prefix + 'فكك')) { 

    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fakk/fakk.json'); 

const item = type[Math.floor(Math.random() * type.length)]; 

const filter = response => { 

    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());

};

message.channel.send('**لديك 15 ثانيه لتفكك الكلمه **').then(msg => {

    let embed = new Discord.RichEmbed()

    .setColor('#000000')

    .setFooter("فكك  | NoobBot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')

    .setDescription(`**قم بكتابه الكلمه مفككه : ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {

        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })

        .then((collected) => {

        message.channel.send(`${collected.first().author} ✅ **مبروك  50 كريدت  **`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);

            let won = collected.first().author; 

            points[won.id].points++;

          })

          .catch(collected => { 

            message.channel.send(`:x: **لا يوجد احد فكك الكلمه بلوقت المناسب**`);

            console.log(`[Typing] Error: No one type the word.`);

          })

        })

    })

}

});













client.login(process.env.BOT_TOKEN);
