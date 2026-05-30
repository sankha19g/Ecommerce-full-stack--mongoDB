import { Star } from "lucide-react";

export default function ReviewCard() {
    return (
        <div className="max-w-2xl p-5 my-1 space-y-2 hover:bg-slate-50 cursor-pointer">

            {/* User Info */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white text-lg font-semibold">
                    A
                </div>

                <h2 className="text-lg font-medium">Albert</h2>
            </div>

            {/* Rating + Title */}
            <div className="flex items-center gap-2 flex-wrap">
                <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={18}
                            fill="currentColor"
                            strokeWidth={0}
                        />
                    ))}
                </div>

                <h3 className="font-bold text-xl">
                    Good quality feels nice.
                </h3>
            </div>

            {/* Review Text */}
            <p className="text-sm  text-gray-900">
                Good quality, sound is good deep bass but very loud
                can cause accidents if left at full volume by
                mistake. It is good almost clear audio.
            </p>

        </div>
    );
}