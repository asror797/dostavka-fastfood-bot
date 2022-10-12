const TelegramBot = require('node-telegram-bot-api');
const token = '5792347895:AAFr_P4cgjFRYpnZaydqCOFMrjVT713G27E';
let fetch = import('node-fetch')
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


   const InlineButton = {
      reply_markup: {
         inline_keyboard: [
            [
               {
                  text:"Inline",
                  callback_data:"callback"
               }
            ]
         ]
      }
   }

 

   if(msg.text === '/start' || msg.text === "⬅️ Orqaga") {

      fetch('http://localhost:9000/new',{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body: JSON.stringify({
            fullname:msg.chat.first_name,
            telegramid:chatId,
            phonenumber:"",
            location:""
         })
      })
         .then(res => res.json())
         .then(data => {
            bot.sendMessage(chatId,"Asosiy menu",MainMenu)
            console.log(data)
         })
         .catch(err => {
            console.log(err)
            bot.sendMessage(chatId,"Error")
         })
   }else if (msg.text === '🛍 Buyurtma berish') {
      bot.sendMessage(chatId,"Buyurtmangizni davom ettiring",Products)
   } 

   if(msg.text === 'inline') {
      bot.sendMessage(chatId,"Savat",InlineButton)
   }


});


bot.on("callback_query", (callbackQuery) => {
   const msg = callbackQuery.message;
   console.log(callbackQuery)
   bot.answerCallbackQuery(callbackQuery.id)
       .then(() => bot.sendMessage(msg.chat.id, "You clicked!"));
});



bot.on("polling_error", console.log);