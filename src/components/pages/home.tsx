import { FiArrowDownRight, FiFacebook, FiInstagram } from "react-icons/fi"
import HOME_PAGE_IMG from "../../assets/home-image.jpg"
import { Link } from "react-router-dom"
export default function HomePage() {
    return (
        <div className="h-[93dvh] md:h-dvh w-dvw px-10 md:px-12 py-7 md:py-0 flex flex-col justify-start items-end  md:flex-row-reverse md:justify-between md:items-center relative flex-wrap">
            <div className="flex flex-col items-end md:justify-center md:self-end md:-translate-y-20">
                <p className="text-[clamp(2.5rem,10vw,6rem)] font-bold text-gray-500 transform scale-x-[-1] text-start leading-12 md:leading-none">BISHAL</p>
                <p className="text-[clamp(2.5rem,10vw,6rem)] font-bold text-gray-800 text-end">GHIMIRE</p>

                <div className="flex flex-row items-center justify-end gap-3 md:hidden mb-5">
                    <div className="flex flex-row gap-x-5">
                        <a href="https://www.instagram.com/bishal_ghimire07">
                            <FiInstagram size={20} color="#000a" />
                        </a>
                        <a href="https://www.facebook.com/bishal.ghimire.9404362">
                            <FiFacebook size={20} color="#000a" />
                        </a>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-x-2 bg-black rounded-2xl px-3 py-1.5">
                        <Link to="/connect" className="text-white text-[clamp(0.75rem, 1vw, 2rem)] font-normal">connect</Link>
                        <FiArrowDownRight size={15} color="#fff" />
                    </div>
                </div>
            </div>
            <p className="max-w-96 self-start md:self-auto md:max-w-64 text-gray-400 text-[clamp(0.75rem,3vw,1.25rem)]">
                You carry a universe of unsaid words—stories too vast for language, written not for the world, but for your soul to understand.
            </p>

            {/* No relation to visual hierarchy and box model - this is independent  */}
            <div className="absolute inset-0 flex justify-center items-end md:items-center -z-10">
                <img src={HOME_PAGE_IMG} className="h-[60dvh] md:h-dvh w-dvw max-w-64 min-w-fit" />
            </div>
        </div>
    )
}
