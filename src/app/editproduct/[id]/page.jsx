import EditProductForm from "@/app/components/editproductform";

const getProductById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: "no-store", });
        if (!res.ok) {
            throw new Error("Failed to fetch product");
        }

        return res.json();
    } catch (err) {
        console.log(err);
    }
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