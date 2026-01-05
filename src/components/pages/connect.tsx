import ONE_IMG from "../../assets/contact-one.svg"
import TWO_IMG from "../../assets/contact-two.svg"
import THREE_IMG from "../../assets/contact-three.jpg"

interface ConnectPageProps {
    image: string;
    title: string;
    message: string;
    component: JSX.Element
}

export default function Connect() {
    const ConnectPage: ConnectPageProps[] = [
        {
            image: ONE_IMG,
            title: 'Contact Me',
            message: "Let's talk about potential collaborations or media oppurtunities",
            component: (
                <div className="flex flex-col h-full max-w-96 justify-start py-12 mr-16">
                    <div className="flex flex-row items-start gap-5 border-b-2 border-b-[#1462A1]/50 mb-5 pb-5 cursor-pointer">
                        {
                            true
                                ? <div className="h-10 aspect-square rounded-full border-2"></div>
                                : <div className="h-12 w-12 rounded-full"></div>
                        }
                        <p className="text-4xl">Any Questions?</p>
                    </div>
                    <div className="flex flex-row items-center gap-5 border-b-2 border-b-[#1462A1]/50  mb-5 pb-5 cursor-pointer">
                        {
                            true
                                ? <div className="h-10 aspect-square rounded-full border-2"></div>
                                : <div className="h-12 w-12 rounded-full"></div>
                        }
                        <p className="text-4xl">Project Discussion</p>
                    </div>
                    <div className="flex flex-row items-center gap-5 cursor-pointer">
                        {
                            true
                                ? <div className="h-10 aspect-square rounded-full border-2"></div>
                                : <div className="h-12 w-12 rounded-full"></div>
                        }
                        <p className="text-4xl">Request Service</p>
                    </div>
                </div>
            )
        },
        {
            image: TWO_IMG,
            title: 'Little about yourself',
            message: 'Give us your short Introduction abou you',
            component: (
                <div className="flex flex-col h-full max-w-96 justify-start py-12 mr-16">
                    <input
                        onChange={() => { }}
                        placeholder="Full Name / Company"
                        className="py-5 placeholder-black border-b-2 border-b-[#1462A1]/50 text-3xl mb-5"
                    />
                    <input
                        multiple
                        placeholder="More about yourself"
                        onChange={() => { }}
                        className="py-5 placeholder-black text-3xl border-b-2 border-b-[#1462A1]/50"
                    />
                </div>
            )
        },
        {
            image: THREE_IMG,
            title: "I'd Love to Hear From You",
            message: 'Your thoughts matter leave your email and request here',
            component: (
                <div className="flex max-w-96 flex-col h-full items-start justify-start py-12 mr-16">
                    <div>
                        <input
                            onChange={() => { }}
                            placeholder="Share your Request"
                            className="py-5 placeholder-black border-b-2 border-b-[#1462A1]/50 text-3xl mb-5"
                        />
                        <input
                            onChange={() => { }}
                            placeholder="Email Address"
                            className="py-5 placeholder-black border-b-2 border-b-[#1462A1]/50 text-3xl mb-5"
                        />
                    </div>
                    <div className="flex flex-row items-start gap-3">
                        <div className="w-10 aspect-square rounded-full border border-[#1462A1] mt-1"></div>
                        <p className="text-xs text-[#1462A1]">
                            I hereby give my consent to receive emails at the email address provided, and I
                            authorize communication regarding updates, inquiries, or relevant information.
                        </p>
                    </div>
                </div>
            )
        },
    ]

    return (
        <div
            className="w-full flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
            style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}
        >
            {
                ConnectPage.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-row justify-between p-20 snap-start flex-shrink-0 w-full mx-10 rounded-3xl"
                    >
                        <div className="flex flex-col justify-center items-start">
                            <img
                                src={item.image}
                                className="h-80 aspect-auto"
                            />
                            <div className="mt-10">
                                <p className="text-[#1462A1] text-2xl mb-3">{item.title}</p>
                                <p className="underline text-gray-500 text-3xl max-w-md">{item.message}</p>
                            </div>
                        </div>

                        {item.component}
                    </div>
                ))
            }
        </div>
    )
}
