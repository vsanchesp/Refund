import { Outlet } from "react-router";

import logoSvg from "../assets/logo.svg"

export function AuthLayout() {
    return(
        <div className=" w-screen h-screen bg-gray-600 flex flex-col justify-center items-center text-gray-100">
            <main className="bg-gray-400 p-8 rounded-md flex items-center flex-col md:min-w-[462px]">
                <img src={logoSvg} alt="Logo" className="my-8"/>
                <Outlet />
            </main>
        </div>
    )
}