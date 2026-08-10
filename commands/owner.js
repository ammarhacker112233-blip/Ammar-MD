const settings = require('../settings');

async function ownerCommand(sock, from, msg) {
    const ownerText = `👤 *BOT OWNER:* ${settings.ownerName}\n` +༺🔥༻ 𝐋𝐄𝐆𝐄𝐍𝐃 𝐀𝐌𝐌𝐀𝐑 ༺🔥༻
                    `📱 *NUMBER:* ${settings.ownerNumber}\n` +93770909827
                    `🔗 *OFFICIAL WHATSAPP CHANNEL:*\n` +
                    `> *https://whatsapp.com/channel/0029Vb8Ykk447XeIHmONgh2Y*`;
    await sock.sendMessage(from, { text: ownerText }, { quoted: msg });
}

module.exports = ownerCommand;
