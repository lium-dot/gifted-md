// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐5 𝗔𝗪𝗔𝗜𝗦 𝐌𝐃 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pairing.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ  𝗔𝗪𝗔𝗜𝗦 𝐌𝐃 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.myDb = "https://giftedmd.giftedtech.web.id"; // DO NOT Change this...
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://cdn.giftedtech.web.id";
global.giftedRepo = "https://github.com/mauricegift/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mauricegift/gifted-md";

module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~H4sIAAAAAAAAA5VU2bKiSBD9l3rFGFlkM+JGDIKKC4qKKE7MQwklFLtFIXAn/PcJvH27+2Gm585bLRmZJ0+ek3+BvMAVWqEOjP8CJcEPSFF/pF2JwBhM6tsNETAAAaQQjAGzOomL+X2WNPN96Uji3bGi05x5v5nSgRecZqiwxInalkuOb+A5AGV9TbH/i4TzA1tk7+JEgA88YznGqj0uZAOhvpSrgDOO15C9XpPjVT0Xb+DZZ4SY4DyclhHKEIHpCnU2xORr8KcTzFjJwfXs4U7lEEFK4+yhYtCRwmdXdirN9zOxgfRwCr8Gn00SVy6WSp7vCofm6nuWGyGveUjcN8KuiwrjrPlLXGTN4gN+hcMcBYsA5RTT7su861PJfoTVzZ/g/J4XtLRSrM2PFznLivftTZk9jtGZjiL7VHwN+Mm6M0o5XDdboR6eFpWU6RLZjqwsUzLxwsz357g77/j00R5/Bm6TT60k/4d3uDLMhXLexY13GZJtx8qWJzsr2NzPtdalSTnnhruK3zLsF2WjS0MvdTX+PV2JheCnUm23XBnVtrudRgEbMgFrHJbtGsfaD/iQ1uRXKKNgy864oRquz6SN563BUadg5xOh07mZ18Yby1vHd2NNsriZMtHt2s20ND7LnFkaUr5NxLVYnpxOu7cI7hez1HHFRxS+vTpKULcIwJh7DgBBIa4ogRQX+etN4gcABo8D8gmiL3rBu+2KjnpnF46UFIa+ybd32IimWlaj+ag5BIYriFJFpDtXvYEBKEnho6pCgYkrWpDOQlUFQ1SB8R9/DkCOWvoxuL6cwA3ADZOKHvO6TAsYfE718xP6flHn9NDlvt4fEAFj9sczohTnYdXzWOeQ+BF+ID2CtALjG0wr9L1DRFAAxpTU6Ltr9SLoiZdYTjKVCw8GIHsNBAdgDFRe4BR1pPKqKo4F7vfqt6ZPC8vytxxRMADpK4zjVIVVBIXjFJ4T2T6y/3h+R9gnDBCFOK16pdiPC8HNrqlM2jSeZ+iattK0nrXPjj6l8UF9J+G96xpwI0+ZzeRyYuuVpyGfN8QRcaRwZRN5svdy0xGUf0oCxmCJTmhZFrrgXbKUTVKp7HRRbTdbmln2PoiM42If3yw+1iBtrUOgmetQ3ydL6FaMLrdUWLXpbFQ2O3rJqHk0Z8hTJ81bXy1AD+yjn4uNHtNNIM1OcJM+6ouW8dUanUb3g9PV3G3U+TIbdxdxLeylark5doEoks4nzNV1Lc8MmjB8XGjNyxNbka25vETyYVWG2odoX6ZJvy0r/JJTP6v+esPo5f0c9hP879l9AO8lxj4HP+X4tk3+xZETvy4S193xMWrteHdy6RpnmplvQgatWKbQY4lpjqdly6pD8Hz+OQBlCumtIFm/dPKAFDgAA0CKutfsIr8Vv9opk8VC+2bXFFZU++EDB2eoojArwZiTRV7lJE5mP6JsUpQmrCIwBsJevQgqeP4NFz9qfFUHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || true, // make true to use antidelete 
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💜,💛,❤️,🤍,🖤,💙", //Input Yours Custom...Can be One Emoji or Multiple Emojis
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✨🫀!", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923189492995", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || " 𝗔𝗪𝗔𝗜𝗦 𝐌𝐃 𝐕𝟓", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || " 𝗔𝗪𝗔𝗜𝗦 𝐌𝐃 𝐕𝟓", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💜", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || " 𝗔𝗪𝗔𝗜𝗦 𝐌𝐃 𝐕𝟓", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/rin5a8.jpeg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Make the heart that never hurts",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "null", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
