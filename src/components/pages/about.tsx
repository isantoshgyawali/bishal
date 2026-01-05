import ABOUT_IMAGE from "../../assets/about-image.jpg"

export default function About() {
    return (
        <div className="">
            <main className="px-6 md:px-16 lg:px-24 py-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
                    <div className="space-y-7">
                        {/* Main Heading */}
                        <div className="flex flex-row items-end gap-3">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-blue-600">
                                \ātmānam
                            </h1>
                            <p className="text-gray-600 text-lg">[आत्मानम्]</p>
                        </div>

                        {/* Main Description */}
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed underline">
                            I capture the essence of time through my lens, celebrating the beauty of moments that whisper stories of our shared human experience.
                        </p>

                        {/* Quote */}
                        <blockquote className="text-base md:text-lg text-blue-600">
                            "Every frame tells a story - I master light, composition, and timing to ensure yours becomes unforgettable art that speaks across generations."
                        </blockquote>

                        {/* Mobile Social Links */}
                        <div className="flex md:hidden items-center gap-6 pt-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        {/* Year Label */}
                        <div 
                            className="absolute -right-6 -top-5 text-9xl font-black text-white z-10 rotate-180"
                            style={{
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed'
                            }}
                        >
                            2004
                        </div>

                        {/* Image Container */}
                        <div className="relative aspect-square bg-gray-300 rounded-4xl overflow-hidden saturate-50 grayscale-100">
                            <img
                                src={ABOUT_IMAGE}
                                className="aspect-auto"
                            />
                        </div>

                        <div className="text-blue-600 text-4xl font-light mt-3 text-center md:text-left">
                            しゅんかん
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}
