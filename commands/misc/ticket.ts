const Discord9090 = require("discord.js");
module.exports = {
  name: "ticket",
  execute(msg) {
    const channel = msg.client.channels.cache.find(
      (channel) => channel.id === `698594785803501629`
    );
    var ticket = msg.content.substr(7);

    if (ticket == "") {
      msg.channel.send(`**Error:** Invalid ticket!`);
    } else {
      msg.delete();
      const trimmedTicket = ticket.trim();
      //embed start
      const exampleEmbed = new Discord9090.MessageEmbed()
        .setAuthor(`New Ticket`)
        // .setAuthor(`You've got Mail!`, `https://chr1s.dev/assets/mailbox.png`)
        .setColor("#00FF86")
        .setFooter(`From ${msg.author.tag}`)
        .setDescription(`${trimmedTicket}`);
      channel.send(exampleEmbed);
      //embed end

      msg.channel.send(`Your message was sent! `);
    }
  },
};

//hell, omg
