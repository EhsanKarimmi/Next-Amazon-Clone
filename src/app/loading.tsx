import React from "react";
import { SpinnerDotted } from "spinners-react";

function LoadingPage() {
    return (
        <div className="w-full h-screen flex justify-center absolute top-0 right-0 items-center bg-zinc-900 bg-opacity-40">
            <SpinnerDotted size={90} thickness={90} speed={100} color="rgba(255, 255, 255)" />
        </div>
    );
}

export default LoadingPage;
