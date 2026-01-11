import { useState } from "react";
import { FiMenu } from "react-icons/fi"
import { useLocation } from "react-router-dom"
import Menu from "../pages/menu";
import { BiMenuAltLeft } from "react-icons/bi";

export default function NavBar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false)

    const isHome = location.pathname === "/"
    const isPortfolioDetails = location.pathname.startsWith("/portfolio/")

    return (
        <>
            <header className={`w-full ${(isHome || isPortfolioDetails) ? "hidden" : ""} flex flex-row justify-between items-start px-7 py-7`}>
                <button
                    onClick={() => setMenuOpen(true)}
                    className="hover:opacity-70 transition-opacity cursor-pointer"
                >
                    <BiMenuAltLeft size={24} color="black" />
                </button>

                <div className="flex flex-col items-end gap-1 tracking-wider">
                    <a
                        href="https://www.instagram.com/bishal.arw"
                        className="flex flex-row items-center hover:font-semibold gap-2"
                        target="_blank"
                    >
                        INSTAGRAM
                        <span className="text-lg text-[#008080]">↗</span>
                    </a>
                    <a
                        href="https://www.facebook.com/bishal.ghimire.9404362"
                        className="flex flex-row hover:font-semibold items-center gap-2"
                        target="_blank"
                    >
                        FACEBOOK
                        <span className="text-lg text-[#008080]">↗</span>
                    </a>
                </div>
            </header >
            {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
        </>
    )
}
