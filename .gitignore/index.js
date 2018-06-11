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
    
    //EMOJI
    const emo1 = client.emojis.find("name", "1_");
    const emo2 = client.emojis.find("name", "2_");
    const emo3 = client.emojis.find("name", "3_");
    const emo4 = client.emojis.find("name", "4_");
    const emo5 = client.emojis.find("name", "5_");
    const emo6 = client.emojis.find("name", "6_");
    const emo7 = client.emojis.find("name", "7_");
    const emo8 = client.emojis.find("name", "8_");
    const emo9 = client.emojis.find("name", "9_");
    const emo10 = client.emojis.find("name", "10");
    const emo11 = client.emojis.find("name", "11");
    //EMOJI end
    
    
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
                bot.channels.get('455070342612910081').sendMessage(author + " a essayé d'annoncé " + value); //console
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
        var channelide = message.channel.id;
        var value = message.content.substr(7);
            if (channelide === "441678329255428096") {
                bot.channels.get('4533143598887075946').sendMessage(author + " vous dit depuis l'autre serveur : " + value);
            }
            else if (channelide === "4533143598887075946") {
                bot.channels.get('441678329255428096').sendMessage(author + " vous dit depuis l'autre serveur : " + value);
            }
            else {
                bot.channels.get('455070342612910081').sendMessage(author); //console
            }
            
break;
        case "sendrules":
            var rules = bot.channels.get('452800240332963843');
            rules.sendMessage("```diff\n- Ces règles s'applique à tout le monde. Si tu ne les respecte pas c'est ton problème\n```")
            .then(rules.sendMessage("❖\n${emo1} __**Pas de spam.**__ Il est bon de poster quelques emoji de temps en temps, mais évitez d'en envoyer trop à la suite, ou le même emoji plusieurs fois. **Enfreindre cette règle sera passible d'un mute/kick.**"))
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
