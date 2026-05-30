

const ProductDescription = () => {
    return (
        <section className="max-w-2xl mx-auto p-4 mb-4 font-sans text-gray-800">
            {/* Overview Section */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Overview</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                    Upgrade your daily routine with a product designed for modern living.
                    Engineered with high-quality materials and a sleek aesthetic, this item
                    perfectly balances style, durability, and practical functionality. Whether
                    for personal use or as a thoughtful gift, it is crafted to deliver an
                    exceptional user experience.
                </p>
            </div>

            <hr className="border-gray-200 my-4" />

            {/* Key Features Section */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-5">
                    <li className="text-sm text-gray-600">
                        <strong className="text-gray-900">Premium Quality:</strong> Built from top-tier, durable materials designed to withstand daily wear and tear for long-lasting use.
                    </li>
                    <li className="text-sm text-gray-600">
                        <strong className="text-gray-900">Ergonomic & Sleek:</strong> Features a modern, user-friendly design that looks great in any setting and is comfortable to handle.
                    </li>
                    <li className="text-sm text-gray-600">
                        <strong className="text-gray-900">High Performance:</strong> Optimized to deliver maximum efficiency and reliable results every single time.
                    </li>
                    <li className="text-sm text-gray-600">
                        <strong className="text-gray-900">Easy to Maintain:</strong> Designed for hassle-free cleaning, storage, and effortless everyday upkeep.
                    </li>
                </ul>
            </div>

            <hr className="border-gray-200 my-4" />

            {/* Specifications Section */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Specifications</h3>
                <ul className="list-none space-y-6">
                    <li className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">Package Includes:</span> 1 x Main Product, User Manual, and Premium Packaging.
                    </li>
                    <li className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">Material:</span> High-grade, eco-friendly components.
                    </li>
                    <li className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">Compatibility:</span> Universal design suitable for standard everyday use.
                    </li>
                    <li className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">Satisfaction Guarantee:</span> Backed by our standard customer support and warranty coverage.
                    </li>
                </ul>
            </div>

            {/* Notice/Disclaimer Box */}
            <div className="bg-gray-50 border-l-4 border-gray-400 p-3 my-4 rounded-r">
                <p className="text-xs italic text-gray-500">
                    <strong className="not-italic text-gray-700">Note:</strong> Product color and exact dimensions may vary slightly due to photographic lighting sources or your device monitor settings.
                </p>
            </div>
        </section>
    );
};

export default ProductDescription;