"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType, StoreProductType } from "../../../type";
import Image from "next/image";
import FormatterPrice from "@/components/FormatterPrice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import {
    decreaseQuantity,
    deleteProduct,
    increaseQuantity,
    restCart,
} from "@/store/productSlice";
import Link from "next/link";
import CartPayment from "@/components/CartPayment";

function CartPage() {
    const { userCartData } = useSelector((state: StateType) => state.product);
    const dispatch = useDispatch();
    return (
        <main className="bg-zinc-100 w-full min-h-screen xs:p-2 lg:p-4  grid grid-cols-12 gap-5">
            {userCartData.length > 0 ? (
                <>
                    <div className="xs:col-span-12 lg:col-span-9">
                        <h1 className="bg-zinc-200 p-4 rounded-md text-xl font-semibold shadow-md">
                            Your Shopping Cart
                        </h1>
                        <div className="mt-5 lg:mb-20  space-y-5 p-4 bg-zinc-200 rounded-md xs:col-span-12">
                            {userCartData.map((product: StoreProductType) => (
                                <div
                                    key={product._id}
                                    className="col-span-6 grid grid-cols-12  xs:gap-0 lg:gap-2 lg:h-40 rounded-md bg-zinc-100 shadow-sm"
                                >
                                    {/* Product image */}
                                    <div className="xs:col-span-12  lg:col-span-2 flex lg:justify-start xs:justify-center items-center ">
                                        <Image
                                            src={product.image}
                                            width={120}
                                            height={120}
                                            alt="Product Image"
                                            priority
                                            className="lg:h-full lg:w-auto xs:h-full xs:w-20"
                                        />
                                    </div>
                                    {/* Product details */}
                                    <div className="xs:col-span-12 lg:col-span-7 p-3 flex flex-col justify-between items-start ">
                                        <h3 className="xs:text-sm lg:text-xl font-medium">
                                            {product.title}
                                        </h3>
                                        <p className="xs:text-xs lg:text-sm font-medium opacity-50">
                                            {product.category}
                                        </p>
                                        <p className="xs:hidden lg:block lg:text-sm font-medium opacity-70">
                                            {product.description.substring(0, 120)}
                                        </p>
                                    </div>
                                    {/* Price,count and remove product  */}
                                    <div className="xs:col-span-12 lg:col-span-3 p-4  flex flex-col gap-2 justify-between items-stretch">
                                        <p className="flex justify-between items-center font-semibold xs:text-sm lg:text-base">
                                            <span>
                                                <FormatterPrice amount={product.price} />
                                            </span>
                                            <span className="line-through opacity-40">
                                                <FormatterPrice amount={product.oldPrice} />
                                            </span>
                                        </p>
                                        <div className="bg-zinc-200 rounded-md  flex justify-between items-center text-base font-medium">
                                            <button
                                                onClick={() =>
                                                    dispatch(decreaseQuantity(product))
                                                }
                                                className="h-full w-1/3 p-2 flex justify-center items-center bg-zinc-200 hover:bg-zinc-300 transition-all duration-300 rounded-md text-xl font-bold"
                                            >
                                                <AiOutlineMinus />
                                            </button>
                                            <span className="text-center font-semibold h-full w-1/3 p-2">
                                                {product.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    dispatch(increaseQuantity(product))
                                                }
                                                className="h-full w-1/3 p-2 flex justify-center items-center bg-zinc-200 hover:bg-zinc-300 transition-all duration-300 rounded-md text-xl font-bold"
                                            >
                                                <AiOutlinePlus />
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() =>
                                                    dispatch(deleteProduct(product))
                                                }
                                                className="bg-transparent font-semibold text-base text-red-600 uppercase w-full p-1 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="grid grid-cols-12 rtl">
                                <button
                                    onClick={() => dispatch(restCart())}
                                    className="xs:col-span-12 lg:col-span-3 font-semibold text-base uppercase w-full p-2 rounded-md  bg-red-400 hover:bg-red-600 text-white transition-all duration-300"
                                >
                                    Rest Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="xs:col-span-12 lg:col-span-3">
                        <h1 className="bg-zinc-200 p-4 rounded-md text-xl font-semibold shadow-md">
                            Payments
                        </h1>
                        <CartPayment />
                    </div>
                </>
            ) : (
                // For Empty Cart
                <div className="w-full h-screen bg-zinc-100 flex justify-center items-start col-span-12">
                    <div className="bg-zinc-200 bg-opacity-40 w-full h-1/2 rounded-md mt-20 flex flex-col justify-center items-center gap-10">
                        <h1 className="text-4xl uppercase font-semibold opacity-60">
                            Your Cart Is Empty
                        </h1>
                        <FiShoppingCart className="text-8xl opacity-20" title="Cart" />
                        <Link href="/">
                            <button className="bg-[#FF9900] px-10 py-3 rounded-md text-base font-medium text-white">
                                Back To Home
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </main>
    );
}

export default CartPage;
