const fs = require('fs')

//===========================//

const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString('id')

//===========================//

//General Settings 
global.apikey = 'ptla_l3SVj9iX4YC5LjbnhfF0OhCoIg5LGZzEh1xHUnCsZWz' //Ganti pake apikey panel lu
global.capikey = 'ptlc_FOmwFlI4Nez07Wjg29fOrc9eOdkNTl93XiTKu3FFBxb' //Ganti Pake Capikey Panel Lu
global.domain = 'https://punya.lexcz.my.id'
global.eggsnya = '15' //Ganti Pake Eggs Panel Lu
global.location = '1' //Ganti Pake Location Panel Lu

//===========================//

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['6287743212449','6289526135199','6285825579346']
global.ownMain = '6287743212449','6289526135199','6285825579346'
global.NamaOwner = 'LeXcZ' //gausah diganti 
global.sessionName = 'lexcz'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'LeXcZ' //ganti aj klo mau
global.author = 'LeXcZ' //ganti aj klo mau
global.packname = 'LeXcZ' //ganti aj klo mau
global.yt = 'https://youtube.com/@LexczXModz' //gausah diganti

//===========================//

global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`
 
//===========================//

global.country = `62`
global.system = {
gmail: `lexx01212@gmail.com`,
}

//===========================//

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
menuh: '』––––––',
menub: '┊☃︎ ',
menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

//===========================//

   //Respon
global.mess = { // bagian ini gausah diganti 
 ingroup: 'Khusus Group Bego Bener Dah🗿.',
 admin: 'Khusus All Admin Gc Bego🗿.',
 owner: 'Kamu Bukan Owner Kalau Mau Jadi Owner Sepong Kontol Developer Dulu🗿.',
 premium: 'Kamu Bukan Premium Kalau Mau Premium Cium Owner Dulu🗿.',
 seller: 'Fitur Ini Buat Reseller Dan Owner Doang🗿.',
 usingsetpp: `Kamu Siapa Suruh" Aku?`,
 wait: '*Waiting for processing 🗿🚬*',
 success: 'Success Bang 🗿🚬',
 bugrespon: `Prosess....🗿🚬`
}

//===========================//

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})