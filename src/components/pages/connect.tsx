import ONE_IMG from "../../assets/contact-one.svg"
import TWO_IMG from "../../assets/contact-two.svg"
import THREE_IMG from "../../assets/contact-three.jpg"
import { useState, useRef } from "react"
import { FiCornerDownRight, FiCheckCircle } from "react-icons/fi"

interface FormData {
    selectedOption: string;
    fullName: string;
    aboutYourself: string;
    request: string;
    email: string;
    consent: boolean;
}

export default function Connect() {
    const OPTIONS = ["Any Questions?", "Project Discussion", "Request Service",];
    const aboutRef = useRef<HTMLTextAreaElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<FormData>({
        selectedOption: OPTIONS[0],
        fullName: '',
        aboutYourself: '',
        request: '',
        email: '',
        consent: false
    })
    const [emailError, setEmailError] = useState('')
    const scrollContainerRef = useRef<HTMLDivElement>(null)


    const scrollToPage = (pageIndex: number) => {
        if (scrollContainerRef.current) {
            const pageWidth = scrollContainerRef.current.offsetWidth
            scrollContainerRef.current.scrollTo({
                left: pageWidth * pageIndex,
                behavior: 'smooth'
            })
        }
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleEmailChange = (email: string) => {
        setFormData({ ...formData, email })
        if (email && !validateEmail(email)) {
            setEmailError('Please enter a valid email address')
        } else {
            setEmailError('')
        }
    }

    const handleSubmit = () => {
        if (formData.request && formData.email && validateEmail(formData.email) && formData.consent) {
            console.log('Form submitted:', formData)
            alert('Form submitted successfully!')
        }
    }

    const canSubmit = formData.request && formData.email && validateEmail(formData.email) && formData.consent

    const ConnectPage = [
        {
            image: ONE_IMG,
            title: 'Contact Me',
            message: "Let's talk about potential collaborations or media opportunities",
            component: (
                <div className="flex flex-col h-full max-w-96 justify-start py-12 mr-16">
                    {OPTIONS.map((opt, index) => {
                        const isSelected = formData.selectedOption === OPTIONS[index];
                        const isDimmed = formData.selectedOption && !isSelected;

                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    setFormData({ ...formData, selectedOption: OPTIONS[index] })
                                    setTimeout(() => {
                                        scrollToPage(1)
                                    }, 500)
                                }}
                                className={`
                                      flex flex-row items-center gap-5
                                      border-b-2 border-b-[#008080]/50 mb-5 pb-5
                                      cursor-pointer hover:bg-gray-50
                                      transition-all duration-300 px-2
                                      ${isDimmed ? "opacity-40" : "opacity-100"}
                                `}
                            >
                                {isSelected
                                    ? <FiCornerDownRight color="#008080" size={30} />
                                    : <div className="h-8 aspect-square rounded-full border-2 border-gray-400"></div>
                                }

                                <p className={`
                                    text-4xl transition-colors duration-300 
                                    ${isSelected ? "text-black font-bold" : "text-gray-400"}`}
                                >{opt}</p>
                            </div>
                        );
                    })}
                </div>
            )
        },
        {
            image: TWO_IMG,
            title: 'Little about yourself',
            message: 'Give us your short Introduction about you',
            component: (
                <div className="flex flex-col h-full max-w-96 justify-start py-12 mr-16">
                    <div className="mb-2">
                        <input
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value.slice(0, 20) })}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    aboutRef.current?.focus();
                                }
                            }}
                            placeholder="Full Name / Company"
                            className="py-5 placeholder-gray-500 border-b-2 border-b-[#008080]/50 text-3xl mb-1 w-full outline-none"
                            maxLength={20}
                        />
                        <p className="text-xs text-gray-400 text-end">{formData.fullName.length}/20 characters</p>
                    </div>
                    <div className="mb-2">
                        <textarea
                            ref={aboutRef}
                            value={formData.aboutYourself}
                            onChange={(e) => setFormData({ ...formData, aboutYourself: e.target.value.slice(0, 50) })}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && formData.fullName && formData.aboutYourself) {
                                    scrollToPage(2)
                                }
                            }}
                            placeholder="More about yourself"
                            className="py-5 placeholder-gray-500 text-3xl border-b-2 border-b-[#008080]/50 w-full outline-none resize-none"
                            maxLength={50}
                            rows={1}
                        />
                        <p className="text-xs text-gray-400 text-end">{formData.aboutYourself.length}/50 characters</p>
                    </div>
                </div>
            )
        },
        {
            image: THREE_IMG,
            title: "I'd Love to Hear From You",
            message: 'Your thoughts matter leave your email and request here',
            component: (
                <div className="flex max-w-96 flex-col h-full items-start justify-start py-12 mr-16">
                    <div className="w-full">
                        <input
                            value={formData.request}
                            onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault()
                                    emailRef.current?.focus()
                                }
                            }}
                            placeholder="Share your Request"
                            className="py-5 placeholder-gray-500 border-b-2 border-b-[#008080]/50 text-3xl mb-5 w-full outline-none"
                        />
                        <div>
                            <input
                                ref={emailRef}
                                value={formData.email}
                                onChange={(e) => handleEmailChange(e.target.value)}
                                placeholder="Email Address"
                                type="email"
                                className={`py-5 placeholder-gray-500 border-b-2 ${emailError ? 'border-b-red-500' : 'border-b-[#008080]/50'} text-3xl mb-2 w-full outline-none`}
                            />
                            {emailError && <p className="text-red-500 text-sm mb-3">{emailError}</p>}
                        </div>
                    </div>
                    <div
                        className="flex flex-row items-start gap-3 cursor-pointer mt-3"
                        onClick={() => setFormData({ ...formData, consent: !formData.consent })}
                    >
                        {
                            formData.consent
                                ? <div className={`w-10 aspect-square`}><FiCheckCircle color="#008080" size={20} className="mt-1" /></div>
                                : <div className={`w-10 aspect-square rounded-full border border-[#008080] mt-1`}></div>
                        }
                        <p className="text-xs text-[#008080]">
                            I hereby give my consent to receive emails at the email address provided, and I
                            authorize communication regarding updates, inquiries, or relevant information.
                        </p>
                    </div>
                    {canSubmit && (
                        <button
                            onClick={handleSubmit}
                            className="mt-5 px-5 self-end py-2 bg-[#008080] hover:bg-[#008080]/70 text-white text-xl transition-colors cursor-pointer"
                        >
                            Submit
                        </button>
                    )}
                </div>
            )
        },
    ]

    return (
        <div
            ref={scrollContainerRef}
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
                                alt={item.title}
                            />
                            <div className="mt-10">
                                <p className="text-[#008080] text-2xl mb-3">{item.title}</p>
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
