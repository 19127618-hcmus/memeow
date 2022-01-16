const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
  // Destination to store image     
  destination: 'public/meme', 
    filename: (req, file, cb) => {
        cb(null, Date.now() 
           + path.extname(file.originalname))
          // file.fieldname is name of the field (image)
          // path.extname get the uploaded file extension
  }
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 100000000 // 10000000 Bytes = 10 MB
  },
  fileFilter(req, file, cb) {
    console.log(file)
  if (!file) { 
       // upload only png and jpg format
       return cb(new Error('Please upload a Image'))
     }
     
   cb(undefined, true)
}
}) 

module.exports = imageUpload;

// const imageUpload = multer({
//   storage: imageStorage,
//   limits: {
//     fileSize: 100000000 // 10000000 Bytes = 10 MB
//   },
//   fileFilter(req, file, cb) {
//   if (!file.originalname.match(/\.(png|jpg)$/)) { 
//        // upload only png and jpg format
//        return cb(new Error('Please upload a Image'))
//      }
     
//    cb(undefined, true)
// }
// }) 