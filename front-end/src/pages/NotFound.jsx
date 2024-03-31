import React from "react";

const NotFound = () => {
    return (
        <>
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="text-slate-600 text-center border-2 rounded-xl shadow-lg mb-8">
                    <h1 className="text-4xl font-extrabold py-16 px-32">
                        404 - Page Not Found!
                    </h1>
                </div>
                <a
                    href="http://localhost:5173"
                    className="transition duration-300 ease-in-out bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline hover:cursor-pointer"
                >
                    Back Home
                </a>
            </div>
        </>
    );
};

export default NotFound;
