const Discord = require('discord.js');

module.exports = {
	name: 'test',
	aliases: ['test'],
	description: 'See if the bot is alive!',
	usage: '<>',
	cooldown: 2,
	ownerOnly: false,
	guildOnly: false,
	async run(client, message, args) {
		message.reply('I am alive!')
	},
};