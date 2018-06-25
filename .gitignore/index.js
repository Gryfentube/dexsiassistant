const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const bot = new Discord.Client();
const adapter = new FileSync('database.json');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const fs = require('fs');
const db = low(adapter);
    db.defaults({ ann:[]})
        .write()
bot.login(process.env.TOKEN);

//salons DexSia Introduce YourSelf
    const annDXSIY = "452800422655033365"; //salon annonce DexSia Introduce Yourself
    const musicbot = "452833658659930117"; //salon music bot
//Portal DexSia Introduce Yourself
    const annPoDXSIYemb = "455740492999688192"; //salon annonce de Portal Dxs IY
    const annPoDXSIY = "456188249669632000";
    const activitDXSIY = "455798472076034051"; //salon activité du bot DexSia Assistant
    const consauleDXSIY = "455740278272425995"; //salon console de Portal Dxs IY
//salons DexSia
    const annDXS = "454994767877636098"; //salon annonce DexSia
//Portal DexSia
    const annPoDXS = "455740525807665172"; //salon annonce de Portal DexSia
    const activitDXS = "455836828214231082"; //salon activité du bot DexSia
    const consauleDXS = "455740246110240778"; //salon console de Portal DexSia
//Admin
    const jack = "239310906981482496"; //Définir Jack avec son id
    const gryf = "187554016853622784"; //Définir Gryf avec son id
    const alladmin = "(message.member.id === jack) || (message.member.id === gryf)"; //Jack ou Gryf (dans un if généralement)
//end
var ladateplease = "Eh sale pute, il est quelle heure ?";
//loG

var prefix = ("_"); //définir le prefix du bot
var activ = ("créer un monde sans limite"); //modifier la valeur entre guillemets pour changer son état au démarage
var values = ("empty"); //empecher les soucis de values

//event on démarrage
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    var annonce = db.get(`ann`).map('annonce').value();
    console.log("Le bot est prêt");
    bot.channels.get(consauleDXSIY).send({"embed": {"description": "Je viens de me réveiller <:051sleeping:458741159062405141>",
    "url": "https://discordapp.com","color": 0xff00ff,
    "footer": {"icon_url": "https://c.slashgear.com/wp-content/uploads/2017/08/discord_main.jpg",
      "text": "Je joue à " + activ},
    "thumbnail": {"url": "https://cdn.discordapp.com/icons/452444449608302602/13a579dd19b7b36b39bd1aa6f0b2751a.png"},
    "image": {"url": "https://fsmedia.imgix.net/05/a9/aa/5c/261b/4afa/a99c/ac32c5c1b81e/vault-boy.png?rect=0%2C120%2C1116%2C558&auto=format%2Ccompress&w=650"},
    "author": {"name": "Je suis en ligne :D",
      "url": "",
      "icon_url": ""}}})
});

bot.on("guildMemberAdd", member => { //Quand un membre entre dans le serveur
    bot.channels.get('452796717738491904').sendMessage('Hey' + member.user + ', Bienvenue sur le serveur **Dexsia | Introduce Yourself** <:051happy1:458741130708779028><:051happy2:458741131627331605> !\nPour rejoindre le groupe fais !member dans <#452973331042402304> et envoie nous ta candidature.\nBienvenue et passe un bon moment dans la DexSia <:051angel:458741109925871676>')//envoie le message de bienvenue
        .then(bot.channels.get(consauleDXSIY).sendMessage(member.user + " est arrivé dans la DexSia, le message s'est bien affiché"));  //console

});

bot.on("guildMemberRemove", member => { //Quand un membre quitte dans le serveur
    var aurevoirDXSIY = member.guild.channels.find("name", "left"); //variable pour le salon aurevoir
    bot.channels.get('452815373700694017').sendMessage('**' + member.displayName + '** nous a quitté, paix à son âme... <:051cry:458741122169044994>')//envoie le message de aurevoir
        .then(bot.channels.get(consauleDXSIY).sendMessage(member.user + " a quitté la DexSia | Introduce Yourself, le message s'est bien affiché"));  //console
});

 //event on message
bot.on('message', message => {
    var authorDN = message.member.displayName; //nom de l'auteur du message
    var author = message.member.displayName; //username de l'auteur
    var TAGauthor = message.member.user.tag; //tag de l'auteur
    var DMauthor = message.member.user.dmChannel; //Message privé avec l'auteur
    var IDauthor = message.member.user.id; //id de l'auteur
    var IDauthor = message.member.user.id; //id de l'auteur
    var AVauthor = message.member.user.avatarURL; //avatar de l'auteur
    var channelide = message.channel.id; //channel id
    var channame = message.channel.name; //channel name
    var serveurname = message.guild.name;  //seveur name
    var value = message.content;
    
    if (message.content === "Eh sale pute, il est quelle heure ?"){
        var ladate = message.createdAt;
        var minute = ladate.getMinutes();
        var heure = ladate.getHours() + 2;
        if (heure === 24) {var heure = 0}
        if (heure === 25) {var heure = 1}
        if (heure < 10) {heure = "0" + heure}
        if (minute < 10) {minute = "0" + minute}
        var date = heure + ":" + minute;
        message.reply('il est ' + date + ' mais je te pris de ne pas me traiter de pute');
    }
    if (message.channel.id === activitDXSIY) {
        bot.user.setPresence({ game: { name: value}})
            .then(bot.channels.get(consauleDXSIY).sendMessage({embed: {color: 0x202020, author: {name: "Je joue maintenant à " + value + " grâce à " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}}))};

    if (message.channel.id === annPoDXSIY){
        bot.channels.get(annDXSIY).sendMessage(value) //annonce
            .then(bot.channels.get(consauleDXSIY).sendMessage({embed: {color: 0xe43281, author: {name: "Nouvelle annonce envoyé par " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"},
                                                               fields: [{name: "L'annonce est :", value: value}]}}))}; //console
    
    if (message.channel.id === annPoDXSIYemb){
        bot.channels.get(annDXSIY).sendMessage({embed: {color: 0xe43281, fields: [{name: "ANNONCE", value: value}]}}) //annonce
            .then(bot.channels.get(consauleDXSIY).sendMessage({embed: {color: 0xe43281, author: {name: "Nouvelle annonce envoyé par " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"},
                                                               fields: [{name: "L'annonce est :", value: value}]}}))}; //console
    
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()){
        case "activ":
            var value = message.content.substr(7);
            if (alladmin){
                bot.user.setPresence({ game: { name: value}});
            }
break;
            case "play":
            if (message.channel.id === musicbot) {
               var value = message.content.substr(5);
               if (message.member.voiceChannel) {
                   if (value === ""){
                       message.reply('il faut que tu entres un lien <:051smiling1:458741159666384906>');
                       }
                   else {
                        message.member.voiceChannel.join()
                            .then(connection => { // quand il se connecte
                        message.reply('Je suis là <:051smile:458741156017078273>');
                        const stream = ytdl(value, { filter : 'audioonly' });
                        const dispatcher = connection.playStream(stream, streamOptions)
                            .then(message.channel.sendMessage("Ça va swinguer <:051vomiting1:458741160257781790>"));})
                   

                }}
                else {
                    message.reply('il faut être dans un salon vocal pour faire ça <:051smiling1:458741159666384906>');
                }
            }
            else {
                message.channel.sendMessage("Il faut être dans <#452833658659930117> pour faire cette commande <:051tongue:458741159326515201>")
            };
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
        case "frog":           
            message.channel.sendMessage("🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n🐸 🐸 ⚪ ⚫ ⚫ ⚪ 🐸 🐸 🐸 ⚪ ⚫ ⚫ ⚪\n🐸 ⚪ ⚫ ⚫ ⚪ ⚫ ⚪ 🐸 ⚪ ⚫ ⚫ ⚪ ⚫ ⚪\n🐸 ⚪ ⚫ ⚪ ⚫ ⚫ ⚪ 🐸 ⚪ ⚫ ⚪ ⚫ ⚫ ⚪\n🐸 🐸 ⚪ ⚫ ⚪⚪ 🐸 🐸 🐸 ⚪ ⚫ ⚪ ⚪\n🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n🔴 🔴 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n🐸 🔴 🔴 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n🐸 🐸 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴\n🐸 🐸 🐸 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴\n🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸\n")
                .then(bot.channels.get(consauleDXSIY).sendMessage({embed: {color: 0xe43281, author: {name: "La commande _frog a été envoyé par " + authorDN + " (" + TAGauthor + ") dans la channel #" + channame + " du serveur " + serveurname,
                                                               icon_url: AVauthor}}}))
break;
        case "voice":
            var idoice = bot.voiceChannel;
            message.channel.sendMessage(idoice);
break;            
        case "deco":
            bot.voiceChannel.leave();
break;
        case "taco":
            message.channel.sendMessage("<:TACO11:449684235838554114> <:TACO12:449684236119572483> <:TACO13:449684236266504192> <:TACO14:449684236333744128>\n<:TACO21:449684236715294730> <:TACO22:449684236723814411> <:TACO23:449684237721796608> <:TACO24:449684236899713025>\n<:TACO31:449684237508018176> <:TACO32:449684237650493450> <:TACO33:449684237726253056> <:TACO34:449684237940031488>");
break;
        case "emo":
            var emojis = bot.emojis.array();
            message.channel.sendMessage(emojis);
break;
        case "simple":
            message.channel.sendMessage("<:051angel:458741109925871676> `<:051angel:458741109925871676>`\n<:051angry:458741110299426817> `<:051angry:458741110299426817>`\n<:051astonished:458741110848880651> `<:051astonished:458741110848880651>`\n<:051astonished1:458741111884873748> `<:051astonished1:458741111884873748>`\n<:051confused:458741112652300298> `<:051confused:458741112652300298>`\n<:051cool:458741113038176267> `<:051cool:458741113038176267>`\n<:051cool1:458741115059830785> `<:051cool1:458741115059830785>`\n<:051cry:458741122169044994> `<:051cry:458741122169044994>`\n<:051cry1:458741124581031976> `<:051cry1:458741124581031976>`\n<:051devil:458741126552223755> `<:051devil:458741126552223755>`\n<:051expressionless:458741128045395969> `<:051expressionless:458741128045395969>`\n<:051dizzy:458741128167161876> `<:051dizzy:458741128167161876>`\n<:051flushed:458741129119268874> `<:051flushed:458741129119268874>`\n<:051happy:458741130243211264> `<:051happy:458741130243211264>`\n<:051happy1:458741130708779028> `<:051happy1:458741130708779028>`\n<:051happy2:458741131627331605> `<:051happy2:458741131627331605>`\n<:051injury:458741132466192394> `<:051injury:458741132466192394>`\n<:051inlove:458741133477019658> `<:051inlove:458741133477019658>`\n<:051joy:458741134278262785> `<:051joy:458741134278262785>`\n<:051kiss:458741135590817802> `<:051kiss:458741135590817802>`\n<:051kiss1:458741138845597696> `<:051kiss1:458741138845597696>`\n<:051mute:458741153915731993> `<:051mute:458741153915731993>`\n<:051neutral:458741155237068810> `<:051neutral:458741155237068810>`\n<:051secret:458741155840917535> `<:051secret:458741155840917535>`\n<:051smile:458741156017078273> `<:051smile:458741156017078273>`\n<:051smirking:458741156092837918> `<:051smirking:458741156092837918>`\n<:051sad:458741156323524608> `<:051sad:458741156323524608>`");
            message.channel.sendMessage("<:051kiss2:458741156348559380> `<:051kiss2:458741156348559380>`\n<:051sad1:458741156357079070> `<:051sad1:458741156357079070>`\n<:051sweat:458741158105841665> `<:051sweat:458741158105841665>`\n<:051tongue2:458741158395510784> `<:051tongue2:458741158395510784>`\n<:051vomiting:458741158412156929> `<:051vomiting:458741158412156929>`\n<:051tired:458741158416220163> `<:051tired:458741158416220163>`\n<:051unamused:458741158550437900> `<:051unamused:458741158550437900>`\n<:051surprised:458741158689112066> `<:051surprised:458741158689112066>`\n<:051tongue1:458741158789513226> `<:051tongue1:458741158789513226>`\n<:051sleeping:458741159062405141> `<:051sleeping:458741159062405141>`\n<:051mask:458741159079051285> `<:051mask:458741159079051285>`\n<:051sick:458741159079051289> `<:051sick:458741159079051289>`\n<:051shocked:458741159133708330> `<:051shocked:458741159133708330>`\n<:051smile1:458741159288766464> `<:051smile1:458741159288766464>`\n<:051wink:458741159288766474> `<:051wink:458741159288766474>`\n<:051tongue:458741159326515201> `<:051tongue:458741159326515201>`\n<:051scared:458741159372783616> `<:051scared:458741159372783616>`\n<:051thinking:458741159502807061> `<:051thinking:458741159502807061>`\n<:051smiling:458741159553138719> `<:051smiling:458741159553138719>`\n<:051smiling1:458741159666384906> `<:051smiling1:458741159666384906>`\n<:051scared1:458741159808860164> `<:051scared1:458741159808860164>`\n<:051zombie:458741159947272210> `<:051zombie:458741159947272210>`\n<:051vomiting1:458741160257781790> `<:051vomiting1:458741160257781790>`");
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
    
    if (!message.guild) return;

  if (message.content === '_vien') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // quand il se connecte
          message.reply('Je suis là 😏');
        })
        .catch(console.log);
    } else {
      message.reply('Va dans un salon vocal mongolo !');
    }
  }
    
    if (message.content === "Eh sale pute, il est quelle heure ?"){
        var ladate = message.createdAt;
        var date = ladate.getHours() + ":" + ladate.getMinutes();
        message.reply('Il est ' + date + ' mais je te pris de ne pas me traiter de pute');
    }
    if (message.content === prefix + "heure"){
        message.reply('Mais je te pris de ne pas me traiter de pute')
    }
    if ((message.content === prefix + "everyone") && alladmin){
        bot.channels.get(annDXSIY).sendMessage('@everyone')
            .then(bot.channels.get(consauleDXSIY).sendMessage({embed: {color: 0xe43281, author: {name: "La commande _everyone a été envoyé par " + authorDN + " (" + TAGauthor + ") dans la channel #" + channame + " du serveur " + serveurname,
                                                               icon_url: AVauthor}}}))
    }
    if (message.content === prefix + "disc"){
        bot.voiceChannel.leave();
    }
        if (message.content === prefix + "truc"){
            message.reply(message.channel.id)
    }
    if (message.content === prefix + "heure"){
            message.reply(message.createdTimestamp)
    }

});
