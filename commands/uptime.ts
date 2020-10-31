module.exports = {
    name: "uptime",
    execute(msg) {

        function millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            let seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
          }
          
        var uptime = millisToMinutesAndSeconds(msg.client.uptime);

        msg.channel.send(`**Uptime:** ${uptime}`);

    },
};