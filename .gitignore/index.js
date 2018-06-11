const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);


//salons admin
const consaule = "455740278272425995";
const annonce = "452800422655033365";
const jack = "239310906981482496";
const gryf = "187554016853622784";
const gorj = "(message.member.id === jack) || (message.member.id === gryf)";
//end


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
    bot.channels.get(consaule).send({embed: {
    color: 3447003,
    author: {
      name: "Je suis en ligne :D",
      icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"
    }}})
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
            if (gorj){
                message.reply("Le message a été envoyé :D"); //respond
                bot.channels.get(annonce).sendMessage(value); //annonce
                bot.channels.get(consaule).send({embed: {color: 3447003, author: {name: "Annonce effectué",
                                                icon_url: message.member.avatarURL},
                                                title: "L'annonce :", description: value, footer: {
                                                icon_url: message.member.avatarURL, text: "Auteur : " + author}}});; //console
            }
            else {
                message.reply("tu ne peux pas faire ça"); //respond
                bot.channels.get(consaule).sendMessage(author + " a essayé d'annoncé " + value); //console
            }
break;
        case "activ":
            var value = message.content.substr(7);
            if (amdin){
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
       /* case "sendrules":
                
    const emo1 = message.guild.emojis.find("name", "1_");
    const emo2 = message.guild.emojis.find("name", "2_");
    const emo3 = message.guild.emojis.find("name", "3_");
    const emo4 = message.guild.emojis.find("name", "4_");
    const emo5 = message.guild.emojis.find("name", "5_");
    const emo6 = message.guild.emojis.find("name", "6_");
    const emo7 = message.guild.emojis.find("name", "7_");
    const emo8 = message.guild.emojis.find("name", "8_");
    const emo9 = message.guild.emojis.find("name", "9_");
    const emo10 = message.guild.emojis.find("name", "10");
    const emo11 = message.guild.emojis.find("name", "11");
    const rules1 = " __**Pas de spam.**__ Il est bon de poster quelques emoji de temps en temps, mais évitez d'en envoyer trop à la suite, ou le même emoji plusieurs fois. \n**Enfreindre cette règle sera passible d'un mute/kick.**";
    const rules2 = " __**Pas d'NSFW.**__ Merci de ne pas poster d'images, de liens ou faire allusion à quoi que ce soit d'NSFW. Cette règle s'applique à tout les channels du Discord. \n**Enfreindre cette règle sera passible d'un ban.**";
    const rules3 = " __**Pas de Pub de server.**__ Ici les liens pour rejoindre les autres servers sont interdits. Cette règle s'applique aussi aux  DM. \n**Enfreindre cette règle sera passible d'un mute/kick/ban.**";
    const rules4 = " __**Pas de profils inappropriés**__ (pseudos,avatars,statuts Discord). Cela inclue aussi les pseudos invisibles,les unicodes etc. \n**Enfreindre cette règle sera passible d'un kick/ban.**";
    const rules5 = " __**N'abusez pas des mentions.**__ Si vous avez un problème parlez en dans #😓problèmes et un @Staff  vous aidera donc ne le mentionnez pas et n'envoyez pas de messages en DM. \n**Enfreindre cette règle sera passible d'un mute/kick.**";
    const rules6 = " __**Pas de complaintes par mentions.**__ Vous plaindre en mentionnant @.everyone n'enchante personne, ni le Staff ni les autres. Juste ne faites pas ça :pray:. \n**Enfreindre cette règle sera passible d'un mute/kick.**";
    const rules7 = " __**Ne mutez pas les channels importants & ne bloquez pas les @Staff.**__ C'est irrespectueux d'ignorer ce qu'ils disent. \n**Enfreindre cette regle sera passible d'un kick.**";
    const rules8 = " __**Pas d'homophobie, racisme, etc.**__ Pas de caractère antisémite, raciste, homophobe, même pour rire.Essayer de bypass les mots interdits en changer les caractères ou les lettres est aussi interdit. \n**Enfreindre cette règle sera passible d'un mute/kick/ban.** :gay_pride_flag:";
    const rules9 = " __**N'abusez pas du channel #😓problèmes.**__ Utilisez ce channel seulement si vous avez un problème lié au server.\n**Enfreindre cette règle sera passible d'un mute.**";
    const rules10 = " __**Respectez les membres.**__  Donc pas d'insultes,comportement agressif,et les dramas en DM. \n**Enfreindre cette règle sera passible d'un mute/kick**";
    const rules11 = " __**Ne volez pas le travail et les créations des autres.**__ Seuls vos contenus sont autorisés. \n**Enfreindre cette règle sera passible d'un kick.**";
            var rules = bot.channels.get('452800240332963843');
            rules.sendMessage("```diff\n- Ces règles s'appliquent à tout le monde. Si tu ne les respecte pas c'est votre problème, vous êtes responsable de vos actes.\n```")
            .then(rules.sendMessage(emo1 + rules1)
            .then(rules.sendMessage(emo2 + rules2)
            .then(rules.sendMessage(emo3+ rules3)
            .then(rules.sendMessage(emo4+ rules4)
            .then(rules.sendMessage(emo5+ rules5)
            .then(rules.sendMessage(emo6+ rules6)
            .then(rules.sendMessage(emo7+ rules7)
            .then(rules.sendMessage(emo8+ rules8)
            .then(rules.sendMessage(emo9+ rules9)
            .then(rules.sendMessage(emo10+ rules10)
            .then(rules.sendMessage(emo11+ rules11))))))))))));
        break; */
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
