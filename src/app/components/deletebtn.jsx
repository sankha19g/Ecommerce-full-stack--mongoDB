"use client";
import { useRouter } from "next/navigation";


export default function Deletebtn({ id }) {

    const router = useRouter();
    const removeProduct = async () => {
        const confirmed = confirm("Are you sure you want to delete this product?");
        if (confirmed) {
            const res = await fetch(`/api/products?id=${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh();
            }
            else {
                alert("Failed to delete");
            }

        }

    }


    return (
        <div>
            <button onClick={removeProduct} className="cursor-pointer px-4 py-1 bg-amber-500 hover:bg-amber-700 rounded-md  flex flex-row items-center gap-4">Delete</button>

        </div>
    );
}