import React from "react"
import SSKHome from "../assets/SSK-home.jpg"

export const HomeView = () => {
    return (
        <div className="relative">
            <img
                src={SSKHome}
                alt="Group of kids"
                className="w-full object-cover max-h-[500px] sm:max-h-[550px] md:max-h-[600px]"
            />


            <div className="absolute top-6 left-4 w-[90%] sm:left-12 sm:w-[80%] md:max-w-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white animate-[var(--animate-fade-in)]">
                    Empowering kids to <br className="block sm:hidden" />
                    love the skin they’re in.
                </h1>
                {/* <p className="mt-2 text-xs sm:text-sm md:text-base text-white animate-[var(--animate-fade-in)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
                    An educational afterschool program on dermatology, diversity, and self-esteem.
                </p> */}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-8 sm:h-8 bg-gradient-to-b from-transparent to-[#F0E9D8] pointer-events-none" />
        </div>
    )
}


