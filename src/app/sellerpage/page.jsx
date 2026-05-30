import { Plus } from "lucide-react";
import Link from "next/link";
import Deletebtn from "../components/deletebtn";


const getProducts = async () => {
   const apiUrl = process.env.API_URL;
    try {
        const res = await fetch(`${apiUrl}/api/products`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch Products");
        }
        return res.json();
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export default async function SellerPage() {
    const { products } = await getProducts();



    return (
        <>

            <h1 className="text-center text-4xl mt-30">Your Products Database</h1>
            <div className="flex flex-row mt-5 ">
                <Link href="/addproduct"><button className="cursor-pointer px-4 py-2 m-5 bg-amber-500 hover:bg-amber-700 rounded-md text-black flex flex-row items-center gap-4"><Plus className="size-5 ml-2" />Add Products</button></Link>
            </div>
            {products?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((props) => (
                <div key={props._id} className="mb-5">

                    <div className="w-full mr-4 mx-2  h-fit flex flex-row gap-2 border border-slate-200 p-2">
                        <div className="border border-slate-400 w-50 h-auto">
                            <img src={props.image} alt="Product" className="w-full h-full lg:h-50 object-cover" loading="lazy"/>
                        </div>
                        <div className="border border-slate-400 w-100 lg:w-full h-fit pl-4 ">
                            <p className="font-bold  text-sm lg:text-xl w-auto border border-slate-200 hover:bg-slate-100">Title: <span className="font-normal">{props.title || <span className="text-red-600 italic font-light">Not Available</span>}</span></p>
                            <p className="font-bold  text-sm lg:text-xl w-auto border border-slate-200 hover:bg-slate-100">Company Name: <span className="font-normal">{props.company || <span className="text-red-600 italic font-light">Not Available</span>}</span></p>
                            <p className="font-bold  text-sm lg:text-xl w-auto border border-slate-200 hover:bg-slate-100">Price: <span className="font-normal">{props.price || <span className="text-red-600 italic font-light">Not Available</span>}</span></p>
                            <p className="font-bold  text-sm lg:text-xl w-auto border border-slate-200 hover:bg-slate-100">Cost Price: <span className="font-normal">{props.costprice || <span className="text-red-600 italic font-light">Not Available</span>}</span></p>                            <p className="font-bold  text-sm lg:text-xl w-auto border border-slate-200 hover:bg-slate-100">Rating: <span className="font-normal">{props.rating || <span className="text-red-600 italic font-light">Not Available</span>}</span></p>
                            <div className="flex flex-row gap-2 my-2 ">
                                <Link href={`/editproduct/${props._id}`}><button className="cursor-pointer px-4 py-1 bg-amber-500 hover:bg-amber-700 rounded-md  flex flex-row items-center gap-4">Edit</button></Link>
                                <Deletebtn id={props._id} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}