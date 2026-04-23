import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Masonry from "react-masonry-css";
import { BASE_CDN_URL } from "./details";

export default function Resume() {
    const filters = [
        { id: '001', name: 'event' },
        { id: '002', name: 'street' },
        { id: '003', name: 'travel' },
        { id: '004', name: 'commercial' },
        { id: '005', name: 'portrait' }
    ];

    const [activeFilter, setActiveFilter] = useState('001');
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [emailError, setEmailError] = useState('');

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (email: string) => {
        setFormData({ ...formData, email });
        if (email && !validateEmail(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const isFormValid = formData.name && formData.email && formData.message && !emailError;

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_FORM_ACCESS_KEY,
                    subject: `Resume Connect - ${formData.name}`,
                    from_name: formData.name,
                    replyto: formData.email,
                    message: formData.message,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setSubmissionMessage("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmissionMessage("Error sending message");
            }
        } catch (error) {
            setSubmissionMessage("Network error occurred");
        } finally {
            setIsSubmitting(false);
            setShowToast(true);
        }
    };

    useEffect(() => {
        async function loadImages() {
            setLoading(true);
            setShowAll(false);
            try {
                const res = await fetch(`${BASE_CDN_URL}/${activeFilter}/gallery.json`);
                if (res.ok) {
                    const data = await res.json();
                    setImages(data.images || []);
                } else {
                    setImages([]);
                }
            } catch (err) {
                setImages([]);
            } finally {
                setLoading(false);
            }
        }
        loadImages();
    }, [activeFilter]);

    const breakpointCols = {
        default: 3,
        1536: 3,
        1280: 3,
        1024: 3,
        768: 2,
        640: 1
    };

    const displayedImages = showAll ? images : images.slice(0, 6);

    return (
        <div className="w-full min-h-screen bg-white text-black pb-24 overflow-y-auto">
            <style>{`
                .resume-container {
                    font-family: 'Short Stack', cursive;
                }
            `}</style>

            <div className="resume-container">
                <section id="start" className="max-w-4xl mx-auto px-8 md:px-16 pt-20 flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-black text-center md:text-left mt-2">Bishal Ghimire</h1>
                        <p className="mt-4 text-base text-black/60 leading-relaxed text-center md:text-left">
                            I am a passionate creator focused on capturing and delivering exceptional visual experiences.
                            Whether it's capturing breathtaking nature, dynamic events, compelling commercial
                            shots, or the raw essence of street photography, I bring stories to life through
                            my lens. I'm excited about collaborating on new and innovative projects.
                        </p>
                    </div>
                    <div className="w-64 h-64 shrink-0 rounded-3xl overflow-hidden shadow-sm">
                        <img
                            loading="eager"
                            src={`${BASE_CDN_URL}/r.webp`}
                            alt="Bishal Ghimire"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                <div className="relative max-w-4xl mx-auto px-8 md:px-16 mt-10">
                    <section id="experience" className="scroll-mt-8 mb-16 mt-4">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-lg tracking-tight font-semibold text-neutral-800 text-center whitespace-nowrap">experience</h2>
                            <div className="h-px flex-1 bg-neutral-200"></div>
                            <span className="text-[13px] text-neutral-500 font-medium whitespace-nowrap border border-neutral-200 px-3 py-1 rounded-full">2.5 Years</span>
                        </div>

                        <div className="flex flex-col gap-3 mt-6 pl-1">
                            <p className="text-[15px] text-neutral-700">- Content Producer / Photographer at <a href="https://www.ascribemedia.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#008080] hover:underline transition-all">@Ascribe Media</a></p>
                            <p className="text-[15px] text-neutral-700">- Content Creator at <a href="https://team11nepal.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#008080] hover:underline transition-all">@Team11</a></p>
                            <p className="text-[15px] text-neutral-700">- Product Videography</p>
                            <p className="text-[15px] text-neutral-700">- Freelancer</p>
                        </div>
                    </section>

                    <section id="worked-with" className="scroll-mt-8 mb-7 mt-10">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-lg tracking-tight font-semibold text-neutral-800 text-center whitespace-nowrap">worked with</h2>
                            <div className="h-px flex-1 bg-neutral-200"></div>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-4 mt-6 pl-1">
                            <a href="https://ultima.com.np/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-neutral-600 hover:text-[#008080] hover:underline transition-all font-medium flex items-center gap-1.5 capitalize">
                                Ultima <FiArrowUpRight size={14} />
                            </a>
                            <a href="https://kick.com.np/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-neutral-600 hover:text-[#008080] hover:underline transition-all font-medium flex items-center gap-1.5 capitalize">
                                Kick <FiArrowUpRight size={14} />
                            </a>
                            <a href="https://team11nepal.com/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-neutral-600 hover:text-[#008080] hover:underline transition-all font-medium flex items-center gap-1.5 capitalize">
                                Team 11 <FiArrowUpRight size={14} />
                            </a>
                            <a href="https://www.instagram.com/ktmgorkhas" target="_blank" rel="noopener noreferrer" className="text-[14px] text-neutral-600 hover:text-[#008080] hover:underline transition-all font-medium flex items-center gap-1.5 capitalize">
                                Kathmandu Gorkhas<FiArrowUpRight size={14} />
                            </a>
                            <a href="https://creators.usembassynepal.events/about" target="_blank" rel="noopener noreferrer" className="text-[14px] text-neutral-600 hover:text-[#008080] hover:underline transition-all font-medium flex items-center gap-1.5 capitalize">
                                Creator's Mela <FiArrowUpRight size={14} />
                            </a>
                            <a href="https://www.samsungplaza.com.np/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-neutral-600 hover:text-[#008080] hover:underline transition-all font-medium flex items-center gap-1.5 capitalize">
                                Samsung <FiArrowUpRight size={14} />
                            </a>
                            <a href="https://www.instagram.com/fog.wears/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-neutral-600 hover:text-[#008080] hover:underline transition-all font-medium flex items-center gap-1.5 capitalize">
                                FOG <FiArrowUpRight size={14} />
                            </a>
                        </div>
                    </section>

                    <section id="connect" className="scroll-mt-8 mb-16 mt-10">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-lg tracking-tight font-semibold text-neutral-800 text-center whitespace-nowrap">connect</h2>
                            <div className="h-px flex-1 bg-neutral-200"></div>
                            <div className="flex flex-wrap gap-6 mb-8 mt-6">
                                <a href="#" className="text-[13px] tracking-wide uppercase no-underline text-neutral-600 font-medium opacity-60 hover:opacity-100 hover:text-[#008080] transition-all duration-200 flex items-center gap-1.5">
                                    Instagram
                                    <FiArrowUpRight size={14} />
                                </a>
                                <a href="#" className="text-[13px] tracking-wide uppercase no-underline text-neutral-600 font-medium opacity-60 hover:opacity-100 hover:text-[#008080] transition-all duration-200 flex items-center gap-1.5">
                                    Facebook
                                    <FiArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>


                        <form className="flex flex-col gap-4 max-w-md" onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                placeholder="Name / Company"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full text-sm bg-transparent border-[1.5px] border-neutral-300 rounded outline-none px-3 py-2 text-neutral-600 focus:border-[#008080] transition-colors"
                                disabled={isSubmitting}
                            />
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={(e) => handleEmailChange(e.target.value)}
                                    className={`w-full text-sm bg-transparent border-[1.5px] ${emailError ? 'border-red-500' : 'border-neutral-300'} rounded outline-none px-3 py-2 text-neutral-600 focus:border-[#008080] transition-colors`}
                                    disabled={isSubmitting}
                                />
                                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                            </div>
                            <textarea
                                placeholder="Message"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full text-sm bg-transparent border-[1.5px] border-neutral-300 rounded outline-none px-3 py-2 text-neutral-600 focus:border-[#008080] transition-colors resize-none"
                                disabled={isSubmitting}
                            ></textarea>

                            {
                                (isFormValid || isSubmitting) && (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`self-start text-sm px-6 py-2 rounded transition-colors tracking-wide ${isSubmitting ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#008080] text-white hover:bg-opacity-90 cursor-pointer'}`}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                )}
                        </form>
                    </section>

                    <section id="gallery" className="scroll-mt-8 mb-16 mt-7">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-lg tracking-tight font-semibold text-neutral-800 text-center whitespace-nowrap">gallery</h2>
                            <div className="h-px flex-1 bg-neutral-200"></div>
                        </div>

                        {loading ? (
                            <div className="text-gray-500 py-4">Loading gallery…</div>
                        ) : images.length === 0 ? (
                            <div className="text-gray-500 py-4">No images available for {activeFilter}.</div>
                        ) : (
                            <>
                                <Masonry
                                    breakpointCols={breakpointCols}
                                    className="flex -ml-2 w-auto"
                                    columnClassName="pl-2 space-y-2"
                                >
                                    {displayedImages.map((name, index) => (
                                        <div key={index} className="break-inside-avoid">
                                            <img
                                                src={`${BASE_CDN_URL}/${activeFilter}/${name}`}
                                                alt={`${activeFilter} image ${index + 1}`}
                                                className="w-full h-auto object-contain rounded-lg"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    ))}
                                </Masonry>
                            </>
                        )}

                        <div className="mt-8 flex items-center justify-between text-[13px] overflow-x-auto w-full">
                            <div className="flex items-center gap-4">
                                {filters.map((filter) => (
                                    <button
                                        key={filter.id}
                                        type="button"
                                        onClick={() => setActiveFilter(filter.id)}
                                        className={`capitalize border-0 bg-transparent cursor-pointer transition-colors font-medium ${activeFilter === filter.id ? 'text-[#008080]' : 'text-neutral-500 hover:text-[#008080]'
                                            }`}
                                    >
                                        {filter.name}
                                    </button>
                                ))}
                            </div>
                            {images.length > 6 && (
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="border-0 bg-transparent cursor-pointer transition-colors font-medium text-neutral-500 hover:text-[#008080] whitespace-nowrap ml-4 flex items-center gap-1 text-xs"
                                >
                                    {showAll ? (
                                        <>Show less <FiChevronUp size={14} /></>
                                    ) : (
                                        <>Show more <FiChevronDown size={14} /></>
                                    )}
                                </button>
                            )}
                        </div>
                    </section>
                </div>
            </div>

            <div className={`
                fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 
                transition-all duration-500 ease-in-out
                ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}>
                <div className={`
                    px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 
                    ${submissionMessage.includes('Error') || submissionMessage.includes('Network') || submissionMessage.includes('Please') ? 'bg-red-500' : 'bg-[#333]'}
                `}>
                    <p className="text-white text-sm font-medium tracking-wide">
                        {submissionMessage}
                    </p>
                </div>
            </div>
        </div>
    );
}