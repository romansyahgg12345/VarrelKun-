import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
	let url = 'https://telegra.ph/file/4c87058d1b9fbb8f18c44.png'
	const text = ` *ᴄᴜꜱᴛᴏᴍ ᴅᴇꜱɪɢɴ*
═┅══┅══┅═
• PFP (Profile Picture)
• Twitter Header
• Youtube Banner
• Wallpaper Dekstop/Mobile
═┅══┅══┅═
*ᴄᴏɴᴛᴀᴄᴛ ᴜꜱ*
╰►  • wa.me/6287855823556
         • instagram.com/_lucxfvr `.trim()
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, wm, text, url, [['Menu', '.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: 'https://wa.me/p/5291854994230186/6287855823556',
                        mediaType: 2,
                        description: 'anu',
                        title: '𝙆𝙡𝙞𝙠 𝘿𝙞𝙨𝙞𝙣𝙞',
                        body: 'Tap untuk melihat list',          previewType: 1,
                        thumbnail: fs.readFileSync("./darkness.jpg"),
                        sourceUrl: 'https://wa.me/c/6287855823556'
                      }}
})
}

handler.command = /^store$/i
export default handler
