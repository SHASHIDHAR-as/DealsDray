const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./Images");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});

const upload = multer({ storage });

module.exports = upload;
