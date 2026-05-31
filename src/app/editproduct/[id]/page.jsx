import EditProductForm from "@/app/components/editproductform";
import connectMongoDB from "../../../../lib/mongodb";
import Product from "../../../../models/product";

const getProductById = async (id) => {
    await connectMongoDB();
    const product = await Product.findById(id).lean();
    return { product: JSON.parse(JSON.stringify(product)) };
}



export default async function EditProductPage({ params }) {
    const { id } = await params;
    const { product } = await getProductById(id);
    const { _id, title, company, price, costprice, image, rating } = product;
    return (
        <>
            <EditProductForm id={_id} title={title} company={company} price={price} costprice={costprice} image={image} rating={rating} />
        </>
    );
}