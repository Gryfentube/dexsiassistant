const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("_");
var activ = ("Moderer");
var values = ("empty");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    console.log("Le bot est prêt");
    
});

bot.login('NDUzMzI0Nzg4NDc2MTQ5NzYy.Df0-Dw.Pp3TafcyL6tkho12Sv_X-B9QnnI');

bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "playlist":
       
        message.channel.sendMessage("!p https://www.youtube.com/watch?v=kUEfQw5fuAI&list=PLe8jmEHFkvsYv5CV7wSLZk7UG41KY8q_Q")
        break;
        case "supprimerlesalonuesh":    
        message.channel.delete()
        //message.reply("```Bonjour je me présente je suis un bot```");
        console.log('salope');
        break;
        case "id":
        var variable = message.id
        message.channel.sendMessage(variable)
        break;
        case "idchannel":
        var variable = message.channel.id
        message.channel.sendMessage(variable)
        break;
        case "reactplease":
        message.react('🇳');
        message.react('🇴');        
    }

});
