const fs = require('fs');

const filePath = 'example.txt';

if (fs.existsSync(filePath)) {
    fs.readFile(filePath, 'utf8', (err) => {
        if(err) {
            console.err(err);
            return;
        }
        console.log(data);
    });
} else {
    console.log('File does not exists.');
}