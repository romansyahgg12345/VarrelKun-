let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `๐๐ข๐๐ก ๐๐ ๐๐ฅ๐จ๐ฃ ๐ข๐๐๐๐๐๐๐ ๐๐ข๐ง*\n\n\nโโโใ Dแดษด'แด าแดสษขแดแด Dแดษดแดแดษชแดษด ใโโโ`,
	rows: [
	    {title: '๐ โบ Group Pian BOT', description: "Group Utama Pian BOT", rowId:".gcbot"},
        {title: '๐ โบ Owner', description: "Creator Pian BOT >ฯ<", rowId:".owner"},
        {title: '๐งฟ โบ Info Pian BOT', description: "Info Pian BOT >ฯ<", rowId:".info"},
        {title: '๐ฎ โบ Donasi', description: "Donasi Untuk siJEMBOT โงโฝโฆ", rowId:".donasi"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "๐ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler