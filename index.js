const TelegramBot = require('node-telegram-bot-api');
const token = '5792347895:AAFr_P4cgjFRYpnZaydqCOFMrjVT713G27E';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Main menu keyboard 

   const MainMenu = {
      reply_markup: JSON.stringify({
         keyboard: [
            [
               {
                  text:"🛍 Buyurtma berish"
               }
            ],
            [
               {
                  text:"📞 Biz bilan bog'laning"
               },
               {
                  text:"⚙️ Sozlamalar"
               },
               {
                  text:"🏠 Mening manzillarim"
               }
            ]
         ],
         resize_keyboard:true
      })
   }

  const Products = {
      reply_markup: JSON.stringify({
         keyboard: [
            [
               {
                  text:"⬅️ Orqaga"
               },
               {
                  text:"📥 Savat"
               }
            ],
            [
               {
                  text:"Макси бокс"
               },
               {
                  text:"🌯Лаваш"
               }
            ],
            [
               {
                  text:"🥪Клаб-сэндвич"
               },
               {
                  text:"🌮Шаурма"
               }
            ],
            [
               {
                  text:"🍔Бургеры"
               },
               {
                  text:"🥤Напитки"
               }
            ]
            
         ],
         resize_keyboard:true
      })
   }


   const MaxBoxProduct = {
      reply_markup: JSON.stringify({
         keyboard: [
            [
               {
                  text:"Salom"
               }
            ]
         ],
         resize_keyboard:true
      })
   }

   const MaxBox = {
      reply_markup:JSON.stringify({
         keyboard: [
            [
               {
                  text:"Макси бокс"
               }
            ]
         ]
      })
   }

 

   if(msg.text === '/start' || msg.text === "⬅️ Orqaga") {
      bot.sendMessage(chatId,"Asosiy menu",MainMenu)
   }else if (msg.text === '🛍 Buyurtma berish') {
      bot.sendMessage(chatId,"Buyurtmangizni davom ettiring",Products)
   } 


});



bot.on("polling_error", console.log);