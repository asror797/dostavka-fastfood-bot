const TelegramBot = require('node-telegram-bot-api');
const token = '5617632676:AAHSSTgKmdvAJux5BsxHEYAV6RM2e0GlYis';

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
                  text:"Product 1"
               },
               {
                  text:"Product 2"
               }
            ],
            [
               {
                  text:"Product 1"
               },
               {
                  text:"Product 2"
               }
            ],
            [
               {
                  text:"Product 1"
               },
               {
                  text:"⬅️ Orqaga"
               }
            ]
         ],
         resize_keyboard:true
      })
   }

 

   if(msg.text === '/start' || msg.text === "⬅️ Orqaga") {
      bot.sendMessage(chatId,"Asosiy menu",MainMenu)
   }else if (msg.text === '🛍 Buyurtma berish') {
      bot.sendMessage(chatId,"Buyurtmangizni davom ettiring",Products)
   } 


});

bot.on("polling_error", console.log);