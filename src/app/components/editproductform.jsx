"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function EditProductForm({ id, title, company, price, costprice, image, rating }) {
    const router = useRouter();

    const [newTitle, setNewTitle] = useState(title);
    const [newCompany, setNewCompany] = useState(company);
    const [newPrice, setNewPrice] = useState(price);
    const [newCostPrice, setNewCostPrice] = useState(costprice);
    const [newImage, setNewImage] = useState(image);
    const [newRating, setNewRating] = useState(rating);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newTitle, newCompany, newPrice, newCostPrice, newImage, newRating })
            })

            if (!res.ok) {
                throw new Error("Failed to update product");
            }
            router.refresh();
            router.push("/sellerpage");
        } catch (error) {
            console.log(error);
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
            <h1 className="text-4xl lg:text-7xl m-5">Edit Products Here</h1>

            <form onSubmit={handleSubmit} className="flex flex-col w-[90%] lg:w-[50%] border border-slate-200 rounded-xl p-10">

                <label className={labelstyle}>Product Name</label>
                <input
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    className={inputStyle}
                    type="text"
                    placeholder="Product Name"
                />

                <label className={labelstyle}>Company Name</label>
                <input
                    onChange={(e) => setNewCompany(e.target.value)}
                    value={newCompany}
                    className={inputStyle}
                    type="text"
                    placeholder="Company Name"
                />

                <label className={labelstyle}>Price</label>
                <input
                    onChange={(e) => setNewPrice(e.target.value)}
                    value={newPrice}
                    className={inputStyle}
                    type="text"
                    placeholder="Price"
                />

                <label className={labelstyle}>Cost Price</label>
                <input
                    onChange={(e) => setNewCostPrice(e.target.value)}
                    value={newCostPrice}
                    className={inputStyle}
                    type="text"
                    placeholder="Cost Price"
                />


                <label className={labelstyle}>Product Rating</label>
                <input
                    onChange={(e) => setNewRating(e.target.value)}
                    value={newRating}
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
                    onChange={(e) => setNewImage(e.target.value)}
                    value={newImage}
                    className={inputStyle}
                    type="text"
                    placeholder="Image URL"
                />

                <button type="submit" className="border-2 m-2 cursor-pointer hover:bg-amber-200" >
                    Save
                </button>

            </form>
        </div>
    );
}