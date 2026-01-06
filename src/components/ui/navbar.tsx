import { FiMenu } from "react-icons/fi"
import { useLocation } from "react-router-dom"

export default function NavBar() {
    const location = useLocation();
    const isHome = location.pathname === "/"
    const isCollectionDetails = location.pathname.startsWith("/collection/")

    return (
        <header className={`w-full ${(isHome || isCollectionDetails) ? "hidden" : ""} flex flex-row justify-between items-start px-7 py-7`}>
            <FiMenu size={20} color="black" />
            <div className="flex flex-col items-end gap-1 tracking-wider">
                <a href="https://www.instagram.com/bishal_ghimire07" className="flex flex-row items-center hover:font-semibold gap-2">
                    INSTAGRAM
                    <span className="text-lg text-blue-700">↗</span>
                </a>
                <a href="https://www.facebook.com/bishal.ghimire.9404362" className="flex flex-row hover:font-semibold items-center gap-2">
                    FACEBOOK
                    <span className="text-lg text-blue-700">↗</span>
                </a>
            </div>
        </header >
    )
}
