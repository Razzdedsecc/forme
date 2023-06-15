let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`Gapunya Agama Ya?, Minim salam Yang bener lah`)
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp
export default handler

