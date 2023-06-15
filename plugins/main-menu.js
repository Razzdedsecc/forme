// Hilih
"use strict"
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix: _p, command: _q}) => {
await m.reply(md)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan, premiumTime } = global.db.data.users[who]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(who)
//let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || 'No Bio'
let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact')
let math = max - xp
const tag = await conn.getName(m.sender)
const mot = pickRandom(["⌬", "⏣", "❐", "❑", "❇", "✡", "✯", "✨", "⛾", "⛐", "♨", "☫", "☘", "◳", "☣", "✎"])
const mn = `❏ ––––『 𝐌𝐄𝐍𝐔 𝐀𝐖𝐀𝐋 』–––– ❏`
const mii =`
Hai bro @${m.sender.split`@`[0]} 👋, ${ucapp()},
Ada Yang Bisa Bot Bantu?, Ketik #listmenu Untuk Melihat Fitur Yang Di Sediakan Oleh Bot, Jika Bot Tidak Merespon, Mungkin Fitur Error Atau Bot Restart, Harap Di Maklum 😁, Semoga Hari Mu Menyenangkan 😁

    ⏤͟͟͞͞★ 𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑 ꗄ➺
${mot} Nama: ${tag}
${mot} Tags: @${m.sender.split`@`[0]}
${mot} Premium: ${premiumTime > 0 ? 'Premium' : 'Free user'}
${mot} Terdaftar: ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'}

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
              『 *${tag}* 』

${wm}

${botdate}
`.trim()
let buttons = [
{buttonId: `.? all`, buttonText: {displayText: `𝐀ʟʟ 𝐌ᴇɴᴜ`}, type: 1},
{ buttonId: `.menulist`, buttonText: { displayText: `𝐋ɪsᴛ 𝐌ᴇɴᴜ`}, type: 1},
{ buttonId: `.donasi`, buttonText: { displayText: `𝐃ᴏɴᴀsɪ`}, type: 1}
]

let buttonMessage = {
document: { url: "https://wa.me/6289668942278" },
mimetype: doc,
jpegThumbnail: fp,
mentions: '',
fileName: ucapan,
fileLength: fsizedoc,
pageCount: fpagedoc,
caption: mn,
footer: mii,
buttons: buttons,
headerType: 4,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaUrl: sig, 
mediaType: "VIDEO",
description: ``,
title: `👋 Hay Kak :> ${name}`,
body: '⫹⫺ 𝐑𝐏𝐆 𝐁𝐎𝐓 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏',
thumbnail: fp,
sourceUrl: ''
}}
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]  
}
function ucapp() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat Malam"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang"
    }
    if (time >= 15) {
        res = "Selamat Sore"
    }
    if (time >= 18) {
        res = "Selamat Malam"
    }
    return res
}
