import { tiktokdl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', 
`              *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
*Nickname:* ${nickname}
*Description:* ${description}

_©Yui - Chan🍭_
`.trim(), m)
}
handler.help = ['tiktok12', 'tiktok12', 'tiktokdl12'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiki(toko)?(toko)?(dl)?)$/i

export default handler
