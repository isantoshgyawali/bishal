import { useState, useRef, useEffect } from "react"
import { FiCornerDownRight, FiCheckCircle } from "react-icons/fi"
import CONTACT_ONE from "../../assets/contact-one.webp"
import CONTACT_TWO from "../../assets/contact-two.webp"
import CONTACT_THREE from "../../assets/contact-three.webp"

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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        selectedOption: OPTIONS[0],
        fullName: '',
        aboutYourself: '',
        request: '',
        email: '',
        consent: false
    })
    const [emailError, setEmailError] = useState('')
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);


    const scrollToPage = (pageIndex: number) => {
        if (scrollContainerRef.current) {
            const pageWidth = scrollContainerRef.current.offsetWidth
            scrollContainerRef.current.scrollTo({
                left: pageWidth * pageIndex,
                behavior: 'smooth'
            })
        }
    }

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const width = scrollContainerRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
        }
    };

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

    const handleSubmit = async () => {
        if (formData.request && formData.email && validateEmail(formData.email) && formData.consent) {
            setIsSubmitting(true);
            setSubmissionMessage('Sending...');

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: import.meta.env.VITE_FORM_ACCESS_KEY,
                        subject: `Contact Form - ${formData.selectedOption}`,
                        from_name: formData.fullName,
                        replyto: formData.email,
                        message: `
                            Option: ${formData.selectedOption}
                            Name/Company: ${formData.fullName ?? ""}
                            About: ${formData.aboutYourself ?? ""}
                            Request: ${formData.request}
                        `
                    }),
                });

                const result = await response.json();
                if (result.success) {
                    setSubmissionMessage('Thanks! We have received your message.');
                    setShowToast(true);
                    setFormData({
                        selectedOption: OPTIONS[0],
                        fullName: '',
                        aboutYourself: '',
                        request: '',
                        email: '',
                        consent: false
                    })
                } else {
                    setSubmissionMessage('Error sending message. Please try again.');
                    setShowToast(true);
                    console.error("Web3Forms Error:", result);
                }
            } catch (error) {
                setSubmissionMessage('Network error. Please try again.');
                setShowToast(true);
                console.error("Submission Error:", error);
            } finally {
                setIsSubmitting(false);
            }
        }
    }

    const canSubmit = formData.request && formData.email && validateEmail(formData.email) && formData.consent

    const ConnectPage = [
        {
            image: CONTACT_ONE,
            title: 'Hi there!',
            message: "What brought you here - question, idea, collaboration?",
            component: (
                <div className="flex flex-col h-full w-full lg:max-w-96 justify-start py-12 mr-16">
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
                                      flex flex-row items-center gap-4
                                      border-b-1 border-b-[#008080]/50 mb-5 pb-5
                                      cursor-pointer hover:bg-gray-50
                                      transition-all duration-300
                                      ${isDimmed ? "opacity-40" : "opacity-100"}
                                `}
                            >
                                {isSelected
                                    ? <FiCornerDownRight color="#008080" size={30} />
                                    : <div className="h-8 aspect-square rounded-full border-2 border-gray-400"></div>
                                }

                                <p className={`
                                    text-3xl lg:text-4xl transition-colors duration-300 
                                    ${isSelected ? "text-black" : "text-gray-400"}`}
                                >{opt}</p>
                            </div>
                        );
                    })}
                </div>
            )
        },
        {
            image: CONTACT_TWO,
            title: 'Little about you',
            message: 'Few words on your background, interests or current project',
            component: (
                <div className="flex flex-col h-full w-full lg:max-w-96 justify-start py-3 lg:py-10 mr-16">
                    <div className="mb-2">
                        <input
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value.slice(0, 30) })}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    aboutRef.current?.focus();
                                }
                            }}
                            placeholder="Full Name / Company"
                            className="py-3 placeholder-gray-300 border-b-1 border-b-[#008080]/50 text-3xl mb-1 w-full outline-none"
                            maxLength={30}
                        />
                        <p className="text-xs text-gray-400 text-end">{formData.fullName.length}/30 characters</p>
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
                            className="py-3 placeholder-gray-300 text-3xl border-b-1 border-b-[#008080]/50 w-full outline-none resize-none"
                            maxLength={50}
                            rows={1}
                        />
                        <p className="text-xs text-gray-400 text-end">{formData.aboutYourself.length}/50 characters</p>
                    </div>
                </div>
            )
        },
        {
            image: CONTACT_THREE,
            title: "Let's Connect",
            message: 'Share idea, ask questions or let us know your thoughts here',
            component: (
                <div className="flex w-full lg:max-w-96 flex-col h-full items-start justify-start py-3 lg:py-10 mr-16">
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
                            className="py-3 placeholder-gray-300 border-b-1 border-b-[#008080]/50 text-3xl mb-3 w-full outline-none"
                        />
                        <div>
                            <input
                                ref={emailRef}
                                value={formData.email}
                                onChange={(e) => handleEmailChange(e.target.value)}
                                placeholder="Email Address"
                                type="email"
                                className={`py-3 placeholder-gray-300 border-b-1 ${emailError ? 'border-b-red-500' : 'border-b-[#008080]/50'} text-3xl mb-2 w-full outline-none`}
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
                                ? <div className={`h-5 aspect-square`}><FiCheckCircle color="#008080" size={20} className="mt-1" /></div>
                                : <div className={`h-5 aspect-square rounded-full border border-black/50 mt-1`}></div>
                        }
                        <p className={`text-xs ${formData.consent ? "text-[#008080]" : "text-gray-500"}`}>
                            I hereby give my consent to receive emails at the email address provided, and I
                            authorize communication regarding updates, inquiries, or relevant information.
                        </p>
                    </div>
                    {canSubmit && (
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`mt-5 px-5 self-end py-2 bg-[#008080] text-white text-xl transition-colors cursor-pointer ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-[#008080]/70'}`}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                    )}
                </div >
            )
        },
    ]

    return (
        <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
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
                        className="flex flex-col lg:gap-10 lg:flex-row justify-between px-7 lg:px-20 lg:py-10 snap-start flex-shrink-0 w-full"
                    >
                        <div className="flex flex-col-reverse lg:flex-col justify-center items-start gap-5">
                            <img
                                loading="eager"
                                fetchPriority="high"
                                src={item.image}
                                className="h-9/12 max-h-96 min-h-80 lg:h-96 aspect-auto self-center object-contain"
                                alt={item.title}
                            />
                            <div className="flex flex-col gap-2">
                                <p className="text-black/60 text-5xl font-black">{item.title}</p>
                                <p className="text-[#008080] text-xs max-w-lg">{item.message}</p>
                            </div>
                        </div>

                        {item.component}
                        <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center gap-3">
                            {ConnectPage.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => scrollToPage(index)}
                                    className={`
                                        cursor-pointer transition-all duration-400 rounded-full
                                        ${activeIndex === index
                                            ? 'bg-[#008080]/50 w-7 h-1.5'
                                            : 'bg-gray-300 w-1 h-1 hover:bg-gray-400'}
                                    `}
                                />
                            ))}
                        </div>
                    </div>
                ))
            }

            {/* Toast Notification */}
            <div className={`
                fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 
                transition-all duration-500 ease-in-out
                ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}>
                <div className={`
                    px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 
                    ${submissionMessage.includes('Error') || submissionMessage.includes('Network') ? 'bg-red-500' : 'bg-[#333]'}
                `}>
                    <p className="text-white text-sm font-medium tracking-wide">
                        {submissionMessage}
                    </p>
                </div>
            </div>
        </div>
    )
}
