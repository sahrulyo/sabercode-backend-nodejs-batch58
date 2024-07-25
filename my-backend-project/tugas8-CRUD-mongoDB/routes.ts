import express from 'express'

import uploadMiddleware from "./src/middlewares/upload.middlewares"
import uploadController from "./src/controllers/upload.controller";
import productsController from "./src/controllers/products.controller";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;