import connectMongoDB from "../../../../lib/mongodb";
import Product from "../../../../models/product";
import { NextResponse } from "next/server";


export async function POST(request) {
    const { title, company, price, costprice, image, rating } = await request.json();
    await connectMongoDB();
    await Product.create({ title, company, price, costprice, image, rating });

    return NextResponse.json({ message: "Product created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json({ products });
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}