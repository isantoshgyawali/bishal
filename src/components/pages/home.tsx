import { Link } from "react-router-dom"
import { BASE_CDN_URL } from "./details"
import { FiArrowUpRight } from "react-icons/fi"

export default function AboutPage() {
    return (
        <div className="h-dvh w-dvw flex bg-[#008080]">
            <div className="w-64 hidden lg:flex flex-col px-7 pt-20 relative">
                <nav className="flex flex-col gap-3 text-lg tracking-wide">
                    <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">ABOUT</Link>
                    <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">PORTFOLIO</Link>
                    <Link to="/connect" className="text-gray-300 hover:text-white transition-colors text-sm">CONNECT</Link>
                </nav>
                <p className="absolute text-white text-6xl font-black tracking-widest [writing-mode:vertical-lr] rotate-180 -right-2.5 -bottom-2">
                    BISHAL GHIMIRE
                </p>
            </div>

            <div className="bg-white mt-2 mr-2 ml-2 lg:ml-0 rounded-t-[1rem] flex flex-1 items-center justify-center">
                <img
                    loading="eager"
                    src={`${BASE_CDN_URL}/assets/home-image.png`}
                    alt="Bishal Ghimire"
                    className="self-end min-h-[30rem] max-h-11/12 md:max-h-11/12 lg:max-h-max lg:h-full w-auto object-cover lg:mr-10"
                    decoding="async"
                />

                <div className="absolute bottom-5 right-12 hidden lg:flex flex-col items-end gap-3 text-black text-lg tracking-wider">
                    <a
                        href="https://www.instagram.com/bishal.arw/"
                        className="flex items-center hover:font-semibold gap-2"
                        target="_blank"
                    >
                        INSTAGRAM
                        <FiArrowUpRight color="#008080" size={18} />
                    </a>
                    <a
                        href="https://www.facebook.com/bishal.ghimire.9404362"
                        className="flex items-center hover:font-semibold gap-2"
                        target="_blank"
                    >
                        FACEBOOK
                        <FiArrowUpRight color="#008080" size={18} />
                    </a>
                </div>
            </div>
        </div>
    )
}
