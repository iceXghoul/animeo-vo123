const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
const moment = require("moment");

const prefix = "*";

//autorole
Client.on("guildMemberAdd", async member => { 
    console.log("un membre est arrivé.");
    member.roles.add("965550800510259240");
});
//help commande
Client.on("messageCreate", message => {
    if (message.author.bot) return;

        if(message.content === prefix + "help"){
            var embed = new Discord.MessageEmbed()
            .setColor("AQUA")
            .setTitle("Commande help executé")
            .setDescription("Voici le prefix: *.Voici la liste des commandes du bot:")
            .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/81hDLlUPUzL.jpg")
            .addField("__***help**__", "Affiche la liste des commandes")
            .addField("__**cmdsmodo**__", "Montre les commandes pour les modérateur/haut grader")
            .addField("__**/help**__", "Dis comment voir la commande pour voir la liste des commandes")
            .addField("__**/ping**__", "Vous renvois pong")
            .addField("__***userinfo**__", "Permet de voir la pp d'un utilisateur")
            .addField("__**COMMANDE DE MODERATION**__", "**Que les haut gradée peuvent utilisé ces commande**")
            .addField("__**/clear**__", "Permet de clear des msg")
            .addField("__***ban**__", "Permet de bannir un utilisateur")
            .addField("__**/ban**__", "Dis comment voir la commande pour bannir")
            .addField("__***kick**__", "Expulse l'utilisateur visé.")
            .addField("__***mute**__", "Réduit au silence l'utilisateur visé.")
            .addField("__***unmute**__", "Enlève la réduction au silence d'un utilisateur visé.")
            .addField("__***timemute**__", "Réduit temporairement un utilisateur choisis pour une durée définit en seconde.")


            message.channel.send({ embeds: [embed]});
        }
    });

//cmdsmodo
Client.on("messageCreate", message => {
    if (message.author.bot) return;

        if(message.content === prefix + "cmdsmodo"){
            var embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Commande help executé")
            .setDescription("Voici le prefix: *.Voici la liste des commandes du bot pour les haut grader :")
            .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/81hDLlUPUzL.jpg")
            .addField("__**COMMANDE DE MODERATION**__", "**Que les haut gradée peuvent utilisé ces commande**")
            .addField("__***cmdsmodo**__", "Montre les commandes pour les modérateur/haut grader")
            .addField("__**/clear**__", "Permet de clear des msg")
            .addField("__***ban**__", "Permet de bannir un utilisateur")
            .addField("__**/ban**__", "Dis comment voir la commande pour bannir")
            .addField("__***kick**__", "Expulse l'utilisateur visé.")
            .addField("__***mute**__", "Réduit au silence l'utilisateur visé.")
            .addField("__***unmute**__", "Enlève la réduction au silence d'un utilisateur visé.")
            .addField("__***timemute**__", "Réduit temporairement un utilisateur choisis pour une durée définit en seconde.")
            .setURL("https://www.youtube.com/channel/UCKsvZIvlpq28Hs_WFiBmx-Q")


            message.channel.send({ embeds: [embed]});
        }
    });

//rule commande
    Client.on("messageCreate", message => {
        if (message.author.bot) return;
    
            if(message.content === prefix + "rule"){
                var embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("***__ 1️⃣ : Dans un cadre général, merci de respecter les conditions d'utilisation officielles de discord__***")
                .addField("2️⃣ : **__Dans les salons texturels.__**", "Respectez ces règles merci de votre coopération : ")
                .addField("Mercie de respectez les autres utilisateurs du serveur.", "Si vous ne respectez pas les utilisateurs du serveur vous aurez une sanction")
                .addField("Vous ne devez pas insultez les autres utilisateurs.", "Pour que le serveur soit dans le respect.")
                .addField("Tout insulte sera punis", "Serement d'un mute.")
                .addField("Tout racisme en vers d'autre utilisateur sera punis.", "Serement d'un mute.")
                .addField("***__ 3️⃣ : Dans les salons vocaux : __***", "Mercie de repecté ce règlement dans les salons vocaux.")
                .addField("Vous ne devez pas criez dans votre micro.", "Pour le bien de nos oreilles.")
                .addField("Tout insulte sera punis", "D'une interdiction d'utilisé les salons vocaux pendant une certaine durée.")
                .addField("Tout racisme en vers d'autre utilisateur sera punis.", "D'une interdiction d'utilisé les salons vocaux pendant 24h.")
                .addField("Vous ne devez pas utilisé de modificateur de voix que se soit par peur qu'on vous traitre de puço a cause de votre voix ou pour une autre réson.", "Si vous croyer qu'on va se moquai ou vous insulté a cause de votre voix vener dm un modérateur ou un fondateur.")
                
    
    
                message.channel.send({ embeds: [embed]});
            }
        });


Client.on("message", message => {
        if(message.author.bot) return;
        if(message.channel.type == "dm") return;

        //*kick, *ban, *mute, *unmute, *timemute

    if(message.member.permissions.has("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mentions = message.mentions.members.first();

            if(mentions == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if(mentions.bannable){
                    mentions.ban();
                    message.channel.send(mentions.displayName + " a été banni avec succès");
                }
                else {
                    message.reply("Impossible de bannir ce membre.");
                }
            }
        }
    }
        if(message.content.startsWith(prefix + "kick")){
            let mentions = message.mentions.members.first();

        if(mentions == undefined){
            message.reply("Membre non ou mal mentionné.");
        }
        else {
            if(mentions.kickable){
                mentions.kick();
                message.channel.send(mentions.displayName + "a été kick avec succès");
            }
            else {
                message.reply("Impossible de kick ce membre.");
                }
            }
        }
        if(message.content.startsWith(prefix + "mute")){
            let mentions = message.mentions.members.first();

            if(mentions == undefined){
                message.reply("Membre non ou mal mentionné.");
            }

            else {
                mentions.roles.add("965547437391495168");
                message.reply(mentions.displayName + "a été mute avec succès");
            }
        }
        if(message.content.startsWith(prefix + "unmute")){
            let mentions = message.mentions.members.first();

            if(mentions == undefined){
                message.reply("Membre non ou mal mentionné.");
            }

            else {
                mentions.roles.remove("965547437391495168");
                message.reply(mentions.displayName + "a été unmute avec succès");
            }
        }
        if(message.content.startsWith(prefix + "timemute")){
            let mentions = message.mentions.members.first();

            if(mentions == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                let args = message.content.split(" ");

                mentions.roles.add("965547437391495168");
                setTimeout(function() {
                    mentions.roles.remove("965547437391495168");
                    message.channel.send("<@" + mentions.id + "> tu peux désormais parler de nouveau !");
                }, args[2] * 1000);
            }
        }
        if(message.content.startsWith(prefix + "heurem")){
            let mentions = message.mentions.members.first();

            if(mentions == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                let args = message.content.split(" ");

                mentions.roles.add("965547437391495168");
                setTimeout(function() {
                    mentions.roles.remove("965547437391495168");
                    message.channel.send("<@" + mentions.id + "> tu peux désormais parler de nouveau !");
                }, args[2] * 3600000);
            }
        }
});

//userinfo commande
Client.on("messageCreate", message => {
    if (message.member.bot || message.channel.type == "dm" || !message.content.startsWith(prefix)) return;
    let mention = message.mentions.users.first() || message.author;
    let Member = message.mentions.members.first() || message.member;
    if (mention === undefined) return ;
    if(message.content.startsWith(`${prefix}userinfo`)){
        let embed = new Discord.MessageEmbed()
            .setTitle(`Avatar de ${mention.tag}`)
            .setDescription("ID de l'utilisateur : " + mention.id + " \n \nPseudo : " + mention.tag + "\n\n Date d'arrivé : " + moment(Member.joinedAt).format('DD/MM/YYYY') + "\n\nDate de création du compte : " + moment(mention.createdAt).format('DD/MM/YYYY') + "\n\n Rôles : " + Member.roles.cache.map(role => role).join(' ').replace("@everyone", " ") + "\n\n Permission(s) : " +  Member.DEFAULT)
            .setImage(mention.displayAvatarURL())
            .setColor('RED');

        message.channel.send({ embeds: [embed] });
    }
});

//suggestion
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "965571755076886574") return;
    if(message.channel.id !="965571755076886574") return;
    message.channel.send(`${message.content}`)
    .then(msg => {
        msg.react('✅');
        msg.react('⚪');
        msg.react('❌');
    });
    message.delete()
})



var data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("renvoie pong")
    .addUserOption(option => option
        .setName("utilisateur")
        .setDescription("utilisateur que vous souhaitez memtionner")
        .setRequired(false));


var data2 = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Dis comment voir la liste des commande du serveur.")
    .addUserOption(option => option
        .setName("utilisateur")
        .setDescription("Utilisateur que vous souhaitez memtionner")
        .setRequired(false));


var data3 = new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Vous permez de supprimé des msg si vous avez les permissions pour.")
    .addIntegerOption(option => option
        .setName("number")
        .setDescription("Nombre de messages que vous voulez supprimer")
        .setRequired(true)
     );


var data4 = new SlashCommandBuilder() 
    .setName("ban")
    .setDescription("Montre la commande a utilisé pour bannir.")
    .addUserOption(option => option
        .setName("utilisateur")
        .setDescription("Utilisateur au quelle vous voulez montrer comment voir la commande")
        .setRequired(false));


var data5 = new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Dis comment voir la commande pour kick un utilisateur.")
    .addUserOption(option => option
        .setName("utilisateur")
        .setDescription("Utilisateur que vous souhaitez memtionner")
        .setRequired(false));


var nbTicket1 = 0;
var nbTicket = 0;

Client.on("ready", async () => {

    /*var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("ticket-question")
                .setLabel("ouvrir un ticket-question")
                .setStyle("DANGER")
            );


    Client.channels.cache.get("965601029255204894").send({content: "Appuyer pour ouvrir un ticket-question.", components: [row]});
    */

    /*var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("ticket-modo")
                .setLabel("ouvrir un ticket-modo")
                .setStyle("SECONDARY")
            );


    Client.channels.cache.get("965705122871140365").send({content: "Appuyer pour ouvrir un ticket-pour-devenir-modo.", components: [row]})
    */


    Client.application.commands.create(data);
    Client.application.commands.create(data2);
    Client.application.commands.create(data3);
    Client.application.commands.create(data4);
    Client.application.commands.create(data5);

    Client.guilds.cache.get("965191313215594497").commands.create(data);

    console.log(await Client.guilds.cache.get("965191313215594497").commands.cache);
    await Client.guilds.cache.get("965191313215594497").commands.fetch();
    console.log(await Client.guilds.cache.get("965191313215594497").commands.cache);

    console.log("bot opérationnel");
});


Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "ticket-question"){
            nbTicket++;

            interaction.guild.channels.create("ticket-question-#" + nbTicket1, {
                parent: "965600750761807872",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: interaction.user.id,
                        allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticket-q")
                        .setLabel("fermer le ticket")
                        .setStyle("SUCCESS")
                    );

                    channel.send({content: "<@" + interaction.user.id + "> Voici le ticket-question que vous venez de creez, un modérateur/plus haut grader peux le fermer comme vous.", components: [row]});

                    interaction.reply({content: "le ticket-question a bien était ouvert.", ephemeral: true});
            });
        }
        else if(interaction.customId === "close-ticket-q"){
            interaction.channel.setParent("965638094361620480")

            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("delete-q")
                        .setLabel("Supprimé le ticket-question")
                        .setStyle("SUCCESS")
                        );

            interaction.message.delete();

            interaction.channel.send({content: "Supprimer le ticket-question <@" + interaction.user.id + "> ?", components: [row]});

            interaction.reply({content: "ticket archivé <@" + interaction.user.id +">", ephemeral: true});
        }
        else if(interaction.customId === "delete-q"){
            interaction.channel.delete();
        }
    }
});


Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "ticket-modo"){
            nbTicket++;

            interaction.guild.channels.create("ticket-devenir-modo-#" + nbTicket, {
                parent: "965600750761807872",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: interaction.user.id,
                        allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                    }
                ]
            }).then(channel => {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("close-ticket-m")
                        .setLabel("fermer le ticket")
                        .setStyle("DANGER")
                    );

                    channel.send({content: "<@" + interaction.user.id + "> Voici le ticket-pour-devenir-modo que vous venez de creez, un modérateur/plus haut grader peux le fermer comme vous.", components: [row]});

                    interaction.reply({content: "le ticket-pour-devenir-modo a bien était ouvert.", ephemeral: true});
            });
        }
        else if(interaction.customId === "close-ticket-m"){
            interaction.channel.setParent("965638094361620480")

            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("delete-m")
                        .setLabel("Supprimé le ticket-question")
                        .setStyle("DANGER")
                        );

            interaction.message.delete();

            interaction.channel.send({content: "Supprimer le ticket-question <@" + interaction.user.id + "> ?", components: [row]});

            interaction.reply({content: "ticket archivé <@" + interaction.user.id +">", ephemeral: true});
        }
        else if(interaction.customId === "delete-m"){
            interaction.channel.delete();
        }
    }
});



Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "ping"){
            let user = interaction.options.getUser("utilisateur");

            if(user != undefined){
                interaction.reply("pong <@" + user.id + ">")
            }
            else {
            interaction.reply("pong");
            }
        }
    }
});




Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "help"){
            let user = interaction.options.getUser("utilisateur");

            if(user != undefined){
                interaction.reply("Utiliser la commande *help pour voir les commandes du bot <@" + user.id + ">")
            }
            else {
            interaction.reply("Utiliser la commande *help pour voir les commandes du bot");
            }
        }
    }
});




Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "clear"){
            if(interaction.member.permissions.has("MANAGE_MESSAGE"))
            var number = interaction.options.getInteger("number")
            if(number >= 1 && number <= 100){
                interaction.channel.bulkDelete(number);
                interaction.reply({content: number + " Message correctement supprimé", ephemeral: true})
            }
            else{
                interaction.reply({content: "Le nombre de messages doit être situé entre 1 et 100", ephemeral: true});
            }
        }
    }
});




Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "ban"){
            let user = interaction.options.getUser("utilisateur");

            if(user != undefined){
                interaction.reply("Utiliser la commande *ban pour bannir un utilisateur <@" + user.id + ">")
            }
            else {
            interaction.reply("Utiliser la commande *ban pour bannir un utilisateur");
            }
        }
    }
});   




Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "kick"){
        let user = interaction.options.getUser("utilisateur");

            if(user != undefined){
                interaction.reply("Utiliser la commande *kick pour kick un utilisateur <@" + user.id + ">")
            }
            else {
            interaction.reply("Utiliser la commande *kick pour kick un utilisateur");
            }
        }
    }
});

