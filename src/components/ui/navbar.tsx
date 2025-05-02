import { FiFacebook, FiInstagram, FiArrowDownRight } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <header className="w-full md:fixed z-50 flex flex-row justify-between items-center px-7 py-5">
            <div className="flex flex-row items-center gap-x-2">
                <p className="text-[clamp(2rem,6vw,4rem)] font-bold">welcome</p>
                <span className="h-[min(2vw,1.5rem)] aspect-video rounded-full bg-blue-500"></span>
            </div>
            <div className="flex flex-row items-center justify-between gap-x-12">
                <div className="flex flex-row gap-5 md:gap-0 md:flex-col items-start justify-center">
                    <Link to="/about" className="text-base font-bold">About</Link>
                    <Link to="/work" className="text-base font-bold">Work</Link>
                </div>

                {/* social-profiles */}
                <div className="hidden flex-row gap-x-5 md:flex">
                    <a href="https://www.instagram.com/bishal_ghimire07">
                        <FiInstagram size={23} color="#000a" />
                    </a>
                    <a href="https://www.facebook.com/bishal.ghimire.9404362">
                        <FiFacebook size={23} color="#000a" />
                    </a>
                </div>

                <div className="hidden md:flex flex-row items-center justify-center gap-x-5 bg-black rounded-4xl px-5 py-1.5">
                    <Link to="/connect" className="text-white text-lg font-normal">connect</Link>
                    <FiArrowDownRight size={20} color="#fff" />
                </div>
            </div>
        </header>
    )
}
