// Description:
//   misc
//
// Commands:
//   hubot fujiwara
//

"use strict";

const fujiwara = require('fujiwara');
module.exports = (robot) => {
    robot.respond(/FUJIWARA (.+)$/i, (res) => {
        const m = res.match[1];
        res.send(fujiwara(m));
    });
};
