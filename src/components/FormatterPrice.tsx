import React from "react";

interface PropsType {
    amount: Number;
}

function FormatterPrice({ amount }: PropsType) {
    const formattedAmount = Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
    });
    return <span>{formattedAmount}</span>;
}

export default FormatterPrice;
