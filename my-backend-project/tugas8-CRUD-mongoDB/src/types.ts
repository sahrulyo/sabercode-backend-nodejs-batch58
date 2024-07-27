import multer from 'multer';
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      file?: multer.Multer.File; // Correct type for a single file
      files?: multer.Multer.File[]; // Correct type for multiple files
    }
  }
}
