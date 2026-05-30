'use client';
import { useState } from "react";
import { Plus, Minus, MapPin } from "lucide-react";

export default function PurchaseBox({ price, dateInfo, hoursLeft, minutesLeft }) {
    const [quantity, setQuantity] = useState(1);



    return (
        <div className="border border-slate-400 rounded-xl p-2 py-5 w-full lg:w-60 h-fit shrink-0">
            <p className="font-bold text-2xl">&#8377;{price ? price * quantity : "No price available"}</p>
            <p className="italic text-green-700 text-xs">&#8377;{price} x {quantity} items </p>

            <p className="text-sm mt-1">
                FREE delivery by <span className="font-bold">{dateInfo.formattedDate}</span>.
                <br />Order within{" "}
                <span className="text-green-500">{hoursLeft}hrs {minutesLeft}mins</span>{" "}
                <span className="text-blue-500 hover:text-blue-700 hover:underline cursor-pointer">Details</span>
            </p>
            <div className="flex flex-row items-center hover:underline cursor-pointer text-sm mt-1">
                <MapPin className="size-4 mr-2" />Select address
            </div>
            <div className="mt-5 flex flex-col mx-2 gap-2">
                <div className="w-full  border-2 border-slate-500 rounded-md flex flex-row items-center justify-between">
                    <button
                        className="cursor-pointer hover:bg-slate-200 h-full px-3 py-2"
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    >
                        <Minus className="size-5" />
                    </button>
                    <span className="border-x-2 border-slate-100 px-4 py-1">Quantity: {quantity}</span>
                    <button
                        className="cursor-pointer hover:bg-slate-200 h-full px-3 py-2"
                        onClick={() => setQuantity(q => q + 1)}
                    >
                        <Plus className="size-5" />
                    </button>
                </div>
                <button className="w-full px-2 py-1 cursor-pointer bg-[#866528] hover:bg-amber-400 rounded-md text-white">Buy now</button>
                <button className="w-full px-2 py-1 cursor-pointer bg-[#866528] hover:bg-amber-400 rounded-md text-white">Add to cart</button>
            </div>
        </div>
    );
}
