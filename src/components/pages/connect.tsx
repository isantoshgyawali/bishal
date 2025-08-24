import { useState } from "react"

export default function Connect() {
    const [fullName, setFullName] = useState('')
    const [about, setAbout] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState(false)

    const RequestType = () => {
        const requestType = [
            "Any Question?",
            "Project Discussion",
            "Request Service"
        ]

        return (
            requestType.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-row items-center gap-5 ${(index < (requestType.length - 1)) ? 'border-b border-gray-300 ' : ''} pb-5`}
                >
                    <div className="h-7 w-7 rounded-full border-2"></div>
                    <p className="text-3xl">{item}</p>
                </div>
            ))
        )
    }

    const InformationQuestions = () => {
        return (
            <>
                <input
                    type="text"
                    placeholder="Full Name / Company"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="text-3xl border-b border-gray-300 pb-5">
                </input>
                <textarea
                    placeholder="More about yourself"
                    value={about}
                    rows={3}
                    onChange={(e) => setAbout(e.target.value)}
                    className="text-3xl resize-none">
                </textarea>
            </>
        )
    }

    const ContactQuestions = () => {
        return (
            <>
                <input
                    type="text"
                    placeholder="Share Your Request"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`text-3xl border-b border-gray-300 pb-5`}>
                </input>

                <input
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-3xl border-b border-gray-300 pb-5">
                </input>

                <div className="max-w-md flex flex-row items-start gap-2">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                        className="mt-0.5 accent-blue-500"
                    />
                    <p className="text-xs text-[#1462A1]">
                        I hereby give my consent to receive emails at the email address provided, and I authorize
                        communication regarding updates, inquiries, or relevant information.
                    </p>
                </div>
            </>
        )
    }

    const ConnectPage = [
        {
            label: "01/03", content: RequestType, title: "Connect Me",
            description: "Let’s talk about potential collaborations or media opportunities!"
        },
        {
            label: "02/03", content: InformationQuestions, title: "Little about yourself",
            description: "Give us short Introduction about you"
        },
        {
            label: "03/03", content: ContactQuestions, title: "Something Else",
            description: "Let’s talk about potential collaborations or media opportunities!"
        }
    ]

    return (
        <div
            className="w-full h-[80vh] gap-x-10 flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
            style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}
        >
            {
                ConnectPage.map((item, index) => (
                    <div
                        key={index}
                        className="p-20 bg-black/5 h-full snap-start flex-shrink-0 min-w-[80vw] rounded-3xl"
                    >
                        <div className="flex flex-row w-full justify-between">
                            <p className="text-8xl text-[#1462A1]">{item.label}</p>
                            <div className="flex flex-col gap-5">
                                <item.content />
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="text-[#1462A1] text-xl mb-3">{item.title}</p>
                            <p className="underline text-3xl max-w-md">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
