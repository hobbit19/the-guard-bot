'use strict';

const Telegraf = require('telegraf');
const config = require('../config.json');

const bot = new Telegraf(config.token);

if (process.env.NODE_ENV === 'development') {
	bot.state.offset = -1;
}

module.exports = bot;


