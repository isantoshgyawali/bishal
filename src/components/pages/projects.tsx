import EVENT_PHOTOGRAPHY from "../../assets/event-photography.jpg"
import STREET_CAPTURES from "../../assets/street-captures.jpg"
import TRAVEL_AND_LANDSCAPE from "../../assets/travel-and-landscape.jpg"
import COMMERCIAL_PRODUCTION from "../../assets/commercial-production.jpg"
import PORTRAIT_AND_LIFESTYLE from "../../assets/portrait-and-lifestyle.jpg"

export default function Projects() {
    return (
        <div className="p-7 flex flex-row justify-start items-start">
            <div className="w-fit">
                <div>
                    <p>projects</p>
                    {/* // icons */}
                </div>
                <div className="flex flex-col [&>p]:text-sm mt-5 tracking-wider">
                    <p>001 &nbsp;&nbsp; Event Photography</p>
                    <p>002 &nbsp;&nbsp; Street Captures</p>
                    <p>003 &nbsp;&nbsp; Travel & Landscape</p>
                    <p>004 &nbsp;&nbsp; Commercial Production</p>
                    <p>005 &nbsp;&nbsp; Portrait & Lifestyle</p>
                </div>
            </div>
            <div
                className="
                    group ml-auto mr-auto flex w-fit flex-col 
                    [&>img]:w-[25rem] [&>img]:h-[15vh] [&>img]:object-cover [&>img]:object-bottom 
                    [&>img]:saturate-0 [&>img]:hover:saturate-100 [&>img]:hover:h-[17vh] [&>img]:hover:w-[22rem]
                    [&>img]:group-hover:object-top
                    [&>img]:transition-all [&>img]:duration-[1200ms] gap-2
                "
            >
                <img src={EVENT_PHOTOGRAPHY} className="-translate-x-9" />
                <img src={STREET_CAPTURES} />
                <img src={TRAVEL_AND_LANDSCAPE} className="-translate-x-5" />
                <img src={COMMERCIAL_PRODUCTION} className="translate-x-5" />
                <img src={PORTRAIT_AND_LIFESTYLE} className="-translate-x-12" />
            </div>
        </div>
    )
}
