"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SellerPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [price, setPrice] = useState("");
    const [costprice, setCostprice] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !price || !costprice || !rating || !image) {
            alert("Please fill all the fields");
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/products',
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title,
                        company,
                        price,
                        costprice,
                        rating,
                        image
                    })
                }
            )
            if (res.ok) {
                router.push("/sellerpage");
            }
            else {
                throw new Error("Failed to fetch products");
            }
        }
        catch (err) {
            console.log(err)
            alert(err);
        }


    }


    const inputStyle =
        "border-2 m-2 p-2 border-slate-300 rounded-lg bg-slate-100 focus:bg-slate-200";

    const fileInputStyle =
        "border-2 m-2 h-20 cursor-pointer text-md p-2 bg-slate-100 rounded-lg";

    const labelstyle =
        "ml-2 text-md font-bold";

    return (
        <div className="mt-20 lg:mt-30 mb-10 flex flex-col items-center ">
            <h1 className="text-4xl lg:text-7xl m-5">Add Products Here</h1>

            <form onSubmit={handleSubmit} className="flex flex-col w-[90%] lg:w-[50%] border border-slate-200 rounded-xl p-10">

                <label className={labelstyle}>Product Name</label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={inputStyle}
                    type="text"
                    placeholder="Product Name"
                />

                <label className={labelstyle}>Company Name</label>
                <input
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                    className={inputStyle}
                    type="text"
                    placeholder="Company Name"
                />

                <label className={labelstyle}>Price</label>
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className={inputStyle}
                    type="text"
                    placeholder="Price"
                />

                <label className={labelstyle}>Cost Price</label>
                <input
                    onChange={(e) => setCostprice(e.target.value)}
                    value={costprice}
                    className={inputStyle}
                    type="text"
                    placeholder="Cost Price"
                />


                <label className={labelstyle}>Product Rating</label>
                <input
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    className={inputStyle}
                    type="text"
                    placeholder="Product Rating"
                />



                {/* <label className={labelstyle}>Add Images</label>
                <input
                    className={fileInputStyle}
                    type="file"
                />

                <p className="ml-[50%] text-md ">or</p> */}

                <label className={labelstyle}>Image Link</label>
                <input
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    className={inputStyle}
                    type="text"
                    placeholder="Image URL"
                />

                <button type="submit" className="border-2 m-2 cursor-pointer hover:bg-amber-200" >
                    Add Product
                </button>

            </form>
        </div>
    );
}