const header = require('waveheader');
const fs = require('fs');

module.exports = {
    save(filepath, melodyQueue) {
        let file = fs.createWriteStream(filepath);
        file.write(header(melodyQueue.getQueue().length, {
            bitDepth: 8
        }));
        let data = Uint8Array.from(melodyQueue.getQueue(), function (val) {
            return val + 128;
        });
        buffer = Buffer.from ? Buffer.from(data) : new Buffer(data);
        file.write(buffer);
        file.end();
    }
};
