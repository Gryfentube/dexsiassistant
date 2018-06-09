const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ ann:[]})
    .write()
var bot = new Discord.Client();
var prefix = ("_");
var activ = ("créer un monde sans limite"); //modifier la valeur entre guillemets pour changer son état au démarage
var values = ("empty");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    var annonce = db.get(`ann`).map('annonce').value();
    console.log("Le bot est prêt");
    bot.channels.get('455070342612910081').send("Je suis en ligne ! :D");
    
    
    
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    var channelide = message.channel.id;
    var author = message.member.displayName;
    switch (args[0].toLowerCase()){

        case "say":
            var value = message.content.substr(5);
            if ((message.member.id === "239310906981482496") || (message.member.id === "187554016853622784")){
                message.reply("Le message a été envoyé :D"); //respond
                bot.channels.get('452800422655033365').sendMessage(value); //annonce
                bot.channels.get('455070342612910081').sendMessage("L'annonce " + value + " a été envoyé par " + author); //console
            }
            else {
                message.reply("tu ne peux pas faire ça"); //respond
                bot.channels.get('455070342612910081').sendMessage(author + " a essayé de faire l'annonce " + value); //console
            }
break;
        case "activ":
            var value = message.content.substr(7);
            if ((message.member.id === "239310906981482496") || (message.member.id === "187554016853622784")){
                bot.user.setPresence({ game: { name: value}});
            }
break;
        //message.reply("```Bonjour je me présente je suis un bot```");
        case "parler":
        var value = message.content.substr(7);
            if (channelide === "441678329255428096") {
                bot.channels.get('4533143598887075946').sendMessage(author + " vous dit depuis l'autre serveur : " + value);
            }
            else if (channelide === "4533143598887075946") {
                bot.channels.get('441678329255428096').sendMessage(author + " vous dit depuis l'autre serveur : " + value);
            }
            
break;
        case "author":
        var author = "oui";
        var author = message.member.displayName;
        console.log(author);
        break;
    }

    if (message.content === "truc"){
        
    }
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Ceci est une commandes :\n -/help pour les commandes");
        console.log("Comme help prises");
    }
    if (message.content === prefix + "frite"){
        var activ = ("Je mange une frite");
        bot.user.setPresence({ game: { name: activ}});
        console.log("tu fais quoi là");
        console.log(activ);
    }
        if (message.content === prefix + "truc"){
            message.reply(message.channel.id)
    }

});
