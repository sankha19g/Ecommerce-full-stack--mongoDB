export default function CardsSkeleton() {
    return (
        <div className="w-full h-fit rounded-xs border-2 border-slate-200 flex flex-col justify-between">

            {/* Image placeholder */}
            <div className="m-2 h-48 sm:h-52 md:h-60 w-auto rounded-md bg-gray-200 animate-pulse" />

            <div className="m-2 w-auto h-fit rounded-md p-1 flex flex-col gap-2">

                {/* Company name placeholder */}
                <div className="h-4 w-1/3 bg-gray-200 animate-pulse rounded-md" />

                {/* Title placeholder */}
                <div className="h-5 w-3/4 bg-gray-200 animate-pulse rounded-md" />

                {/* Price row placeholder */}
                <div className="flex flex-row items-center gap-2">
                    <div className="h-4 w-10 bg-gray-200 animate-pulse rounded-md" />
                    <div className="h-6 w-16 bg-gray-200 animate-pulse rounded-md" />
                    <div className="h-4 w-12 bg-gray-200 animate-pulse rounded-md" />
                </div>

                {/* Stars placeholder */}
                <div className="flex flex-row gap-1">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-4 w-4 bg-gray-200 animate-pulse rounded-sm" />
                    ))}
                </div>

                {/* Buttons placeholder */}
                <div className="flex flex-row justify-between gap-2 mt-2">
                    <div className="h-8 w-full bg-gray-200 animate-pulse rounded-md" />
                    <div className="h-8 w-full bg-gray-200 animate-pulse rounded-md" />
                </div>

            </div>
        </div>
    );
}