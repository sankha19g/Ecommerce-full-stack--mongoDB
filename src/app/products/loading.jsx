import CardsSkeleton from "@/app/components/cardsSkeleton";






function LoadingGrid() {
    return (
        <>
            {Array.from({ length: 5 }).map((_, i) => (
                <CardsSkeleton key={i} />
            ))}
        </>
    );
}
export default function Loading() {
    return (
        <>
            <LoadingGrid />
        </>
    );
}