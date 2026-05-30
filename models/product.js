import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        title: String,
        price: Number,
        costprice: Number,
        image: String,
        rating: Number,
        company: String,
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
