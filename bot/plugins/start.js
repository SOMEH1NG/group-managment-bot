module.exports = (bot) => {
  bot.command('start', (ctx) => {
    ctx.reply('Im group-managment-bot! Type /help for a list of commands.');
  });
};
