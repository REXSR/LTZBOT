const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("online")

});

client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})



client.on('message', message =>{
    if(message.content === 'ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});



const perfix = '#'
const fs = require('fs');
 let logs = JSON.parse(fs.readFileSync(`./logs.json`, `utf8`)); // BY ! - NourEldien.#8007
client.on('message', message => {
    var perfix = "#"
  if(!logs[message.guild.id]) logs[message.guild.id] = {
  onoff: 'Off',
  channel: 'logs' // BY ! - NourEldien.#8007
  };
  if(logs[message.guild.id].onoff === 'Off') return;
  let logchannel = message.guild.channels.find("name", logs[message.guild.id].channel)
 
});
client.on('message', message => {
  client.on("roleCreate", rc => {
    const channel = rc.guild.channels.find("name", logs[message.guild.id].channel)
    if(channel) {
    var embed = new Discord.RichEmbed()
    .setTitle(rc.guild.name) // BY ! - NourEldien.#8007
    .setDescription(`***Created Role Name : *** **${rc.name}** `)
    .setColor(`RANDOM`)
    .setTimestamp(); // BY ! - NourEldien.#8007
    channel.sendEmbed(embed)
    }
    });
    //By S Codes
    client.on("roleDelete",  rd => {
    const channel = rd.guild.channels.find("name", logs[message.guild.id].channel)
    if(channel) {
    var embed = new Discord.RichEmbed()
    .setTitle(rd.guild.name)
    .setDescription(`***Deleted Role Name : *** **${rd.name}** `)
    .setColor(`RANDOM`)
    .setTimestamp(); // BY ! - NourEldien.#8007
    channel.sendEmbed(embed)
    }
    });
    // BY ! - NourEldien.#8007
  client.on("channelCreate",  cc => {
    const channel = cc.guild.channels.find("name", logs[message.guild.id].channel)
    if(channel) {
    var embed = new Discord.RichEmbed()
    .setTitle(cc.guild.name)
    .setDescription(`***Channel Created Name : *** **${cc.name}** ⬅️`)
    .setColor(`RANDOM`)
    .setTimestamp();
    channel.sendEmbed(embed)
    } // BY ! - NourEldien.#8007
    });
   
     client.on("deleteChannel",  dc => {
    const channel = dc.guild.channels.find("name", logs[message.guild.id].channel)
    if(channel) {
    var embed = new Discord.RichEmbed()
    .setTitle(dc.guild.name)
    .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
    .setColor(`RANDOM`)
    .setTimestamp();
    channel.sendEmbed(embed)
    } // BY ! - NourEldien.#8007
    });
   
   
   
    client.on('messageUpdate', (message, newMessage) => {
      if (message.content === newMessage.content) return;
      if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
      const channel = message.guild.channels.find('name', logs[message.guild.id].channel);
      if (!channel) return;
   
      let embed = new Discord.RichEmbed()
         .setAuthor(`${message.author.tag}`, message.author.avatarURL)
         .setColor('SILVER')
         .setDescription(`✏ **تعديل رساله
  ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
         .setTimestamp();
       channel.send({embed:embed});
   
    // BY ! - NourEldien.#8007 // BY ! - NourEldien.#8007
  });
   
  client.on('guildMemberAdd', member => {
      if (!member || !member.id || !member.guild) return;
      const guild = member.guild;
     
      const channel = member.guild.channels.find('name', logs[message.guild.id].channel);
      if (!channel) return;
      let memberavatar = member.user.avatarURL
      const fromNow = moment(member.user.createdTimestamp).fromNow();
      const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
     
      let embed = new Discord.RichEmbed()
         .setAuthor(`${member.user.tag}`, member.user.avatarURL)
         .setThumbnail(memberavatar)
         .setColor('GREEN')
         .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
         .setTimestamp();
       channel.send({embed:embed});
  });
   
  client.on('guildMemberRemove', member => {
      if (!member || !member.id || !member.guild) return;
      const guild = member.guild;
     
      const channel = member.guild.channels.find('name', logs[message.guild.id].channel);
      if (!channel) return;
      let memberavatar = member.user.avatarURL
      const fromNow = moment(member.joinedTimestamp).fromNow();
     
      let embed = new Discord.RichEmbed()
         .setAuthor(`${member.user.tag}`, member.user.avatarURL)
         .setThumbnail(memberavatar)
         .setColor('RED')
         .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
         .setTimestamp();
       channel.send({embed:embed});
  });
   
  client.on('messageDelete', message => {
      if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
      const channel = message.guild.channels.find('name', logs[message.guild.id].channel);
      if (!channel) return;
     
      let embed = new Discord.RichEmbed()
         .setAuthor(`${message.author.tag}`, message.author.avatarURL)
         .setColor('BLACK')
         .setDescription(`🗑️ **حذف رساله**
  **ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
         .setTimestamp();
       channel.send({embed:embed});
   
  });
})
client.on('message', message => {
 
 
if(!message.guild) return; // BY ! - NourEldien.#8007 // BY ! - NourEldien.#8007
  if(!logs[message.guild.id]) logs[message.guild.id] = {
  onoff: 'Off',
  channel: 'logs'
  };
 
if(message.content.startsWith(prefix + 'setlogs')) {
         
  let perm = message.member.hasPermission(`ADMINISTRATOR`) || message.member.hasPermission(`MANAGE_SERVER`)
 
  if(!perm) return message.reply(`You don't have \`Manage_roles / Administrator\` Permission`);
  let args = message.content.split(" ").slice(1);
  if(!args.join(" ")) return message.reply(`:gear: **| Correct usage**:
\`=setlogs toggle / set <channel name>\``);
  let state = args[0];
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
 // BY ! - NourEldien.#8007 // BY ! - NourEldien.#8007 // BY ! - NourEldien.#8007
  if(!state.trim().toLowerCase() == 'toggle') return message.reply(`Please type a right state ON / OFF`) ;
    if(state.trim().toLowerCase() == 'toggle') {
     if(logs[message.guild.id].onoff === 'Off') return [message.channel.send(`:white_check_mark: **| Logs for this server has been turned on.**`), logs[message.guild.id].onoff = 'On'];
     if(logs[message.guild.id].onoff === 'On') return [message.channel.send(`:white_check_mark: **| Logs for this server has been turned off.**`), logs[message.guild.id].onoff = 'Off'];
    }
 
   if(state.trim().toLowerCase() == 'set') {
   let newChannel = message.content.split(" ").slice(2).join(" ");
   if(!newChannel) return message.reply(`:gear: **| To set the logging channel use**:
\`=setlogs set <channel name>\``);
     if(!message.guild.channels.find(`name`,newChannel)) return message.reply(`:mag_right: **| I can't find this channel.**`);
    logs[message.guild.id].role = newChannel;
     message.channel.send(`:shield: **| Logging channel has been changed to**:
\`${newChannel}\``);
   }
         }
    fs.writeFile("./logs.json", JSON.stringify(logs), (err) => {
    if (err) console.error(err);
  });
});





var user = {};
var warn = {};

var user = {};
var warn = {};

client.on('message', function(message) {

    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;

  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 4) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 4) {		   
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
    
     var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`المرسل ${message.author.username}#${message.author.discriminator} `)
      .setDescription(":white_check_mark:  | `محاولة السبام`\n\nالاسم:\n"+`${message.author.username}#${message.author.discriminator}`+"\nالعقوبة:\nميوت شات\n")
          .setFooter("NAWAF")
      .setColor("c91616")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | تمت معاقبتك")
      .setDescription(`**لقد قمت بمخالفة قوانين السيرفر**\n\nتمت معاقبتك من قبل :\nL-RO3B BOT\nنوع العقوبة:\nميوت شات\nتاريخ العقوبة:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`في حال كانت العقوبة بالغلط, تواصل مع الادارة`")
          .setFooter("NAWAF")
      .setColor("c91616")
    
     message.author.send(embed20)
  
  }
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/*جميع الحقوق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });
















        

    
client.login(process.env.BOT_TOKEN);






