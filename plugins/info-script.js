//Credits Jangan Dihapus
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `Mau Nyumri SC Bot Ya Bang :v\nDosa taukk wkwkwk\n\nMending Sewa Bot Sini\n*https://wa.me/p/5533146900058138/6281364444859*`
let wibu = `https://api.zacros.my.id/randomimg/waifu` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://instagram.com/___oxoxo.20",
    mediaType: "VIDEO",
    description: "https://instagram.com/J___oxoxo.20", 
    title: 'Knct-Dev',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
