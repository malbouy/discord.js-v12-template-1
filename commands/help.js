const Discord = require('discord.js');

module.exports = {
	name: 'help',
	aliases: ['help', 'commands', 'cmds'],
	description: "Get a list of commands",
	usage: '<>',
	ownerOnly: false,
	guildOnly: false,
	cooldown: 3,
	run(client, message, args) {
		color = message.color;
		function sendHelp() {
			cmds = client.commands.map(x => x.name.toString()).join(', ');
			helpEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setAuthor('Command Help', client.user.avatarURL)
			.setDescription(`Here's a list of all the commands: ${cmds}\n\nFor more information on a command, use \`${message.content.charAt(0)}help <comand name>\``);
			message.channel.send({ embed: helpEmbed });
		};
		if (!args.length) return sendHelp();
		commandName = args[0].toLowerCase();
		const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		let embed = new Discord.MessageEmbed()
		.setColor(color)
		.setTitle(`Command: ${command.name}`)
		.addField('Description', command.description || "None set")
		.addField('Expected Usage', command.usage || "none set", true)
		.addField('Guild Only', command.guildOnly == true ? "Yes" : "No", true)
		.addField('Owner Only', command.ownerOnly == true ? "Yes" : "No", true)
		message.channel.send(embed);
	},
};