const ImageKit = require('@imagekit/nodejs');
require('dotenv').config();


const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadfile(buffer) {
    const result = await imagekit.files.upload({  // alwasys use files not file
        file: buffer.toString("base64"),
        fileName: "my-file.jpg"
    });
    return result;


}

module.exports =  uploadfile ;