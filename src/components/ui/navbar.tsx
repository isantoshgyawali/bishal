import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Menu from "../pages/menu";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false)

    const isHome = location.pathname === "/"
    const isPortfolioDetails = location.pathname.startsWith("/portfolio/")

    return (
        <>
            <header className={`w-full ${isHome ? "fixed lg:hidden" : ""} ${isPortfolioDetails ? "hidden" : ""} flex flex-row justify-between items-start px-7 py-7`}>
                <div className="flex flex-row items-center gap-3">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="hover:opacity-70 hover:rotate-x-180 duration-500 transition-all cursor-pointer"
                    >
                        <HiOutlineMenuAlt4 size={24} color="black" />
                    </button>
                    {
                        isHome &&
                        <p
                            className="text-xl flex lg:hidden text-[#008080] font-light tracking-wider"
                                onClick={() => navigate('/portfolio')}
                        >
                            portfolio.
                        </p>
                    }
                </div>

                <div className="flex flex-col items-end gap-1 tracking-wider">
                    <a
                        href="https://www.instagram.com/bishal.arw"
                        className="flex flex-row items-center hover:font-semibold gap-2"
                        target="_blank"
                    >
                        INSTAGRAM
                        <FiArrowUpRight color="#008080" size={18} />
                    </a>
                    <a
                        href="https://www.facebook.com/bishal.ghimire.9404362"
                        className="flex flex-row hover:font-semibold items-center gap-2"
                        target="_blank"
                    >
                        FACEBOOK
                        <FiArrowUpRight color="#008080" size={18} />
                    </a>
                </div>
            </header >
            {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
        </>
    )
}
