let fs = require("fs")
let handler = async(m, { conn, args, text, usedPrefix: _p, usedPrefix, command }) => {
let vn = './videos/entrada.mp4'
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'WhatsApp Bot Oficial', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  
conn.sendButton(m.chat, `*Hola soy DaneryBot, como te puedo ayudar?*`, '©Danery baez  - Bot', '𝙼𝙴𝙽𝚄 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂', `${usedPrefix}menu`, 'conversation', { sendEphemeral: true, quoted: estilo })
await conn.sendFile(m.chat, vn, 'entrada.mp4', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: estiloaudio })
}
handler.command = /^(epico)$/epico
module.exports = handler
