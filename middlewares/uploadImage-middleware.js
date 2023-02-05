const {accessKey, secretAccessKey, bucketName, accountId} = require('../config/config.json').Cloudflare

const AWS = require('aws-sdk');
const endpoint = new AWS.Endpoint(`https://${accountId}.r2.cloudflarestorage.com`);
const multer = require('multer');
const multerS3 = require('multer-s3');

const path = require('path');

AWS.config.update({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey,
        endpoint: endpoint,
        // region: 'ap-northeast-2'
    },
});

const s3 = new AWS.S3({
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    signatureVersion: 'v4'
})

function setUpload(bucket) {
    let upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: bucketName,
            key: function (req, file, cb) {
                let extension = path.extname(file.originalname);
                cb(null, Date.now().toString() + extension);
            },
        }),
    }).single('file');

    return upload;
}

module.exports = setUpload;
