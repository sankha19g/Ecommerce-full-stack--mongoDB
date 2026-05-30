import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';


export default function home() {

    return (
        <div className="flex flex-col justify-center items-center mt-50 lg:mt-100">
            <h1 className="text-center text-4xl lg:text-7xl ">Welcome To Our Shop View Products</h1>
            <Link href="/products">
                <button className=" mt-6 lg:mt-5 flex items-center justify-center gap-2 bg-[#866528] px-5 py-3 rounded-md text-white border-2 m-2 cursor-pointer group transition-all">
                    Explore Products <ChevronsRight className="group-hover:translate-x-1 transition-transform duration-200" /></button>
            </Link>
        </div>
    );
}
