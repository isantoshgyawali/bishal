import HOME_PAGE_IMG from "../../assets/home-image.jpeg"
export default function HomePage() {
    return (
        <div className="h-dvh w-dvw px-12 flex flex-row justify-between items-center relative">
            <p className="max-w-64 mb-48">
                There is something something out there that you want to say and express but can’t because you are regulated by the nature and surrounding of you and sometimes keeping it within you makes you, you
            </p>
            <div className="absolute inset-0 flex justify-center items-center -z-10">
                <img src={HOME_PAGE_IMG} className="max-h-dvh w-auto scale-110" />
            </div>
            <div className="flex flex-col items-end justify-center translate-y-32">
                <p className="text-8xl font-bold text-gray-600 transform scale-x-[-1]">BISHAL</p>
                <p className="text-8xl font-bold text-gray-800">GHIMIRE</p>
            </div>
        </div>
    )
}
