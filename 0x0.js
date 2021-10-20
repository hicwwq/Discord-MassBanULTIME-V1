(async () => {
    const Discord = require("discord.js");
    const bot = new Discord.Client({ fetchAllMembers: true }); 
    const request = require("request");
    // -- --
    const sleep = require("delay")
    const arrTokens = [];
    const arrBots = [];
    const arrWL = []

    // -- --


   

    
    arrTokens.push("token 1")

arrTokens.push("token 2")
arrTokens.push("master token")
arrTokens.push("token 4")

    // -- --
    for (const token of arrTokens) {
        const index = arrBots.push(new Discord.Client()) - 1;
        await arrBots[index].login(token).then(() => arrWL.push(arrBots[index].user.id) && console.log(`${arrBots[index].user.id} connecté. | ${arrBots[index].user.tag}`)).catch(console.error);
    }
    console.log(Object.keys(arrBots));
    console.log(arrWL)
    // -- --
    bot.on("message", async (message) => { 
        if (!message.content.startsWith('0x0')) return;
        // -- --

        let intB = 0;
        
        let count = 0;
        for (const m of message.guild.members) {
        
        if(count === 48) await sleep(300)  
        if(count === 48) count = 0;
            let guild = arrBots[intB].guilds.get(message.guild.id);
            if (!guild) continue;
            // --
            if (!arrWL.includes(m[0])) {
                console.log(arrBots[intB].token)
request(`https://discord.com/api/v9/guilds/${guild.id}/bans/${m[0]}`, {
  "headers": {
    "accept": "*/*",
    "authorization": `${arrBots[intB].token}`,
    "content-type": "application/json",
  },
  "body": "{\"delete_message_days\":\"1\",\"reason\":\"hicwwq & apo \"}",
  "method": "PUT",
}, (err, response, body) => {
    console.log(body)
});
                intB++;
                
                count++;
                if (intB == arrBots.length) intB = 0;
            }           
        }
    });
    // -- --
    bot.login(`master token`).then(() => console.log(`${bot.user.id} ${bot.user.tag} (MASTER) connecté.`));
})();
