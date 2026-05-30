import Cards from "../components/cards";

export default function Products() {
    return (
        <div className="w-full flex justify-center mt-32 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full max-w-screen-xl mx-auto">
                <Cards />
            </div>
        </div>
    );
}
