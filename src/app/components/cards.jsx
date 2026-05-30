import { Star } from "lucide-react";
import Link from "next/link";



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


export default async function Cards() {
    const { products } = await getProducts();
    return (
        <>
            {products.map((props) => (
                <div key={props._id} className="w-full h-fit rounded-xs border-2 border-slate-200 flex flex-col justify-between cursor-pointer hover:translate-y-px hover:bg-slate-50">
                    <Link href={`/productsdetails/${props._id}`}><div className="m-2 h-48 sm:h-52 md:h-60 w-auto rounded-md border-slate-200">
                        <img className="object-cover w-full h-full" src={props.image} alt={props.title} loading="lazy"/></div>
                    </Link>
                    <div className="m-2 w-auto h-fit rounded-md p-1">
                        <p className="italic text-yellow-700 hover:text-yellow-900 hover:underline">{props.company || <span className="text-gray-400 italic font-light">
                            Company not provided
                        </span>}</p>
                        <p className=" text-md lg:text-lg truncate ">{props.title || "No Title"}</p>
                        <div className="flex flex-row items-center gap-2">
                            <p className=" text-sm lg:text-md text-[#cc1c39] font-weight-200"> - {(((props.costprice - props.price) / props.costprice) * 100).toFixed(2)}</p>

                            <p className=" text-md lg:text-xl font-bold">{`₹${props.price || "No Price"}`}</p>
                            <div className="text-xs text-gray-500 line-through">&#8377;{props.costprice || "Nil"}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex text-orange-500 hover:text-orange-700">
                                {[...Array(props.rating || 0)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill="currentColor"
                                        strokeWidth={0}
                                    />
                                ))}
                            </div>
                            <div className="flex text-gray-400">
                                {[...Array(5 - props.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        strokeWidth={1}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-2 mt-2">
                            <button className="cursor-pointer w-15 lg:w-25  bg-amber-200 hover:bg-amber-400 rounded-md  px-1 py-1 text-xs lg:text-sm h-full">Add to cart</button>
                            <Link href={`/productsdetails/${props._id}`}><button className="cursor-pointer w-15 lg:w-25 bg-amber-200 hover:bg-amber-400 rounded-md px-1 py-1 text-xs lg:text-sm h-full">Buy now</button></Link>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}
