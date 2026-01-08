import EVENT_PHOTOGRAPHY from "../../assets/event-photography.jpg"
import STREET_CAPTURES from "../../assets/street-captures.jpg"
import TRAVEL_AND_LANDSCAPE from "../../assets/travel-and-landscape.jpg"
import COMMERCIAL_PRODUCTION from "../../assets/commercial-production.jpg"
import PORTRAIT_AND_LIFESTYLE from "../../assets/portrait-and-lifestyle.jpg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Portfolio() {
    const navigate = useNavigate()
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const portfolios = [
        { number: "001", title: "Event Photography", image: EVENT_PHOTOGRAPHY, translate: "-translate-x-9" },
        { number: "002", title: "Street Captures", image: STREET_CAPTURES, translate: "" },
        { number: "003", title: "Travel & Landscape", image: TRAVEL_AND_LANDSCAPE, translate: "-translate-x-5" },
        { number: "004", title: "Commercial Production", image: COMMERCIAL_PRODUCTION, translate: "translate-x-5" },
        { number: "005", title: "Portrait & Lifestyle", image: PORTRAIT_AND_LIFESTYLE, translate: "-translate-x-12" }
    ]

    return (
        <div className="p-7 flex flex-row justify-start items-start">
            <div className="flex flex-col [&>p]:text-sm gap-1.5 tracking-wider w-80 mt-24">
                {portfolios.map((portfolio, index) => (
                    <p
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => navigate(`/portfolio/${portfolio.number}`)}
                        className={`cursor-pointer transition-all duration-300 ${hoveredIndex === null
                            ? "text-gray-500"
                            : hoveredIndex === index
                                ? "text-[#008080] font-bold"
                                : "text-gray-500"
                            }`}
                    >
                        {portfolio.number} &nbsp;&nbsp; {portfolio.title}
                    </p>
                ))}
            </div>
            <div
                className={`
                    flex flex-col group ml-auto mr-auto w-fit gap-1

                    ${/* Unhovered state for every child image*/ true}
                    [&>img]:w-[23rem] [&>img]:h-[15vh] 
                    [&>img]:object-cover [&>img]:object-bottom [&>img]:saturate-0 
                    [&>img]:transition-all [&>img]:duration-[1000ms] [&>img]:cursor-pointer
                `}
                style={{

                }}
            >
                {portfolios.map((portfolio, index) => (
                    <img
                        key={index}
                        src={portfolio.image}
                        alt={portfolio.title}
                        className={
                            portfolio.translate + " " +
                            `${hoveredIndex !== null ? "!h-[13vh] !translate-0" : ""}` + " " +
                            `${hoveredIndex === index ? "!h-[25vh] !saturate-100" : ""}` + " " +
                            `${hoveredIndex !== null ? "!object-center" : ""}`
                        }
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => navigate(`/portfolio/${portfolio.number}`)}
                    />
                ))}
            </div>
        </div >
    )
}
