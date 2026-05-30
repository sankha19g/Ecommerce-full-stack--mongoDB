import Reviews from "../../components/reviews";
import PurchaseBox from "../../components/PurchaseBox";
import ProductDescription from "../../components/productdescription";
import { Star } from "lucide-react";
import Recomendedcards from "../../components/recomendedcards";

const getRandomFutureDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 3) + 1;
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + randomDays);
    return {
        relativeText: `${randomDays} ${randomDays === 1 ? 'day' : 'days'} from today`,
        formattedDate: futureDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
};

const getProduct = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/productdetails/${id}`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch product details");
        }
        return res.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const { product } = await getProduct(id);

    const now = new Date();
    const hoursLeft = 23 - now.getHours();
    const minutesLeft = 60 - now.getMinutes();
    const dateInfo = getRandomFutureDate();

    return (
        <div className="flex flex-col gap-4 mt-28 mx-3 sm:mx-6 mb-10">

            {/* Top section: on mobile stacks, on desktop side-by-side */}
            <div className="flex flex-col lg:flex-row gap-2 justify-between">

                {/* 1. Image */}
                <div className="border border-slate-200 w-full lg:w-140 h-auto lg:h-130 relative rounded-xl flex items-center justify-center">
                    <div className="p-3 rounded-xl border border-slate-200 w-full lg:w-120 h-72 sm:h-96 lg:h-120 m-3">
                        <img className="object-scale-down w-full h-full" src={product.image} alt={product.title} />
                    </div>
                </div>

                {/* 2. Title, Company, Rating, Price, Discount, Description */}
                <div className="border rounded-xl p-4 w-full lg:w-140 h-fit relative border-slate-200">
                    <p className="font-bold text-xl sm:text-2xl">{product.title}</p>
                    <p className="italic text-yellow-700 hover:text-yellow-900 hover:underline mt-1">
                        {product.company || <span className="text-gray-400 italic font-light">Company not provided</span>}
                    </p>
                    <div className="flex flex-row items-center mt-1">
                        <div className="flex text-orange-500">
                            {[...Array(product.rating)].map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                            ))}
                        </div>
                        <div className="flex text-gray-400">
                            {[...Array(5 - product.rating)].map((_, i) => (
                                <Star key={i} size={18} strokeWidth={1} />
                            ))}
                        </div>
                        <p className="ml-2">{product.rating} out of 5</p>
                    </div>
                    <p className="text-2xl sm:text-3xl font-semibold mt-2">&#8377;{product.price || "No price available"}</p>
                    <div className="text-gray-500 line-through">&#8377;{product.costprice || "No costprice available"}</div>
                    <p className="text-lg text-red-600 font-semibold">
                        {(((product.costprice - product.price) / product.costprice) * 100).toFixed(2)}% off
                    </p>
                    <ProductDescription />
                </div>

                {/* 3. Purchase Box — on mobile shows below info, on desktop stays in row */}
                <PurchaseBox
                    price={product.price}
                    dateInfo={dateInfo}
                    hoursLeft={hoursLeft}
                    minutesLeft={minutesLeft}
                />
            </div>

            {/* 4. Customer Reviews */}
            <div>
                <Reviews rating={product.rating} />
            </div>

            {/* 5. Similar Products */}
            <div className="border border-slate-200 rounded-xl p-4 mb-10 h-fit w-full">
                <p className="text-3xl sm:text-4xl mb-4">Similar Products</p>
                <div className="flex flex-row gap-3 mt-4 overflow-x-scroll overflow-y-hidden">
                    <Recomendedcards />
                </div>
            </div>

        </div>
    );
}
