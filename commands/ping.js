async function pingCommand(sock, from, msg) {
    const start = Date.now();
    const { key } = await sock.sendMessage(from, { text: 'Testing Speed...' }, { quoted: msg });
    const end = Date.now();
    await sock.sendMessage(from, { text: `⚡ *Response Speed ༺🔥༻ 𝐋𝐄𝐆𝐄𝐍𝐃 𝐀𝐌𝐌𝐀𝐑 ༺🔥༻:* ${end - start}ms`, edit: key });
}

module.exports = pingCommand;
