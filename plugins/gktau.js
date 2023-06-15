//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya 𝔻𝕖𝕕𝕊𝕖𝕔 ~ 𝔹𝕠𝕥𝕫-MD Jangan Lupa Suscribe Youtube 𝔻𝕖𝕕𝕊𝕖𝕔 ~ 𝔹𝕠𝕥𝕫-MD Official\n\nAtau bisa klik link Youtube : https://youtube.com/@Razzakaria231 ', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['Razz-Dedsec']

handler.admin = false
handler.group = false

export default handler
