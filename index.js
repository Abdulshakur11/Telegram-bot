const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");
const path = require("path");

const bot = new TelegramBot("5024413455:AAHoPoxvou9kR7MOcqMUkwrWICQ_xru4fHo", {
	polling: true,
});

bot.onText(/\/start/, (message) => {
	const chatId = message.chat.id;

  bot.deleteMessage(chatId, message.message_id)

	bot.sendMessage(chatId,	`👋 Assalomu alaykum ${message.from.first_name}	 ➡️ Kerakli bo'limni tanlang!`,{
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "Suralar",
              callback_data: "sura"
						}
					],
          [
            {
							text: "Oyatlar",
              callback_data: "oyatlar"
						}
          ]
				],
			},
		}
	);
});


bot.on('callback_query', msg => {
  const chatId = msg.message.chat.id
	bot.sendChatAction(chatId, "typing");
  if(msg.data === "sura") {
    bot.deleteMessage(chatId, msg.message.message_id);

	  bot.sendMessage(chatId, `
	   109. Al-Kaafiroon (سُورَةُ الكَافِرُونَ)
	   110. An-Nasr (سُورَةُ النَّصۡرِ)
	   111. Al-Masad (سُورَةُ المَسَدِ)
	   112. Al-Ikhlaas (سُورَةُ الإِخۡلَاصِ)
	   113. Al-Falaq (سُورَةُ الفَلَقِ)
	   114. An-Naas (سُورَةُ النَّاسِ)
	  `,
	   {
	    reply_markup: {
	      inline_keyboard: [
	        [
	          {
	            text: '109',
	            callback_data: "109"
	          },
	          {
	            text: '110',
	            callback_data: "110"
	          },
	          {
	            text: '111',
	            callback_data: "111"
	          },
	        ],
	        [
	          {
	            text: '112',
	            callback_data: "112"
	          },
	          {
	            text: '113',
	            callback_data: "113"
	          },
	          {
	            text: '114',
	            callback_data: "114"
	          },
	        ],
          [
            {
              text: "Orqaga",
              callback_data: "back"
            }
          ]
	      ]

	    }
	  })
	};

  if (msg.data === "back") {
    bot.deleteMessage(chatId, msg.message.message_id);

    bot.sendMessage(chatId, "➡️ Kerakli bo'limni tanlang!", {
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: "Suralar",
              callback_data: "sura"
						},
            {
							text: "Oyatlar",
              callback_data: "oyatlar"
						},
					],
				],
			},
		}
    )
  }

	if(msg.data == "oyatlar") {
		bot.answerCallbackQuery(msg.id, {
			text: "Oyatlar hali tayyor emas",
			show_alert: true
		})
	}

	if(msg.data === '109') {
		bot.answerCallbackQuery(msg.id);
		const sura = fs.readFileSync(path.resolve(__dirname, "./model/data.json"));
		const allSura = JSON.parse(sura);

	 const foundSura = allSura.find(e => e.sura_number == msg.data);
		bot.sendAudio(chatId, foundSura.sura_audio, {
			parse_mode: "HTML",
			title: `${foundSura.sura_name}`, 
			caption: `<strong>Nomi:</strong> ${foundSura.sura_name}`
		});
		
	} else if(msg.data === '110') {
		bot.answerCallbackQuery(msg.id);
		const sura = fs.readFileSync(path.resolve(__dirname, "./model/data.json"));
		const allSura = JSON.parse(sura);
		
		bot.sendChatAction(chatId, "record_voice");
		
	  const foundSura = allSura.find(e => e.sura_number == msg.data);
		bot.sendAudio(chatId, foundSura.sura_audio, {
			parse_mode: "HTML",
			title: `${foundSura.sura_name}`, 
			caption: `<strong>Nomi:</strong> ${foundSura.sura_name}`
		});

	} else if(msg.data === '111') {
		bot.answerCallbackQuery(msg.id);
		const sura = fs.readFileSync(path.resolve(__dirname, "./model/data.json"));
		const allSura = JSON.parse(sura);
		
		bot.sendChatAction(chatId, "record_voice");
		
	  const foundSura = allSura.find(e => e.sura_number == msg.data);
		bot.sendAudio(chatId, foundSura.sura_audio, {
			parse_mode: "HTML",
			title: `${foundSura.sura_name}`, 
			caption: `<strong>Nomi:</strong> ${foundSura.sura_name}`
		});

	} else if(msg.data === '112') {
		bot.answerCallbackQuery(msg.id);
		const sura = fs.readFileSync(path.resolve(__dirname, "./model/data.json"));
		const allSura = JSON.parse(sura);
		
		bot.sendChatAction(chatId, "record_voice");
		
	  const foundSura = allSura.find(e => e.sura_number == msg.data);
		bot.sendAudio(chatId, foundSura.sura_audio, {
			parse_mode: "HTML",
			title: `${foundSura.sura_name}`, 
			caption: `<strong>Nomi:</strong> ${foundSura.sura_name}`
		});

	} else if(msg.data === '113') {
		bot.answerCallbackQuery(msg.id);
		const sura = fs.readFileSync(path.resolve(__dirname, "./model/data.json"));
		const allSura = JSON.parse(sura);
		
		bot.sendChatAction(chatId, "record_voice");
		
	  const foundSura = allSura.find(e => e.sura_number == msg.data);
		bot.sendAudio(chatId, foundSura.sura_audio, {
			parse_mode: "HTML",
			title: `${foundSura.sura_name}`, 
			caption: `<strong>Nomi:</strong> ${foundSura.sura_name}`
		});

	} else if(msg.data === '114') {
		bot.answerCallbackQuery(msg.id);
		const sura = fs.readFileSync(path.resolve(__dirname, "./model/data.json"));
		const allSura = JSON.parse(sura);
		
		bot.sendChatAction(chatId, "record_voice");
		
	  const foundSura = allSura.find(e => e.sura_number == msg.data);
		bot.sendAudio(chatId, foundSura.sura_audio, {
			parse_mode: "HTML",
			title: `${foundSura.sura_name}`, 
			caption: `<strong>Nomi:</strong> ${foundSura.sura_name}`
		})
	} 

}) 


 
bot.on('message', msg => {
  const chatId = msg.chat.id;

	if(msg.photo || msg.audio || msg.video || msg.voice) {
		bot.deleteMessage(chatId, msg.message_id)
		bot.sendMessage(chatId, "Bu botga rasm video va audio tashlash mumkin emas 🛑")
	}
})
