const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');

const botToken = process.env.BOT_TOKEN;

if (!botToken) {
  console.error('Please provide a BOT_TOKEN environment variable.');
  process.exit(1);
}

const bot = new Telegraf(botToken);

const loadPlugins = (bot) => {
  const pluginsPath = path.join(__dirname, 'plugins');

  fs.readdirSync(pluginsPath).forEach((file) => {
    const pluginPath = path.join(pluginsPath, file);
    const plugin = require(pluginPath);

    plugin(bot);
  });
};

loadPlugins(bot);

bot.launch();
