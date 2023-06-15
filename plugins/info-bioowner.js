// Hilih

let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}`
let biooo =`${htjava} *💌 Nama* : Razz
${htjava} *♂️ Gender* : Pria
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : Tempat Gorontalo
${htjava} *🎨 Umur* : PRIVATE
${htjava} *🧮 Kelas* : 99
${htjava} *🧩 Hobby* : Ngoding
${htjava} *💬 Sifat* : ASIK DAH KALAU DAH KENAL
${htjava} *🗺️ Tinggal* : Rumah
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *💌 TY:* ${syt}
•·––––––––––––––––––––––––––·•
`
await conn.sendButton(m.chat, teksbio, biooo, ppown, [["Sewa Bot", "/sewa"], ["Menu", "/menu"]], m)
}

handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bio|ownerbio|bioowner)$/i

export default handler
