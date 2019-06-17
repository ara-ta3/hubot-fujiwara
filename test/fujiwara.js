const assert = require('power-assert');
const Helper = require('hubot-test-helper');
const helper = new Helper('../src/scripts');

describe('fujiwara', () => {
    let room = null;

    beforeEach(() => {
        room = helper.createRoom();
    })

    afterEach(() => {
        room.destroy();
    });

    it('fujiwara あああ', async () => {
        await room.user.say("user", "hubot fujiwara あああ");
        assert.deepEqual(room.messages, [
            ['user', 'hubot fujiwara あああ'],
            ['hubot', 'あ゛あ゛あ゛']
        ]);
    });
});
