import { useNavigate, useLocation, Link } from "react-router-dom"
import { useState } from "react"
import { FiX, FiArrowUpRight } from "react-icons/fi"

type MenuProps = {
    onClose: () => void
}

export default function Menu({ onClose }: MenuProps) {
    const navigate = useNavigate()
    const location = useLocation()
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

    const handleRouteClick = (path: string) => {
        navigate(path)
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-[#008080] z-50 flex flex-col items-center justify-center overflow-hidden">
            <button
                className="absolute top-7 right-7 text-white/60 hover:text-white transition-all duration-300 hover:rotate-90 z-50"
                onClick={onClose}
            >
                <FiX size={32} strokeWidth={1.5} />
            </button>

            <nav className="w-full relative z-10 flex flex-col items-center justify-center gap-4">
                {routes.map((route) => {
                    const isActive = location.pathname === route.path
                    // Show full features if: hovering this route OR (active AND not hovering any route)
                    const showFullFeatures = hoveredRoute === route.path || (isActive && hoveredRoute === null)

                    return (
                        <div
                            key={route.path}
                            onClick={() => handleRouteClick(route.path)}
                            onMouseEnter={() => setHoveredRoute(route.path)}
                            onMouseLeave={() => setHoveredRoute(null)}
                            className="group relative flex flex-col items-center cursor-pointer"
                        >
                            <span
                                className={`
                                    text-sm font-light tracking-[0.3em] mb-2
                                    transition-all duration-500
                                    ${showFullFeatures
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
                                    ${showFullFeatures
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
                                    ${showFullFeatures
                                        ? "w-full opacity-100"
                                        : "w-20 opacity-0"
                                    }
                                `}
                            />
                        </div>
                    )
                })}
            </nav>

            <div className="relative z-10 flex flex-col items-center gap-6 mt-8">
                <p className="text-white/60 text-xs tracking-[0.3em] font-light mb-2">
                    CONNECT WITH ME
                </p>

                <div className="flex flex-row gap-12">
                    {socialLinks.map((social) => {
                        const isSocialHovered = hoveredSocial === social.name

                        return (
                            <Link
                                key={social.name}
                                to={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredSocial(social.name)}
                                onMouseLeave={() => setHoveredSocial(null)}
                                className="group relative flex flex-col items-center gap-2"
                            >
                                <span
                                    className={`
                                        text-xl md:text-2xl font-semibold tracking-wide
                                        transition-all duration-300
                                        text-white translate-y-0
                                        ${isSocialHovered
                                            ? "md:text-white md:translate-y-0"
                                            : "md:text-white/70 md:translate-y-1"
                                        }
                                    `}
                                >
                                    {social.name}
                                </span>

                                <span
                                    className={`
                                        text-sm text-white/50 font-light
                                        transition-all duration-300
                                        opacity-100 translate-y-0
                                        ${isSocialHovered
                                            ? "md:opacity-100 md:translate-y-0"
                                            : "md:opacity-0 md:translate-y-2"
                                        }
                                    `}
                                >
                                    {social.handle}
                                </span>

                                <span
                                    className={`
                                        absolute -right-6 text-xl
                                        transition-all duration-300
                                        text-white opacity-100 translate-x-0 translate-y-0
                                        ${isSocialHovered
                                            ? "md:text-white md:opacity-100 md:translate-x-0 md:translate-y-0"
                                            : "md:text-white/50 md:opacity-0 md:-translate-x-2 md:translate-y-2"
                                        }
                                    `}
                                >
                                    <FiArrowUpRight />
                                </span>

                                <div
                                    className={`
                                        h-[1px] bg-white/50
                                        transition-all duration-500
                                        w-full opacity-100
                                        ${isSocialHovered
                                            ? "md:w-full md:opacity-100"
                                            : "md:w-0 md:opacity-0"
                                        }
                                    `}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="absolute bottom-7 left-7 text-white/50 text-xs tracking-[0.2em] font-light">
                <p>BISHAL GHIMIRE</p>
                <p className="mt-1">PHOTOGRAPHY PORTFOLIO</p>
            </div>

            <div className="absolute bottom-7 right-7 text-white/50 text-xs tracking-[0.2em] font-light">
                <p>© 2026</p>
            </div>
        </div >
    )
}
