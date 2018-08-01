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
    bot.channels.get(consauleDXSIY).send({"embed": {"description": "Je viens de me réveiller <:051sleeping:473830229513601024>",
    "url": "https://discordapp.com","color": 16777215,
    "footer": {"icon_url": "https://image.flaticon.com/icons/png/128/263/263147.png",
      "text": "Je joue à " + activ},
    "thumbnail": {"url": "https://cdn.discordapp.com/attachments/455740278272425995/474053163834409002/Cete.png"},
    "image": {"url": "https://fsmedia.imgix.net/05/a9/aa/5c/261b/4afa/a99c/ac32c5c1b81e/vault-boy.png?rect=0%2C120%2C1116%2C558&auto=format%2Ccompress&w=650"},
    "author": {"name": "Je suis en ligne :D",
      "url": "",
      "icon_url": ""}}})
});

bot.on("guildMemberAdd", member => { //Quand un membre entre dans le serveur
    bot.channels.get('452796717738491904').sendMessage('Hey' + member.user + ', Bienvenue sur le serveur **Dexsia | Introduce Yourself** <:051happy1:473830225709629472> <:051happy2:473830226284118027> !\nPour rejoindre le groupe fais !member dans <#452973331042402304> et envoie nous ta candidature.\nBienvenue et passe un bon moment dans la DexSia <:051angel:473830204083798016>')//envoie le message de bienvenue
        .then(bot.channels.get(consauleDXSIY).sendMessage(member.user + " est arrivé dans la DexSia, le message s'est bien affiché"));  //console
});

bot.on("guildMemberRemove", member => { //Quand un membre quitte dans le serveur
    var aurevoirDXSIY = member.guild.channels.find("name", "left"); //variable pour le salon aurevoir
    bot.channels.get('452815373700694017').sendMessage('**' + member.displayName + '** nous a quitté, paix à son âme... <:051cry:473830225801641987>')//envoie le message de aurevoir
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
    var messlow = value.toLowerCase();
    var atta = message.attachments.filename;
    
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
    if (messlow.includes('pasu')) {
        message.channel.sendMessage('<:051angel:473830204083798016> `<:051angel:473830204083798016>`\n<:051angry:473830204607954955> `<:051angry:473830204607954955>`\n<:051astonished:473830199482384384> `<:051astonished:473830199482384384>`\n<:051astonished1:473830199797219330> `<:051astonished1:473830199797219330>`\n<:051confused:473830199906271232> `<:051confused:473830199906271232>`\n<:051cool:473830212992237589> `<:051cool:473830212992237589>`\n<:051cool1:473830230210117642> `<:051cool1:473830230210117642>`\n<:051cry:473830225801641987> `<:051cry:473830225801641987>`\n<:051cry1:473830225843585064> `<:051cry1:473830225843585064>`\n<:051devil:473830230717366282> `<:051devil:473830230717366282>`\n<:051dizzy:473830231015292928> `<:051dizzy:473830231015292928>`\n<:051expressionless:473830217006317569> `<:051expressionless:473830217006317569>`\n<:051flushed:473830229358673940> `<:051flushed:473830229358673940>`\n<:051happy:473830226133254154> `<:051happy:473830226133254154>`\n<:051happy1:473830225709629472> `<:051happy1:473830225709629472>`\n<:051happy2:473830226284118027> `<:051happy2:473830226284118027>`\n<:051injury:473830229270331403> `<:051injury:473830229270331403>`\n<:051inlove:473830228968341505> `<:051inlove:473830228968341505>`\n<:051joy:473830230184951843> `<:051joy:473830230184951843>`\n<:051kiss:473830226229592065> `<:051kiss:473830226229592065>`\n<:051kiss1:473830227030573076> `<:051kiss1:473830227030573076>`\n<:051kiss2:473830227064258575> `<:051kiss2:473830227064258575>`\n<:051mask:473830229190770688> `<:051mask:473830229190770688>`\n<:051mute:473830218381918218> `<:051mute:473830218381918218>`\n<:051neutral:473830222626816011> `<:051neutral:473830222626816011>`\n<:051sad:473830226787303454> `<:051sad:473830226787303454>`\n<:051sad1:473830226695159809> `<:051sad1:473830226695159809>`\n<:051scared:473830230226632714> `<:051scared:473830230226632714>`\n<:051scared1:473830230642130975> `<:051scared1:473830230642130975>`');
        message.channel.sendMessage('<:051secret:473830227378700317> `<:051secret:473830227378700317>`\n<:051shocked:473830229736030209> `<:051shocked:473830229736030209>`\n<:051sick:473830230146940938> `<:051sick:473830230146940938>`\n<:051sleeping:473830229513601024> `<:051sleeping:473830229513601024>`\n<:051smile:473830227483688971> `<:051smile:473830227483688971>`\n<:051smile1:473830230302261259> `<:051smile1:473830230302261259>`\n<:051smiling:473830230797058048> `<:051smiling:473830230797058048>`\n<:051smiling1:473830230231089186> `<:051smiling1:473830230231089186>`\n<:051smirking:473830228066566145> `<:051smirking:473830228066566145>`\n<:051surprised:473830227865370634> `<:051surprised:473830227865370634>`\n<:051sweat:473830227823296523> `<:051sweat:473830227823296523>`\n<:051thinking:473830229685567489> `<:051thinking:473830229685567489>`\n<:051tired:473830228272218123> `<:051tired:473830228272218123>`\n<:051tongue:473830231002841089> `<:051tongue:473830231002841089>`\n<:051tongue1:473830228578533386> `<:051tongue1:473830228578533386>`\n<:051tongue2:473830228058308609> `<:051tongue2:473830228058308609>`\n<:051unamused:473830228783792128> `<:051unamused:473830228783792128>`\n<:051vomiting:473830228448378910> `<:051vomiting:473830228448378910>`\n<:051vomiting1:473830230474358794> `<:051vomiting1:473830230474358794>`\n<:051wink:473830228410499072> `<:051wink:473830228410499072>`\n<:051zombie:473830230730211328> `<:051zombie:473830230730211328>`\n');                          
    }
    if (message.channel.id === activitDXSIY) {
        bot.user.setPresence({ game: { name: value}})
            .then(bot.channels.get(consauleDXSIY).sendMessage({embed: {color: 0x202020, author: {name: "Je joue maintenant à " + value + " grâce à " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}}))};
    if (message.content === "jackobe") {
  message.channel.sendMessage(":051angel: `:051angel:`\n:051angry: `:051angry:`\n:051astonished: `:051astonished:`\n:051astonished1: `:051astonished1:`\n:051confused: `:051confused:`\n:051cool: `:051cool:`\n:051cool1: `:051cool1:`\n:051cry: `:051cry:`\n:051cry1: `:051cry1:`\n:051devil: `:051devil:`\n:051dizzy: `:051dizzy:`\n:051expressionless: `:051expressionless:`\n:051flushed: `:051flushed:`\n:051happy: `:051happy:`\n:051happy1: `:051happy1:`\n:051happy2: `:051happy2:`\n:051injury: `:051injury:`\n:051inlove: `:051inlove:`\n:051joy: `:051joy:`\n:051kiss: `:051kiss:`\n:051kiss1: `:051kiss1:`\n:051kiss2: `:051kiss2:`\n:051mask: `:051mask:`\n:051mute: `:051mute:`\n:051neutral: `:051neutral:`\n:051sad: `:051sad:`\n:051sad1: `:051sad1:`\n:051scared: `:051scared:`\n:051scared1: `:051scared1:`\n:051secret: `:051secret:`\n:051shocked: `:051shocked:`\n:051sick: `:051sick:`\n:051sleeping: `:051sleeping:`\n:051smile: `:051smile:`\n:051smile1: `:051smile1:`\n:051smiling: `:051smiling:`\n:051smiling1: `:051smiling1:`\n:051smirking: `:051smirking:`\n:051surpised: `:051surpised:`\n:051sweat: `:051sweat:`\n:051thinking: `:051thinking:`\n:051tired: `:051tired:`\n:051tongue: `:051tongue:`\n:051tongue1: `:051tongue1:`\n:051tongue2: `:051tongue2:`\n:051unamused: `:051unamused:`\n:051vomiting: `:051vomiting:`\n:051vomiting1: `:051vomiting1:`\n:051wink: `:051wink:`\n:051zombie: `:051zombie:`\n");
    }
    if (message.content === "listemojis") {
     message.channel.sendMessage("Ce serveur consiste à promouvoir tous les talents. Pour pouvoir Exposer vos talent, vous devez avoir un des rôles de créateur de contenu, et pour en avoir un, vous devez nous fournir des informations primaires sur vous :\n◾ Nom\n◾ Age\n◾ Présentation global\n\nLes types de création que vous pouvez exposer sont définis par ces rôles :\n◾Drawings/Gfx (logo, bannière, dessins, peintures...)\n◾Streamer\n◾Youtuber/Montage : 	\n- Gaming\n- Animation \n- Danse\n- Lifestyle\n- Beauté\n- Humour\n- Fiction\n- Vulgarisation scientifique\n- Sport\n◾Music/Beatmaking (avec ou sans chant)\n\nMontrez-nous vos travaux et projets avec : \n◾ Réseaux sociaux ➡️ (Dessinateurs)\n◾ Soundcloud ➡️ (Music/beatmaking)\n◾ Chaîne Twitch ou Youtube ➡️ (Streamer/ Yt)\n\nVotre candidature sera supprimée suite à l’acceptation ou le refus\n(Réponse sous les plus brefs délais )\n\nBonne journée à toi <:051happy1:473830225709629472>")   
    }
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
    if (message.channel.id === "463089477355700226"){
        if (atta === "") {
        message.channel.send("la bite en bois")
            }
            else {message.react('🤔');
                  message.react('🤔')}
    }
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()){
        case "activ":
            var value = message.content.substr(7);
            if (alladmin){
                bot.user.setPresence({ game: { name: value}});
            }
    
    
break;
        case "bois":
            message.channel.sendMessage(atta)
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
        case "messagemem":
            message.channel.sendMessage(lastactiv);
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
        case "jesuispasunetomate":
            const oui = bot.emojis.find("name", "51think");
            message.channel.sendMessage(oui)
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
    if ((message.content === prefix + "everyone") && alladmin){
        bot.channels.get(annDXSIY).sendMessage('@everyone')
            .then(bot.channels.get(consauleDXSIY).sendMessage({embed: {color: 0xe43281, author: {name: "La commande _everyone a été envoyé par " + authorDN + " (" + TAGauthor + ") dans la channel #" + channame + " du serveur " + serveurname,
                                                               icon_url: AVauthor}}}))
    }
    if (message.content === prefix + "disc"){
        bot.voiceChannel.leave();
    }
        if (message.content === prefix + "truc"){
            message.reply(message.channel.id).setAttachment("https://community-content-assets.minecraft.net/upload/abba9edd2b70f1d1da75d72bf9d4a9b0-Header%20Roman3.jpg")
    }
    if (message.content.includes("carro")){
            message.reply("Oui c'est moi")
    }
    


});
