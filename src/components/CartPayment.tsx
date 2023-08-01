"use client";
import React, { useEffect, useState } from "react";
import FormatterPrice from "./FormatterPrice";
import { useSelector } from "react-redux";
import { StateType, StoreProductType } from "../../type";

function CartPayment() {
    const [amount, setAmount] = useState(0);
    const { userCartData } = useSelector((state: StateType) => state.product);
    useEffect(() => {
        let total = 0;
        userCartData.map((product: StoreProductType) => {
            total += product.price * product.quantity;
        });
        setAmount(total);
    }, [userCartData]);
    return (
        <div className="mt-5 xs:mb-10 lg:mb-20  space-y-5 p-4 pt-5 bg-zinc-200 rounded-md">
            <div className="flex justify-between items-center font-semibold text-lg">
                <span>Total</span>
                <span>
                    <FormatterPrice amount={amount} />
                </span>
            </div>
            <button
                disabled={true}
                className="w-full p-2 mt-20 disabled:cursor-not-allowed disabled:hover:bg-black disabled:bg-opacity-50 disabled:hover:bg-opacity-50  uppercase font-medium rounded-sm bg-black text-white hover:bg-[#FF9900] transition-all duration-500"
            >
                Proceed To Buy
            </button>
            <p className="text-sm font-medium text-red-600 text-center animate-pulse">
                Please Login To Continue
            </p>
        </div>
    );
}

export default CartPayment;
