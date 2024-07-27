import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoriesModel = mongoose.model("Categories", CategoriesSchema);

export default CategoriesModel;

Ubah kode file products.model.ts menjadi seperti ini 

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      min: [1, "Quantity can not be less than 1"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  },
  {
    timestamps: true,
  }
);

const ProductsModel = mongoose.model("Products", ProductsSchema);

export default ProductsModel;
