var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Beste!",
assets : {
large_image : "pb1",
large_text : "Test" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Earth Bot" , url : "https://discord.com/oauth2/authorize?client_id=899297729228963901&permissions=173949651008&scope=bot"}, {label : "Discord Server" , url : "https://discord.gg/erde"}]
}
})
})
client.login({ clientId : "" }).catch(console.error);