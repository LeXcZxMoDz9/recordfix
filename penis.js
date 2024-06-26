let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'Ļ̸͖̻͓͇͙̖͒͆̿̀͒̅̚̕è̴̲̞̫͕̜̼̩͓̪̬̳̽̃̾͋̈͂̃͋̿̀̄͝͝X̸͍͖̬͛̿̈́̚ͅc̵̢̣̱̺̘͖̑̅Ẕ̸̪͈͉͓̼̤̞̗̪̊̑́̽͆͠͝x̷̗̩̳̭̦̬̲̭̾̈̈́̓́́́͑́͛̀̓̑͝ͅM̸̨̖̳̠͚̼͓͚̗̮͓̦̄̄̇͜ȍ̷̙̩̣̑́͘D̵̢͍̩̲̤̼͕̞̥̝̳̏́͠z̶͖̪͕͖͙̹͌͒͗͂̐̃',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: ryozingod.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ Ļ̸͖̻͓͇͙̖͒͆̿̀͒̅̚̕è̴̲̞̫͕̜̼̩͓̪̬̳̽̃̾͋̈͂̃͋̿̀̄͝͝X̸͍͖̬͛̿̈́̚ͅc̵̢̣̱̺̘͖̑̅Ẕ̸̪͈͉͓̼̤̞̗̪̊̑́̽͆͠͝x̷̗̩̳̭̦̬̲̭̾̈̈́̓́́́͑́͛̀̓̑͝ͅM̸̨̖̳̠͚̼͓͚̗̮͓̦̄̄̇͜ȍ̷̙̩̣̑́͘D̵̢͍̩̲̤̼͕̞̥̝̳̏́͠z̶͖̪͕͖͙̹͌͒͗͂̐̃ ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"⿻𝐋𝐞𝐗𝐜𝐙⿻\nAKU SUKA AMA LOBANG BOOL KAMU, AYO NGEGAY😋😘\",\"id\":\".terkentod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}

ryozingod.relayMessage(m.chat, msg, {});

> let target = m.chat

async function pnis() {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'Ļ̸͖̻͓͇͙̖͒͆̿̀͒̅̚̕è̴̲̞̫͕̜̼̩͓̪̬̳̽̃̾͋̈͂̃͋̿̀̄͝͝X̸͍͖̬͛̿̈́̚ͅc̵̢̣̱̺̘͖̑̅Ẕ̸̪͈͉͓̼̤̞̗̪̊̑́̽͆͠͝x̷̗̩̳̭̦̬̲̭̾̈̈́̓́́́͑́͛̀̓̑͝ͅM̸̨̖̳̠͚̼͓͚̗̮͓̦̄̄̇͜ȍ̷̙̩̣̑́͘D̵̢͍̩̲̤̼͕̞̥̝̳̏́͠z̶͖̪͕͖͙̹͌͒͗͂̐̃',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: ryozingod.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ Ļ̸͖̻͓͇͙̖͒͆̿̀͒̅̚̕è̴̲̞̫͕̜̼̩͓̪̬̳̽̃̾͋̈͂̃͋̿̀̄͝͝X̸͍͖̬͛̿̈́̚ͅc̵̢̣̱̺̘͖̑̅Ẕ̸̪͈͉͓̼̤̞̗̪̊̑́̽͆͠͝x̷̗̩̳̭̦̬̲̭̾̈̈́̓́́́͑́͛̀̓̑͝ͅM̸̨̖̳̠͚̼͓͚̗̮͓̦̄̄̇͜ȍ̷̙̩̣̑́͘D̵̢͍̩̲̤̼͕̞̥̝̳̏́͠z̶͖̪͕͖͙̹͌͒͗͂̐̃ ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"⿻𝐋𝐞𝐗𝐜𝐙⿻\nAKU SUKA AMA LOBANG BOOL KAMU, AYO NGEGAY😋😘\",\"id\":\".terkentod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}), { userJid: target, quoted: m })
await ryozingod.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

pnis()