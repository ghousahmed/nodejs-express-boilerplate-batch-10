import { v2 as cloudinary } from 'cloudinary';
import { ENV } from '../../../constants/index.js';
import fsExtra from 'fs-extra';
import sharp from 'sharp';

cloudinary.config({
    cloud_name: ENV.CLOUD_NAME,
    api_key: ENV.API_KEY,
    api_secret: ENV.API_SECRET
});

const uploadFile = async (file) => {
    return new Promise((resolve, reject) => {
        const resizePath = `src/modules/upload/files/resize-${file.filename}`
        const filePath = `src/modules/upload/files/${file.filename}`;
        sharp(filePath)
            .png({ quality: 1 })
            .toFile(resizePath, async (err, info) => {
                cloudinary.uploader.upload(resizePath,
                    {
                        folder: "smit-images",
                        public_id: file.filename
                    },
                    function (error, result) {
                        if (error) {
                            reject(error)
                            return;
                        }
                        fsExtra.removeSync(filePath)
                        fsExtra.removeSync(resizePath)
                        resolve(result)
                    });
            })

    })
}

export default uploadFile;