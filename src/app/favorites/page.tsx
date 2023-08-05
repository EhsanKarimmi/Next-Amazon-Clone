"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType, StoreProductType } from "../../../type";
import Image from "next/image";
import FormatterPrice from "@/components/FormatterPrice";
import { deleteFavorite } from "@/store/productSlice";

function FavoritesPage() {
    const { userFavoritesData } = useSelector((state: StateType) => state.product);
    const dispatch = useDispatch();
    return (
        <div className="bg-zinc-100 w-full min-h-screen xs:p-2 lg:p-4">
            <h1 className="bg-zinc-200 p-4 rounded-md text-xl font-semibold shadow-md">
                Your Favorites
            </h1>
            <div className="grid grid-cols-12 gap-4 my-4">
                {userFavoritesData.map((favorite: StoreProductType) => {
                    return (
                        <div
                            key={favorite._id}
                            className="xs:col-span-12 md:col-span-4 lg:col-span-3 bg-zinc-200 rounded-md "
                        >
                            {/* Product Image */}
                            <div className="flex justify-center items-start group relative overflow-hidden">
                                <Image
                                    src={favorite.image}
                                    alt="Product Image"
                                    width={300}
                                    height={300}
                                    priority
                                    className="object-cover scale-90 hover:scale-100 transition-all duration-300 xs:w-44 lg:w-64"
                                />
                            </div>
                            <hr className="border-zinc-200 border-2" />
                            {/* Product Information */}
                            <div className="py-2 px-3 space-y-1">
                                <p className="opacity-50 font-medium text-sm">
                                    {favorite.category}
                                </p>
                                <p className="font-semibold xs:text-base md:text-sm lg:text-sm xl:text-base">
                                    {favorite.title.substring(0, 24)}
                                </p>
                                <p className="flex justify-between items-center xs:text-sm  font-semibold">
                                    <span>
                                        <FormatterPrice amount={favorite.price} />
                                    </span>
                                    <span className="line-through opacity-40">
                                        <FormatterPrice amount={favorite.oldPrice} />
                                    </span>
                                </p>
                                <p className="xs:text-xs text-sm text-justify opacity-70">
                                    {favorite.description.substring(0, 120)}
                                </p>
                            </div>
                            <div className="p-3 flex justify-center items-center">
                                <button
                                    onClick={() => dispatch(deleteFavorite(favorite))}
                                    className="bg-transparent font-semibold text-base text-red-600 uppercase w-full p-1 rounded-md border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FavoritesPage;
