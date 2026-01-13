import { LuMoveLeft } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

export const BASE_CDN_URL = "https://cdn.jsdelivr.net/gh/isantoshgyawali/bg_assets@master";

export default function Details() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadImages() {
            try {
                const res = await fetch(`${BASE_CDN_URL}/${id}/gallery.json`);
                const data = await res.json();
                setImages(data.images);
            } catch (err) {
                // console.error("Failed to load gallery", err);
            } finally {
                setLoading(false);
            }
        }
        loadImages();
    }, [id]);

    const breakpointCols = {
        default: 3,
        1536: 3,
        1280: 3,
        1024: 3,
        768: 2,
        640: 1
    };

    if (loading) {
        return <div className="p-7 text-gray-500">Loading gallery…</div>;
    }

    return (
        <div className="p-2 overflow-auto h-full">
            <Masonry
                breakpointCols={breakpointCols}
                className="flex -ml-2 w-auto"               // -ml-2 compensates gutter
                columnClassName="pl-2 space-y-2"            // gutter + vertical spacing
            >
                {images.map((name, index) => (
                    <div key={index} className="break-inside-avoid">
                        <img
                            src={`${BASE_CDN_URL}/${id}/${name}`}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                            width={800}
                            height={1200}
                            decoding="async"
                        />
                    </div>
                ))}
            </Masonry>

            <div
                className="fixed bottom-5 right-5 flex items-center gap-2 px-5 py-2 bg-[#008080] rounded-full cursor-pointer hover:opacity-90 transition-all group shadow-lg"
                onClick={() => navigate(-1)}
            >
                <LuMoveLeft
                    size={22}
                    color="white"
                    className="transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
                />
                <p className="text-white font-semibold text-lg transition-all duration-300 group-hover:tracking-wider">
                    Back
                </p>
            </div>
        </div>
    );
}
