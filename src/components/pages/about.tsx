import { BASE_CDN_URL } from "./details";

export default function About() {
    return (
        <div className="">
            <main className="w-full px-6 md:px-16 lg:px-24 py-7">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
                    <div className="space-y-7">
                        {/* Main Heading */}
                        <div className="flex flex-col justify-center items-start gap-2">
                            <p className="text-[#008080] text-3xl">:: आत्मानम्  ::</p>
                        </div>

                        {/* Main Description */}
                        <p className="text-sm text-black text-start underline decoration-gray-300">
                            Myself Bishal Ghimire, I am a professional photographer with experience in event photography, street and travel photography,
                            commercial production, and portraiture. My work focuses on precision in composition, lighting, and timing
                            to create images that communicate stories effectively and resonate with audiences.
                        </p>

                        <blockquote className="text-xs text-gray-500">
                            Photography is how I tell stories. I work with light, composition, and timing to ensure each moment I capture becomes art that endures, connecting generations through its emotion.
                        </blockquote>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative overflow-hidden">
                        <div
                            className="absolute -right-5 -top-5 text-9xl font-black text-white z-10 rotate-180"
                            style={{
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed'
                            }}
                        >
                            2004
                        </div>

                        <div className="relative aspect-square rounded-4xl overflow-hidden saturate-50 grayscale-25">
                            <img
                                loading="eager"
                                src={`${BASE_CDN_URL}/about-image.webp`}
                                className="aspect-auto"
                            />
                        </div>

                        <div className="text-[#008080] text-4xl font-light mt-3 text-left">
                            しゅんかん
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}
