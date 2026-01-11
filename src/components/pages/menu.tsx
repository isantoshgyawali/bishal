import { Link } from "react-router-dom"
import { useState } from "react"
import { FiX } from "react-icons/fi"

type MenuProps = {
    onClose: () => void
}

export default function Menu({ onClose }: MenuProps) {
    const [hoveredRoute, setHoveredRoute] = useState<string | null>(null)
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

    const routes = [
        { path: "/", label: "HOME", number: "01" },
        { path: "/about", label: "ABOUT", number: "02" },
        { path: "/portfolio", label: "PORTFOLIO", number: "03" },
        { path: "/connect", label: "CONNECT", number: "04" },
    ]

    const socialLinks = [
        {
            name: "INSTAGRAM",
            url: "https://www.instagram.com/bishal.arw/",
            handle: "@bisha.arw"
        },
        {
            name: "FACEBOOK",
            url: "https://www.facebook.com/bishal.ghimire.9404362",
            handle: "Bishal Ghimire"
        },
    ]

    return (
        <div className="fixed inset-0 bg-[#008080] z-50 flex flex-col items-center justify-center overflow-hidden">
            <button
                className="absolute top-7 right-7 text-white/60 hover:text-white transition-all duration-300 hover:rotate-90 z-50"
                onClick={onClose}
            >
                <FiX size={32} strokeWidth={1.5} />
            </button>

            <nav className="w-full relative z-10 flex flex-col items-center justify-center gap-4">
                {routes.map((route) => (
                    <Link
                        key={route.path}
                        to={route.path}
                        onClick={onClose}
                        onMouseEnter={() => setHoveredRoute(route.path)}
                        onMouseLeave={() => setHoveredRoute(null)}
                        className="group relative flex flex-col items-center"
                    >
                        <span
                            className={`
                                text-sm font-light tracking-[0.3em] mb-2
                                transition-all duration-500
                                ${hoveredRoute === route.path
                                    ? "text-white opacity-100 translate-y-0"
                                    : "text-white/40 opacity-0 -translate-y-2"
                                }
                            `}
                        >
                            {route.number}
                        </span>

                        {/* Route Label */}
                        <span
                            className={`
                                text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight
                                transition-all duration-500
                                ${hoveredRoute === null
                                    ? "text-white/90"
                                    : hoveredRoute === route.path
                                        ? "text-white scale-110"
                                        : "text-white/30 scale-95"
                                }
                            `}
                        >
                            {route.label}
                        </span>

                        {/* Animated Border Bottom */}
                        <div
                            className={`
                                h-[2px] bg-white mt-3
                                transition-all duration-700 ease-out
                                ${hoveredRoute === route.path
                                    ? "w-full opacity-100"
                                    : "w-20 opacity-0"
                                }
                            `}
                        />
                    </Link>
                ))}
            </nav>

            {/* Social Media Section */}
            <div className="relative z-10 flex flex-col items-center gap-6 mt-8">
                <p className="text-white/60 text-xs tracking-[0.3em] font-light mb-2">
                    CONNECT WITH ME
                </p>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredSocial(social.name)}
                            onMouseLeave={() => setHoveredSocial(null)}
                            className="group relative flex flex-col items-center gap-2"
                        >
                            {/* Social Name */}
                            <span
                                className={`
                                    text-xl md:text-2xl font-semibold tracking-wide
                                    transition-all duration-300
                                    ${hoveredSocial === social.name
                                        ? "text-white translate-y-0"
                                        : "text-white/70 translate-y-1"
                                    }
                                `}
                            >
                                {social.name}
                            </span>

                            {/* Handle */}
                            <span
                                className={`
                                    text-sm text-white/50 font-light
                                    transition-all duration-300
                                    ${hoveredSocial === social.name
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-2"
                                    }
                                `}
                            >
                                {social.handle}
                            </span>

                            {/* Arrow Icon */}
                            <span
                                className={`
                                    absolute -right-6 text-2xl
                                    transition-all duration-300
                                    ${hoveredSocial === social.name
                                        ? "text-white opacity-100 translate-x-0 translate-y-0"
                                        : "text-white/50 opacity-0 -translate-x-2 translate-y-2"
                                    }
                                `}
                            >
                                ↗
                            </span>

                            {/* Underline */}
                            <div
                                className={`
                                    h-[1px] bg-white/50
                                    transition-all duration-500
                                    ${hoveredSocial === social.name
                                        ? "w-full opacity-100"
                                        : "w-0 opacity-0"
                                    }
                                `}
                            />
                        </a>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-7 left-7 text-white/50 text-xs tracking-[0.2em] font-light">
                <p>BISHAL GHIMIRE</p>
                <p className="mt-1">PHOTOGRAPHY PORTFOLIO</p>
            </div>

            <div className="absolute bottom-7 right-7 text-white/50 text-xs tracking-[0.2em] font-light">
                <p>© 2026</p>
            </div>
        </div>
    )
}
