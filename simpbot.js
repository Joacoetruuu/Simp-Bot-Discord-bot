///Discord.js///
const Discord = require("discord.js")
const client = new Discord.Client();
const {MessageEmbed} = require("discord.js")

/// Sistema de niveles ///
const MeowDB = require("meowdb");
const niveles = new MeowDB({
  dir: __dirname,
  name: "nivelesUsuario"
});

const canvacord = require("canvacord")

///config.json///
const config = require("./config.json");
let prefix = config.prefix;

/// Jimp Imagenes///
const jimp = require("jimp")
const Jimp = require("jimp")
const { measureText } = require("jimp")

/// NSFW ///
const akaneko = require("akaneko")
const discordSimpleNsfw = require("discord-simple-nsfw")
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

/// Utiles ///
const fetch = require("node-fetch")
const megadb = require("megadb")
const ccxt = require("ccxt")

/// Cotizaciones ///
  //let price = require("crypto-price")
  // const dolar = require("dolar")


/// Cliente on Ready ///
client.on("ready", () => {
  console.log("SimpBot Preparado")
  client.user.setActivity(`!ayuda` + " | " + `${client.guilds.cache.size} servidores`+ " | " + client.users.cache.size + " usuarios" )
})

/// Client on GuildMemberAdd ///
client.on("guildMemberAdd", (member) => {
  const embed = new MessageEmbed()

  .setTitle(`Bienvenido al servidor ${memeber.guild.name}!`)
  .setDescription(`Hola, ${member.user}, pásala lindo en el servidor`)
  .setColor("PURPLE")
  .setFooter(`Simp Bot - Hecho por Estruch`, client.user.avatarURL())
  .setThumbnail(client.user.displayAvatarURL())

  member.send(embed)
})

/// Simp Bot Music (Musica) ///
const MusicBot = require("discord-music-system-es");
const { from } = require("snekfetch");
const { request } = require("http");
const { meme } = require("memejs");
const { resourceUsage } = require("process");

const bot = new MusicBot({
  botPrefix: "!!",
  ytApiKey: "AIzaSyDNdJTNzLHNNaQgT0fCQ3jc1sinFvJ1WIM",
  botClient: client
});

client.on("message", message => {
  if(message.content.startsWith("!!")){
    bot.onMessage(message);
  };
});

/// Client on Message /// 
client.on("message", async message => {
  if(!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

  /// MUSICA ///

  if(command === "musica"){
    const embed = new Discord.MessageEmbed()
    .setTitle("Comandos Música")
    .setDescription("El prefix del simpbot en esta parte es `!!` para que no hubiera errores con otros bots ")
    .addField("Comandos Play", "`!!play` `!!add` `!!join`")
    .addField("Comandos Stop", "`!!stop` `!!kill` `!!destroy` `!!leave`")
    .addField("Comandos Now Playing", "`!!np` `!!nowplaying` `!!current`")
    .addField("Comandos Skip", "`!!skip` `!!next` `!!>>`")
    .addField("Comandos Queue", "`!!queue` `!!list`  `!!show`")
    .addField("Comandos Volumen", "`!!volumen` `!!setvolumen` de 0 a 100")
    .addField("Comandos Pause", "`!!pause`")
    .addField("Comandos Resume", "`!!resume`")
    .addField("Comandos Remove para Playlist", "`!!remove` `!!delete` Junto a un número valido de la lista de reproducción")
    .setColor("PURPLE")
    .addField("POR EL MOMENTO SOLO URL DE YOUTUBE", "Gracias :D")
    .setImage("https://cdn.discordapp.com/attachments/803770723365552128/805520645391253515/Simpbotretro3.png")
  
    message.channel.send(embed)
  }
  

  /// Imagenes ///
  if(command === "simp"){ 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author 

  const avatar = await jimp.read(user.displayAvatarURL({format: "png", dynamic: true}));
  const fondo = await jimp.read("https://cdn.glitch.com/3ce4be87-3936-43d6-ae4d-4450f6a5a254%2Fsimpcard.png?v=1607503845023")
  
  avatar.resize(450, 600);
  fondo.resize(1284, 825);

  fondo.composite(avatar, 40, 100)
  const bufferImagen = await fondo.getBufferAsync("image/png")
  message.channel.send("", {files: [{attachment: bufferImagen, name: "simpcard2.png"}]})
  }

  if(command === "preso"){
    
    if(!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author

    const avatar = await jimp.read(user.displayAvatarURL({format: "png"}))
    const fondo = await jimp.read("https://assets.stickpng.com/images/5856a83e4f6ae202fedf276d.png")

    avatar.resize(600, 600)
    fondo.resize(600, 600)

    avatar.composite(fondo, 0, 0).write("carcel.png")
    message.channel.send("", {files: ["carcel.png"]})
  }

  /// Chistes, memes, cursed ///

  if(command === "chiste"){
    let chistes = ["Cuanto calza un paralitico? Rodado 28", "Como matas 10 moscas de un solo golpe? Pateando un linyera", "Que hace un leproso tocando la guitarra? Carne picada", "Como conseguis el numero de una judía? Le miras el brazo", "Que hace un leproso tirandose por un acantilado? Juega tetris", "-Mama, porque me estas dando los regalos de navidad en agosto? -Porque es mas barato que la quimio", "-Como armas una fiesta electrónica tipo avicii, en Etiopía? -Colgas un bife del techo.", "-¿Cuanto tarda una negra en echarse un cago? 9 meses", "¿Como saca uno a su niño interior? Con una percha", "¿Diferencia entre una ferrari y un bebe? Nunca estuve adentro de una ferrari", "¿Que separa a la humanidad de los animales? El mar mediterraneo", "Ayer mi pareja me dijo pederasta...Es una palabra bastante compleja para una mujer de 8 años...", "La semana pasada sali a comer con mi novia de 18 años y la gente empezo a criticar nuestra diferencia de edad...Realmente arruinaron nuestro decimo aniversario....", "Saben como se ve un bebe despues de 30 segundos en el microondas? Yo tampoco, cierro los ojos cuando me pajeo"]
    let randomChiste = chistes[Math.floor(Math.random() * chistes.length)];

    const chistaco = new Discord.MessageEmbed()
      .setDescription(`${randomChiste}`)
      .setColor("PURPLE")
    
  message.channel.send(embed)
  }

  if(command === "meme" || command === "mimi"){
    meme("SquarePosting", function(err, data){
      if (err) return message.reply(err)
      
      const embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setImage(data.url)

      message.channel.send(embed)
    })
  }

  if(command === "cursed"){
    meme("cursed_images", function(err, data){
      if (err) return message.reply(err)

      const embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setImage(data.url)

      message.channel.send(embed)
    })
  }

  /// NSFW ///

  if(command === "nsfw"){
    const embed = new Discord.MessageEmbed()
    .setTitle("Comandos NSFW")
    .setDescription("`!bubis` `!neko` `!foxgirl` `!cum` `!colegiala` `!pussy` `!paja` `!ass`")
    message.channel.send(embed)
    if(!message.channel.nsfw)
        return message.channel.send("Los comandos NSFW solo se pueden ver en canales de ese tipo")
  }

  if(command === "bubis"){
    if(!message.channel.nsfw) {return message.channel.send("Solo se puede ver en un canal NSFW")}
    const image = await nsfw.boobs();
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setImage(image)
    message.channel.send(embed)
  }

  if(command === "ass"){
    if(!message.channel.nsfw) {return message.channel.send("Solo se puede ver en un canal NSFW")}
    const image = await nsfw.ass();
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setImage(image)
    message.channel.send(embed)

  }

  if(command === "neko"){
    let neko = await akaneko.neko();

    const embed = new Discord.MessageEmbed()
    .setImage(neko)
    message.channel.send(embed)
  if(!message.channel.nsfw)  return message.channel.send("Solo se puede ver en un canal NSFW")
  }

  if(command === "foxgirl"){
    let fox = await akaneko.foxgirl();

    const embed = new Discord.MessageEmbed()
    .setImage(fox)
    message.channel.send(embed)
  if(!message.channel.nsfw) return message.channel.send("Solo se puede ver en un canal NSFW")
  }

  if(command === "cum"){
    let cum = await akaneko.nsfw.cum();

    const embed = new Discord.MessageEmbed()
    .setImage(cum)
    message.channel.send(embed)
  if(!message.channel.nsfw) return message.channel.send("Solo se puede ver en un canal NSFW")
  }

  if(command === "paja"){
    let paja = await akaneko.nsfw.masturbation();

    const embed = new Discord.MessageEmbed()
    .setImage(cum)
    message.channel.send(embed)
  if(!message.channel.nsfw) return message.channel.send("Solo se puede ver en un canal NSFW")
  }

  if(command === "pussy"){
    let pussy = await akaneko.nsfw.pussy();

    const embed = new Discord.MessageEmbed()
    .setImage(pussy)
    message.channel.send(embed)
  if(!message.channel.nsfw) return message.channel.send("Solo se puede ver en un canal NSFW")
  }

  if(command === "colegiala"){
    let sc = await akaneko.nsfw.school();

    const embed = new Discord.MessageEmbed()
    .setImage(sc)
    message.channel.send(embed)
  if(!message.channel.nsfw) return message.channel.send("Solo se puede ver en un canal NSFW")
  }

/// INFORMACION SV, BOT Y FUNCIONALIDADES DE SERVIDOR///
if(command === "svinfo"){

  var server = message.guild;

  const embed = new Discord.MessageEmbed()
  .setThumbnail(server.iconURL)
  .setAuthor(server.name, server.iconURL)
  .addField('ID', server.id, true)
  .addField('Región', server.region, true)
  .addField('Creado él', server.joinedAt.toDateString(), true)
  .addField('Creador del server', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
  .addField('Cantidad de miembros', server.memberCount, true)
  .setColor(0x66b3ff)
  
 message.channel.send({ embed });
}

if(command === "ping"){
  let ping = Math.floor(message.client.ping);

  message.channel.send(":ping_pong: pong")
    .then(m => {m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``)});
}

if(command === "invitacion"){

  const embed = new Discord.MessageEmbed()
  .setTitle("Invitá al Simp Bot a otros servidores!")
  .setURL("https://discord.com/oauth2/authorize?client_id=770261017821184021&scope=bot&permissions=3145736")
  .setImage("https://cdn.discordapp.com/attachments/792607127608098897/800230718231805983/simpbotlogo.png")
  .setColor("PURPLE")

  message.channel.send(embed)
}

if(command === "simpstats"){

  const embed = new Discord.MessageEmbed()
  .setAuthor("Simp Bot", client.user.avatarURL())
  .addField("Desarrollador", `Simba#9092`)
  .addField("Servidores", `${client.guilds.cache.size}`)
  .addField("Usuarios", `${client.users.cache.size}`)
  .addField("RAM", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .addField("Libreria", "Discord.js V12.2.0")
  .setColor("PURPLE")

  message.channel.send(embed)

}




/// Cripto y dolar ///
if(command === "cripto" || command === "crypto"){
  const embed = new Discord.MessageEmbed()
  .setTitle("Criptomonedas")
  .setDescription("Sacamos esta función del Simp Bot. En su lugar hicimos al **CryptoSimp**, un bot que te dice precio e información de todas las criptomonedas listadas en CoinMarketCap.")
  .addField("Agrega al Crypto Simp", `https://discord.com/oauth2/authorize?client_id=823509979847327764&scope=bot&permissions=2151140416`)
  .setColor("PURPLE")
  .setImage("https://cdn.discordapp.com/attachments/770665685553905714/830757124744675378/01bbe4c0-12dc-440e-91e6-b9b43061de6d.gif")
  

  message.channel.send(embed)
}

if(command === "dolar"){
  const TYPES = {
    real: 'OFICIAL',
    blue: 'BLUE'
  }
  const convert = (val) => val.toFixed(2)
  
  const calculateOffset = (a, b) => ({
    buy: convert(a.value_buy).length < convert(b.value_buy).length,
    sell: convert(a.value_sell).length < convert(b.value_sell).length,
    avg: convert(a.value_avg).length < convert(b.value_avg).length,
  })
  
  const printTable = (
    val,
    type,
    offset = { buy: false, sell: false, avg: false },
  ) => {

    const embed = new Discord.MessageEmbed()
    .setTitle(` ${type} `)
    .setDescription(` **Compra:**\t   ${offset.buy ? ' ' : ''}$ ${convert(val.value_buy)}  ` + `  **Venta:**\t   ${offset.sell ? ' ' : ''}$ ${convert(val.value_sell)}`)
    .setColor("GREEN")
    .setTimestamp(new Date())
    .setFooter(`Datos de moneda brindados por Bluelytics`)

    message.channel.send(embed)


  }
  
  const print = (oficial, blue) => {
    printTable(oficial, TYPES.real, calculateOffset(oficial, blue))
    console.log()
    printTable(blue, TYPES.blue, calculateOffset(blue, oficial))
  }

  const trae = require('trae')



const URL = 'https://api.bluelytics.com.ar/v2/latest'

const main = () => {
  trae
    // @ts-ignore
    .get(URL)
    .then(({ data }) => {
      const { oficial, blue } = data
      print(oficial, blue)
    })
    .catch(console.error)
}

module.exports = main

// @ts-ignore
if (!module.parent) {
  main()
}
}

/// UTILIDADES ///

if(command === "say"){
  const channel = message.mentions.channels.first()

  let sendch = message.guild.channels.cache.find(channel => channel.name === `${channel}`)
  let as = args.slice(1).join(" "); 

  if(!channel) return message.channel.send("Menciona el canal")
  if(!as) return message.channel.send("Pone lo que querés decir")

  channel.send(as);
}

if(command === 'md'){
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('No tenés permisos para usar este comando');
  
  
  let persona = message.mentions.members.first();
  if(!persona) return message.channel.send('');

  let texto = args.slice(1).join(' ');
  if(!texto) return message.reply("Escribí un mensaje");
  
  persona.send(texto)
  
  message.channel.send( `Se ha enviado un mensaje a ${persona.displayName}`).then(m => m.delete({timeout: 5000}));
} 

if(command === "jumbo") {
  if (!args[0]) return message.channel.send("Falta el emoji")
  let emoji = message.guild.emojis.cache.find(x => x.name === args [0].split(":") [1])
      
  if(!emoji) return message.reply("Falta el emoji, acordate que solo los de este server")
  message.channel.send(emoji.url)
}

if(command === "svicon"){
  let icono = message.guild.iconURL({size : 2048, dynamic: true})

  const embed = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setImage(`${icono}`)

 message.channel.send(embed)
}

if(command === "avatar"){
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 
     const avatar = new MessageEmbed()
 .setDescription(`[Descargar Avatar](${user.displayAvatarURL({
         format: 'png',
         dynamic: true
     })})`)
 .setImage(user.displayAvatarURL({dynamic: true, size : 1024 }))
 .setColor("PURPLE")
 message.channel.send(avatar)
}

if(command === "nitro"){
  let usuario = message.author; 
  if(!usuario.avatar) {
   message.channel.send("No es nitro")
  } else if (usuario.avatar.startsWith("a_")){
   message.channel.send("Es nitro")
  } else {
   message.channel.send ("No es nitro")
  }
 }

 if(command === "invite"){
  client
  
        .generateInvite([
          "ADMINISTRATOR",
          "MANAGE_CHANNELS",
          "MANAGE_ROLES",
          "MANAGE_MESSAGES",
          "SEND_MESSAGES",
          "CONNECT",
          "BAN_MEMBERS"
        ])
        .then(link => {

          let icono = message.guild.iconURL({size : 4096, dynamic: true})
          const embed = new Discord.MessageEmbed()
          .setTitle(`Link de invitación para ${message.guild.name}`)
          .setDescription(link)
          .setImage(icono)
          .setColor("PURPLE")

          message.channel.send(embed)
         
        });

}

if(command === "random"){
  const embed = new Discord.MessageEmbed()
  .setDescription("El elegido es " + message.guild.members.cache.random().displayName + "	:hot_face:")
  .setColor("PURPLE")

  message.channel.send(embed)
 }

if(command === "borrar"){
  message.delete() 
  let perms = message.member.hasPermission('MANAGE_MESSAGES');


if(!perms) { 
return message.channel.send('Veo que no tenés permisos UwU').then((mensaje1)  => {mensaje1 
.delete({ timeout: 2000 });
})
}
if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) { 

return message.channel.send('No tenés permiso para usar este comando') 
}

if(!args[0]) { 

const embed1 = new Discord.MessageEmbed()
.setDescription("Pone un número menor que ``100`` y mayor que ``0``")
.setColor("PURPLE")
return message.channel.send(embed1).then((bms) => {  
mensaje3.delete({ timeout: 4000 }); 
})
}

let number = args[0] 
if(isNaN(number)) { 

return message.channel.send('Tenés que poner números').then((mensaje2) => { 
mensaje.delete({ timeout: 4000 }); 
})
}

number = parseInt(number) 
if(number >= 100 || number <= 0) { 

return message.channel.send('Valor incorrecto').then((awa) => { 
awa.delete({ timeout: 2000 }); 
})

}
message.channel.bulkDelete(number + 1 ).then( () => { 
}).catch(mensajeerror => { 
const embed = new Discord.MessageEmbed()
.setDescription(`${error.message}`) 
.setFooter("NOSEXD")
.setColor("PURPLE")
message.channel.send(embed).then((errorw) => {  
errorw.delete({ timeout: 4000 }); 
})
})
}



/// CALCULADORA ///
if(command === "calculadora"){

  let signos = ["*","/","+","-","x","~"]; 

  if(!args[0]) return message.channel.send('Te falto poner que te calculo rey, sos re bobo')
  if(isNaN(args[0])) return message.channel.send('Solo números salvo el signo que quieras usar \`(+, *, -, /, x, ~)\`')

  if(!signos.some(x => x.toLowerCase(message.content))) return message.channel.send('Tenés que colocar los signos \`(+, *, -, /, x, ~)\`')

  if(!args[2]) return message.channel.send('No te voy a sumar un solo número, no seas boludo')
  if(isNaN(args[2])) return message.channel.send('Solo números salvo el signo que quieras usar \`(+, *, -, /, x, ~)\`')

  let signo = args[1];
  if(signo === 'x'){
    signo = '*'
  }

  if(signo === '~'){
    signo = '/'
  }

  try {
  const resultado = eval(args[0]+signo+args[2]); 

  const calcula = new MessageEmbed()
  .setTitle('Calculadora')
  .setColor('PURPLE')
  .addField("Calculo", '```js\n'+args[0]+' '+signo+' '+args[2]+'```')
  .addField('Resultado', '```js\n'+await resultado+'```')
  

  return message.channel.send(calcula); 

  } catch (e) { 
  const err = new MessageEmbed()
  .setDescription('Oh demonios, ha ocurrido una falla dentro del sistema \n\n`'+e.message+'`') 
  .setColor('BLACK')
  return message.channel.send(err);
}
}

if(command === "ayudacalculadora"){
  const embed = new Discord.MessageEmbed()
  .setTitle("¿Como usar la calculadora?")
  .setDescription("Tenés todos estos signos:`*` `x` `-` `~` `/` `+`." + "Eliges el tipo de cálculo que quieras hacer dependiendo el signo y haces ese cálculo como lo harías en una calculadora común y corriente. **Ejemplo: 125 x 5** " + "Los signos `*  x` funcionan para multiplicar, `~  /` funcionan para dividir, `+` para sumar y `-` para restar")
  .setColor("PURPLE")

  message.channel.send(embed)
 }

 /// JUEGOS ///
 if(command === "8bola"){
  let mensaje = args.slice().join(" ")
  if(!mensaje) return message.channel.send("Haceme la consulta pa, no preguntaste nada")

  let respuestas = ["Yyyy mira, yo creo que no, pero si ", "Si amigo, si. ", "Es verdad pero te tenes que coger a tu vieja ", "En mi opinion, si","Es cierto","Es decididamente asi","Probablemente","Buen pronostico","Todo apunta a que si","Sin duda","Si","Si - definitivamente","Debes confiar en ello","Respuesta vaga, vuelve a intentarlo","Pregunta en otro momento","Sera mejor que no te lo diga ahora","No puedo predecirlo ahora","Concentrate y vuelve a preguntar","Puede ser","No cuentes con ello","Mi respuesta es no","Mis fuentes me dicen que no","Las perspectivas no son buenas","Muy dudoso"]

  const ball = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setFooter("Flaco dejate de joder con estas boludeces y anda a bañarte, negro sucio", client.user.avatarURL)
  .setTitle(":8ball: 8bola papa")
  .addField(`Mi respuesta es: **${respuestas [( Math.floor(Math.random() * 
    respuestas.length))]}**`, "Asi que vas bien")
  .setDescription(`A la pregunta de  **${mensaje}**, de **${message.author.username}**`)

   message.channel.send({embed : ball})
} 

if(command === "buscaminas"){
  const choices = ["||:zero:||", "||:one:||", "||:two:||", "||:three:||", "||:four:||", "||:five:||", "||:six:||", "||:seven:||", "||:eight:||","||:bomb:||"];
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const bomb = 9; 
  let bombas = 20; 
  
  let row = number[Math.floor(Math.random() * number.length)]; 
  let column = number[Math.floor(Math.random() * number.length)]; 
  
  var buscaminas=new Array(10); 

  for (let i = 0; i < 10; i++){
    buscaminas[i]=new Array(10); 
  }

  for (let i = 0; i<10; i++){
    for (let j = 0; j<10 ;j++){
      buscaminas[i][j] = 0;	
    }
  }
  while (bombas != 0) { 
    while(buscaminas[row][column]==9){ 
        row = number[Math.floor(Math.random() * number.length)]; 
        column = number[Math.floor(Math.random() * number.length)];
    }
  
      bombas = bombas-1;
      buscaminas[row][column] = 9;
      
     let iteri = 3; 

    for (let i = 0; i < iteri; i++) {
      let iterj = 3; 
      if (row == 0 && i == 0)
        i++; 
      if (row == 10 - 1 && i == 0)
        iteri--; 
      for (let j = 0; j < iterj; j++) {
        if (column == 0 && j == 0)
          j++; 
        if (column == 10 - 1 && j == 0)
          iterj--;
        if (i != 1 || j != 1)
          if (buscaminas[row + i - 1][column - 1 + j] != bomb) 
            buscaminas[row + i - 1][column - 1 + j]++;
      }
    }
      
    }

  for (let i = 0; i<10; i++){
    for (let j = 0; j<10;j++){
        buscaminas[i][j] = choices[buscaminas[i][j]];
    }
  }
  
  return message.channel.send(buscaminas);
}

/// ASCII /// 
if(command === "ascii" || command === "as"){

  const figlet = require("figlet")

  if(!args[0]) return message.reply("El texto papu?")
  if(args.join(" ") > 15) message.reply("Mas de 15 caracteres no podes mandar, disculpa")
  figlet(args.join(" "), (err, data) => message.channel.send("```" + data + "```"))

}

/// GATOS /// 

if(command === "tomate"){
  message.channel.send("https://fotos.subefotos.com/432596e519c589e6d343b73712f73c71o.jpg")
}

if(command === "ole"){
  message.channel.send("https://fotos.subefotos.com/93101e48069d85c511de31f076b75971o.jpg")
}

if(command === "badboy"){
  message.channel.send("https://cdn.discordapp.com/attachments/709481901789806623/794702418323046440/WhatsApp_Video_2020-12-26_at_19.30.41.gif")
}

if(command === "nitch"){
  message.channel.send("https://cdn.discordapp.com/attachments/709481901789806623/794742957999259678/WhatsApp_Image_2020-12-28_at_19.57.47.jpeg")
}

if(command === "momir"){
  message.channel.send("https://cdn.discordapp.com/attachments/709481901789806623/794761264240656404/unknown.png")
}

if(command === "jose"){
  message.channel.send("https://cdn.discordapp.com/attachments/709481901789806623/794992915810222100/Mexican-Cat.png")
}

if(command === "panko"){
  let panko = ["https://pbs.twimg.com/media/EnJ4GR8W8AIZgEQ.jpg", "https://pbs.twimg.com/profile_images/1311908786190327808/wtDTIuqm.jpg", "https://pbs.twimg.com/media/EqBTwPEXEAADo1b.jpg", "https://pbs.twimg.com/media/EnZxULSXEAIdD3J.jpg", "https://pbs.twimg.com/media/EnUZ7qXXIAMsTLC.jpg", "https://www.tiktok.com/api/img/?itemId=6846238257752116485&location=0", "https://preview.redd.it/pcxygnvdtae51.jpg?auto=webp&s=b14863841cfe8d13585583d21cc253058f6a8c72", "https://pbs.twimg.com/media/Ejqkp_xXcAcJ4RL.jpg:large", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbzm3k13dulJSVAiaGTHmjh7RHizUzuJmkw&usqp=CAU", "https://pbs.twimg.com/media/Ejsk0tNX0AEdABM.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFPlxV59q2dWGgoI4mDiFKn87o6NzHUTQxw&usqp=CAU", "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Ffatfatpankocat&psig=AOvVaw1-zJcvOF9qby8jxAiw0POf&ust=1610933173431000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiPj_Dnoe4CFQAAAAAdAAAAABBM", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPoxoXEYNTRQDApjboP3zLzi4a3Vo4AHymQ&usqp=CAU", "https://i.pinimg.com/236x/c0/38/7d/c0387dd99bdd99ee785490aa478e1330.jpg", "https://www.personality-database.com/profile_images/236947.png?id=146694", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFPlxV59q2dWGgoI4mDiFKn87o6NzHUTQxw&usqp=CAU", "https://pbs.twimg.com/media/Ep-q_YnXIAAfl67.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLOKt8-RVNQFOuXqCWeauW1iPWzDIwoe4tmw&usqp=CAU"]

  let randomPanko = panko[Math.floor(Math.random() * panko.length)];
  message.channel.send(randomPanko)
}

/// AYUDA SIMPBOT ///
if(command === "referido"){
  const embed = new Discord.MessageEmbed()
  .setTitle("Paginas que recomienda el Simp Bot para ganar dinero :D")
  .setColor("PURPLE")
  .setImage("https://memeviral.com.mx/wp-content/uploads/2020/10/imagendestacada.jpg")
  .addField("Honey Gain", "https://r.honeygain.me/JOACO86D6C")
  .addField("Free Skins", "https://freeskins.com/r/117919153143378951821")
  .addField("ySense", "https://www.ysense.com/?rb=83190337")
  .addField("Coinbase (compra y venta de cripto monedas)", "https://www.coinbase.com/join/estruc_h2")
  .addField("Idle Empire", "https://www.idle-empire.com?r=milton")
  .addField("Lety Shops (Sistema de Cashback)", "https://letyshops.com/ar/winwin?ww=16838433")
  .addField("Rappi", "https://rappi.app.link/refer-es-cs?af_adset=other")
  .addField("PedidosYa", "https://pedidosya.com/amigos/PY-SUMATE-ZEA1299")
  .addField("Binance (Compra y venta de cripto monedas con el sistema P2P)", "https://www.binance.com/es/register?ref=X4C6VD06")
  .addField("Key Drop", " https://key-drop.com?code=KTQODHZQ ")
  .addField("Compra el Point de Mercado Pago", "http://mpago.li/1vBSLQr")    
  .setTimestamp(new Date())
  .setFooter(`Power By Estruch`)

  message.channel.send(embed)
}

if(command === "nestorcvu"){
  message.channel.send("https://cdn.discordapp.com/attachments/707683426551201865/801297528431575050/pidiendo_monedas.png")
  message.channel.send("000000790020452699927")
}


if(command === "donaciones"){


  message.channel.send("Gracias!").then(m => {
    const embed = new Discord.MessageEmbed()
  .setTitle("Donaciones")
  .addField("Coinbase", "joacoetruuu@gmail.com")
  .addField("PayPal", "joacoetruuu@gmail.com")
  .addField("Mercado Pago", "joacoetruuu@gmail.com")
  .setImage("https://memeviral.com.mx/wp-content/uploads/2020/10/imagendestacada.jpg")
  .setColor("PURPLE")

  m.edit(embed)
  })
}

/// AYUDA ///
if(command === "ayuda"){
  const embed = new Discord.MessageEmbed()
  .setTitle("Simp Bot: Ayuda")
  .setDescription("Lista de comandos")
  .addField("Simps", "`!simp` `!preso`")
  .addField("Boludeces", "`!chiste` `!mimi` `!meme` `!cursed`")
  .addField("Utilidades", "`!svinfo` `!ping` `!say` `!md` `!borrar` `!jumbo` `!svicon` `!invitcaion` `!avatar` `!nitro`")
  .addField("Calculadora", "`!calculadora` `!ayudacalculadora`")
  .addField("Cotizaciones", "`!dolar` `!cripto` `!crypto`")
  .addField("Gatitos", "`!tomate` `!ole` `!panko` `!nitch` `!momir` `!jose`")
  .addField("Musica", "`!musica` para ver todos los comandos ")
  .addField("NSFW", "`!nsfw` en un canal nsfw para poder ver los comandos")
  .addField("Niveles", "`!rango` para ver tu nivel")
  .addField("Letra ASCII", "`!ascii` `!as`")
  .addField("Añadi al Simp Bot", "`!invitacion`")
  .addField("Informacion sobre el Simp Bot", "`!simpstats`")
  .addField("Si queres ayudar al Simp Bot", "`!referido` `!nestorcvu` `!donaciones`")
  .setImage("https://cdn.discordapp.com/attachments/709481901789806623/800113415694843915/SIMPBOTRETRO.png")
  .setColor("PURPLE")

  message.channel.send(embed)
}

});

client.on("message", async message => {
  if(message.author.bot) return
  if(message.channel.type === "dm") return;
  
  niveles.create(`${message.guild.id}.${message.author.id}`, {

    experiencia: 0,
    nivele: 1
  });

  let user = niveles.get(`${message.guild.id}.${message.author.id}`)
  user.experiencia += (Math.random() * 10) + 1;

  if(user.experiencia >= (5 * (user.nivele ^ 2) + 50 * user.nivele + 100)) {
    user.nivele += 1;
    message.reply("bien ahi! Subiste a nivel " + user.nivele)
  }
  user.save();

  if(!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

  const usuario = message.guild.members.cache.get(args[0]) || message.author

  if(command === "rango"){
    let user = niveles.get(`${message.guild.id}.${message.author.id}`)
    if(!args[0]) return message.reply("sos nivel " + user.nivele)
  }

});

client.login("NzcwMjYxMDE3ODIxMTg0MDIx.X5a_eQ.hxynVbTzufvACL4XJbWlzX5vE1c");