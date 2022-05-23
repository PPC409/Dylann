 const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "OTMwNTQ1MzQ4NTY3NTMxNTMx.Yd3b4w.DEChiIMC17Zz2m3PYno-_Wxzyg4",
prefix: ["d.","$getServerVar[prefix]"],
intents: "all",
mobile: true,
autoUpdate: true,
})

bot.onMessage({
    guildOnly: true,
    respondToBots: false,
})

bot.readyCommand({
    channel: '910838346350215178',
    code: `
$title[1;Ready]
$description[1;
**
╭─━━━━━━━━━━━━━━─╮
      Client: $userTag[$clientID]
      Ping: $ping ms
      Bot Creator: $username[$botOwnerID]#$discriminator[$botOwnerID]
      Commands loaded: $commandsCount
      Server Count: $serverCount
╰─━━━━━━━━━━━━━━─╯
**
]
$color[1;GREEN]
    $log[
    ╭─━━━━━━━━━━━━━━━━━━━━━━━━━━─╮
      Client: $userTag[$clientID]
      Ping: $ping ms
      Bot Creator: $username[$botOwnerID]#$discriminator[$botOwnerID]
      Commands loaded: $commandsCount
      Server Count: $serverCount
    ╰─━━━━━━━━━━━━━━━━━━━━━━━━━━─╯
    ]`
  })

//Command Handler loader

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 

// Status
bot.status({
  text: "SpacioDev",
  type: "PLAYING",
  status: "dnd",
  time: 2
})
bot.status({
  text: "$allMembersCount membres",
  type: "Watching",
  status: "dnd",
  time: 2
})
bot.status({
  text: "d.help dans $serverCount serveurs.",
  type: "PLAYING",
  status: "dnd",
  time: 2
})
bot.status({
  text: "https://ppc409.github.io/Dylann",
  type: "WATCHING",
  status: "dnd",
  time: 2
})

// Variables 

bot.variables ({
    prefix: "d.",
    color: "#f85f5f",
    footer: "Dylann - Beta - Testing",
// Permissions
    premium: "false",
    admin: "false",
    dev: "false",
// Salons
    logs: "",
    welcomer: "",
    leaver: "",
    suggest: "914187639576490014",
// Moderation 
    vanish: "true",
    warn: "",
    warner: "",
    reason: "",
// Welcome
    title: "Bienvenue !",
    description: "$username vient de rejoindre $serverName",
    title2: "Aurevoir 😐",
    description2: "$username vient de quitter $servername",
})

bot.onInteractionCreate()