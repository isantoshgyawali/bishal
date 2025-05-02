import { FiFacebook, FiInstagram, FiArrowDownRight } from "react-icons/fi"

export default function NavBar() {
    return (
        <header className="w-full fixed flex flex-row justify-between items-center px-7 py-5">
            <div className="flex flex-row items-end gap-x-1">
                <p className="text-3xl font-bold">welcome</p>
                <span className="h-2 aspect-square mb-2 rounded-full bg-blue-500"></span>
            </div>
            <div className="flex flex-row items-center justify-between gap-x-12">
                <div className="flex-col items-start justify-center">
                    <p className="text-base font-bold">About</p>
                    <p className="text-base font-bold">Work</p>
                </div>

                {/* social-profiles */}
                <div className="flex flex-row gap-x-5">
                    <FiInstagram size={23} color="#000a" href="https://www.instagram.com/bishal_ghimire07"/>
                    <FiFacebook size={23} color="#000a" href="https://www.facebook.com/bishal.ghimire.9404362"/>
                </div>

                <div className="flex flex-row items-center justify-center gap-x-5 bg-black rounded-4xl px-5 py-1.5">
                    <p className="text-white text-lg font-normal">connect</p>
                    <FiArrowDownRight size={20} color="#fff"/>
                </div>
            </div>
        </header>
    )
}
