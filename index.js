const TelegramBot = require('node-telegram-bot-api');
const token = '5617632676:AAHSSTgKmdvAJux5BsxHEYAV6RM2e0GlYis';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if(msg.text == '/start') {

   fetch('http://localhost:9000/new',{
      method:"POST",
      headers:{
         'Content-Type':'appplication/json'
      },
      body:JSON.stringify({
         telegramid:msg.chat.id,
         fullname:msg.chat.first_name,
      })
   })
      .then(res => res.json())
      .then(data => {
         console.log(data)
      })
      .catch(err => {
         console.log(err)
      })
   }

   

   bot.sendMessage(chatId,'salom')

});

bot.on("polling_error", console.log);