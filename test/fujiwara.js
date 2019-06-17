const assert = require('power-assert');
const Helper = require('hubot-test-helper');
const helper = new Helper('../src/scripts');

describe('fujiwara', async () => {
    room = helper.createRoom();
    await room.user.say('user', 'hubot fujiwara あああ');
    it('fujiwara あああ', () => {
        assert.deepEqual(room.messages, [
            ['user', 'hubot fujiwara あああ'],
            ['hubot', 'あ゛あ゛あ゛']
        ]);
    });

    room.destroy();
});
