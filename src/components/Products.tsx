import React from "react";
import Image from "next/image";
import { ProductsDataType } from "../../type";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import FormatterPrice from "./FormatterPrice";

interface PropsType {
    productsData: ProductsDataType[];
}

function Products({ productsData }: PropsType) {
    return (
        <div className="bg-transparent mx-10 relative z-30 -mt-64 grid grid-cols-12 gap-5">
            {productsData.map((product) => {
                return (
                    <div key={product._id} className="col-span-3 bg-zinc-100 rounded-sm ">
                        {/* Product Image */}
                        <div className="flex justify-center items-start group relative overflow-hidden">
                            <Image
                                src={product.image}
                                alt="Product Image"
                                width={300}
                                height={300}
                                className="  object-cover scale-90 hover:scale-100 transition-all duration-300  "
                            />
                            <div className="flex flex-col justify-center items-center  text-2xl text-zinc-700  bg-zinc-100 rounded-md absolute divide-y-2 divide-zinc-300 border-2 border-zinc-300 right-2 bottom-1/2 translate-x-16 group-hover:translate-x-0 transition-all duration-300 [&>*]:hover:cursor-pointer">
                                <span className="p-3 rounded-t-md hover:bg-[#FF9900] transition-all duration-400">
                                    <FiShoppingCart />
                                </span>
                                <span className="p-3 rounded-b-md hover:bg-[#FF9900] transition-all duration-400">
                                    <MdOutlineFavoriteBorder />
                                </span>
                            </div>
                        </div>
                        <hr className="border-zinc-200 border-2" />
                        {/* Product Information */}
                        <div className="py-2 px-3 space-y-1">
                            <p className="opacity-50 font-medium text-sm">
                                {product.category}
                            </p>
                            <p className="font-semibold text-lg">{product.title}</p>
                            <p className="flex justify-between items-center font-medium">
                                <span>
                                    <FormatterPrice amount={product.price} />
                                </span>
                                <span className="line-through opacity-40">
                                    <FormatterPrice amount={product.oldPrice} />
                                </span>
                            </p>
                            <p className="text-sm text-justify opacity-70">
                                {product.description.substring(0, 120)}
                            </p>
                        </div>
                        <div className="p-3 flex justify-center items-center">
                            <button className="w-full p-2 uppercase font-medium rounded-sm bg-black text-white hover:bg-[#FF9900] transition-all duration-500">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;
