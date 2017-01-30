// Description:
//   misc
//
// Commands:
//   hubot fujiwara
//

"use strict"

module.exports = (robot) => {
    robot.respond(/FUJIWARA (.+)$/i, (res) => {
        const m = res.match[1].split("");
        res.send(m.map((x) => x + "゛").join(""));
    });
};
