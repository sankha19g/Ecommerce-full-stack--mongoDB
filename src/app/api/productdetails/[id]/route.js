import connectMongoDB from "../../../../../lib/mongodb";
import Product from "../../../../../models/product";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const { id } = await params;
    await connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ product }, { status: 200 });

}
