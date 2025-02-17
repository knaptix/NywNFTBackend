
const util = require('util');
const fs = require('fs');
const multer = require('multer');
require('dotenv').config();

const storageCollection = multer.diskStorage({
    destination: (req, file, callback) => {
        const path = process.env.NFT_IMAGE_PATH_COLLECTION;
        fs.mkdirSync(path, { recursive: true });
        callback(null, path);
    },
    filename: (req, file, callback) => {
        const match = ["image/png", "image/jpeg", "image/jfif"];
        if (match.indexOf(file.mimetype) === -1) {
            var message = `${file.originalname} is invalid. Only accept png/jpeg.`;
            return callback(message, null);
        }
        var filename = `collection-${Date.now()}.${/[^.]+$/.exec(file.originalname)}`;
        callback(null, filename);
    }
});

const uploadFields = multer({ storage: storageCollection }).fields([
    { name: 'field1', maxCount: 1 },
    { name: 'field2', maxCount: 1 }
]);

const uploadCollectionFields = util.promisify(uploadFields);

module.exports = { uploadCollectionFields }