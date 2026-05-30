import RatingDistribution from "./ratingdistribution";
import { Star } from "lucide-react";
import ReviewCard from "./comments";


export default function Reviews({ rating }) {
    return (
        <div className="pt-5 pl-4 sm:pl-6 pb-6 border-2 border-slate-200 rounded-xl p-2 h-auto w-full flex flex-col sm:flex-row gap-8 sm:gap-16 flex-wrap">
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold text-center">Customer Reviews</h1>
                <div className="flex flex-row items-center mt-5">
                    <div className="flex text-orange-500 hover:text-orange-700">
                        {[...Array(rating)].map((_, i) => (
                            <Star
                                key={i}
                                size={18}
                                fill="currentColor"
                                strokeWidth={0}
                            />
                        ))}
                    </div>
                    <div className="flex text-gray-400">
                        {[...Array(5 - rating)].map((_, i) => (
                            <Star
                                key={i}
                                size={18}
                                strokeWidth={1}
                            />
                        ))}
                    </div>
                    <p className="ml-2">{rating} out of 5 </p>
                </div>

                <p>{Math.floor(Math.random() * 1001) + 1000} global ratings</p>
                <RatingDistribution />

            </div>
            <div>
                <p className="text-2xl font-bold">Top reviews from India</p>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>

        </div>
    )
}