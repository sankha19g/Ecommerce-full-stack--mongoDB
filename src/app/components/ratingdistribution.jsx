const ratingData = [
    { star: 5, percentage: 53 },
    { star: 4, percentage: 23 },
    { star: 3, percentage: 8 },
    { star: 2, percentage: 4 },
    { star: 1, percentage: 12 },
];

export default function RatingDistribution() {
    return (
        <div className="w-full max-w-md space-y-2 my-3">
            {ratingData.map((item) => (
                <div
                    key={item.star}
                    className="flex items-center gap-3"
                >
                    {/* Star Label */}
                    <span className="w-12 text-sm font-medium text-gray-700">
                        {item.star} star
                    </span>

                    {/* Progress Bar */}
                    <div className="flex-1 h-3 border border-gray-400 rounded overflow-hidden bg-white hover:border-black cursor-pointer">
                        <div
                            className="h-full bg-orange-500 "
                            style={{ width: `${item.percentage}%` }}
                        />
                    </div>

                    {/* Percentage */}
                    <span className="w-10 text-sm text-gray-700">
                        {item.percentage}%
                    </span>
                </div>
            ))}
        </div>
    );
}