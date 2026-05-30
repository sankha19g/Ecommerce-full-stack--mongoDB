import connectMongoDB from "../../../../../lib/mongodb";
import Product from "../../../../../models/product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = await params;
    const { newTitle: title, newCompany: company, newPrice: price, newCostprice: costprice, newImage: image, newRating: rating } = await request.json();
    await connectMongoDB();
    await Product.findByIdAndUpdate(id, { title, company, price, costprice, image, rating });
    return NextResponse.json({ message: "Product Edited" }, { status: 200 });

}
export async function GET(request, { params }) {
    const { id } = await params;
    await connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ product }, { status: 200 });

}