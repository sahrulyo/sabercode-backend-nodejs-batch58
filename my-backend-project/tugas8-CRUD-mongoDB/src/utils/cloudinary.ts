import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';

// Memuat variabel lingkungan dari file .env
dotenv.config();

// Konfigurasi Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Fungsi untuk menangani unggahan file
export const handleUpload = async (file: string) => {
  try {
    const result = await cloudinary.uploader.upload(file, { resource_type: "auto" });
    return result;
  } catch (error) {
    throw new Error(`Failed to upload file: ${error.message}`);
  }
};

export default cloudinary;
