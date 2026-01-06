import { Link } from "react-router-dom"
import HOME_PAGE_IMG from "../../assets/home-image.png"
export default function AboutPage() {
    return (
        <div className="h-dvh w-dvw flex bg-[#008080]">
            <div className="w-64 flex flex-col px-7 pt-20 relative">
                <nav className="flex flex-col gap-3 text-lg tracking-wide">
                    <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">ABOUT</Link>
                    <Link to="/collection" className="text-gray-300 hover:text-white transition-colors text-sm">COLLECTION</Link>
                    <Link to="/connect" className="text-gray-300 hover:text-white transition-colors text-sm">CONNECT</Link>
                </nav>
                <p className="absolute text-white text-6xl font-bold tracking-widest [writing-mode:vertical-lr] rotate-180 -right-2.5 -bottom-2">
                    BISHAL GHIMIRE
                </p>
            </div>

            <div className="bg-white mt-2 mr-2 rounded-t-[1rem] flex flex-1 items-center justify-center">
                <img
                    src={HOME_PAGE_IMG}
                    alt="Bishal Ghimire"
                    className="h-full w-auto object-cover mr-10"
                />

                <div className="absolute bottom-5 right-12 flex flex-col items-end gap-3 text-black text-lg tracking-wider">
                    <a href="https://www.instagram.com/bishal_ghimire07" className="flex items-center hover:font-semibold gap-2">
                        INSTAGRAM
                        <span className="text-lg text-[#008080]">↗</span>
                    </a>
                    <a href="" className="flex items-center hover:font-semibold gap-2">
                        FACEBOOK
                        <span className="text-lg text-[#008080]">↗</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
