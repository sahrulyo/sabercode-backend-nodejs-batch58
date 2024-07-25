import multer from 'multer';
import path from 'path';

// Configure storage for single file upload
const storageSingle = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/single');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Configure storage for multiple files upload
const storageMultiple = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/multiple');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Middleware for single file upload
const uploadSingle = multer({ storage: storageSingle }).single('singleImage');

// Middleware for multiple files upload
const uploadMultiple = multer({ storage: storageMultiple }).array('multipleImages');

export default { uploadSingle, uploadMultiple };
